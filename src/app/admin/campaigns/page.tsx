"use client";

import { useEffect, useState } from "react";

type Campaign = {
  _id: string;
  title: string;
  location: string;
  description: string;
  goal: number;
  raised: number;
};

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Campaign | null>(null);

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    goal: "",
    raised: "",
  });

  const fetchCampaigns = async () => {
    try {
      const res = await fetch("/api/campaigns");
      const data: Campaign[] = await res.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "goal" || name === "raised" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("/api/campaigns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...form,
      goal: Number(form.goal),
      raised: Number(form.raised),
    }),
  });

  /* refresh campaign list */
  fetchCampaigns();

  /* clear form */
  setForm({
    title: "",
    location: "",
    description: "",
    goal: "",
    raised: "",
  });
};

  const deleteCampaign = async (id: string) => {
    await fetch("/api/campaigns", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchCampaigns();
  };

  const updateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/campaigns", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editing),
    });

    setEditing(null);
    fetchCampaigns();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-green-700">
        Campaign Management
      </h1>

      {/* Add Campaign Form */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Add New Campaign</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Campaign Title"
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
            required
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
            required
          />

          <input
            type="number"
            name="goal"
            value={form.goal}
            onChange={handleChange}
            placeholder="Goal Amount"
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
            required
          />

          <input
            type="number"
            name="raised"
            value={form.raised}
            onChange={handleChange}
            placeholder="Raised Amount"
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Campaign Description"
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 md:col-span-2"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 md:col-span-2"
          >
            Create Campaign
          </button>
        </form>
      </div>

      {/* Campaign List */}
      {loading ? (
        <p className="text-gray-500">Loading campaigns...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((c) => {
            const progress = (c.raised / c.goal) * 100;

            return (
              <div
                key={c._id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-green-700">
                  {c.title}
                </h3>

                <p className="text-sm text-gray-500">{c.location}</p>

                <p className="text-sm text-gray-600 mt-2">
                  {c.description}
                </p>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="text-xs text-gray-600 mt-2">
                    ₹{c.raised} raised of ₹{c.goal}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => setEditing(c)}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteCampaign(c._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Campaign</h2>

            <form onSubmit={updateCampaign} className="space-y-3">
              <input
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
                className="w-full border p-2 rounded text-gray-800"
              />

              <input
                value={editing.location}
                onChange={(e) =>
                  setEditing({ ...editing, location: e.target.value })
                }
                className="w-full border p-2 rounded text-gray-800"
              />

              <textarea
                value={editing.description}
                onChange={(e) =>
                  setEditing({ ...editing, description: e.target.value })
                }
                className="w-full border p-2 rounded text-gray-800"
              />

              <input
                type="number"
                value={editing.goal || ""}
                onChange={(e) =>
                  setEditing({ ...editing, goal: Number(e.target.value) })
                }
                className="w-full border p-2 rounded text-gray-800"
              />

              <input
                type="number"
                value={editing.raised || ""}
                onChange={(e) =>
                  setEditing({ ...editing, raised: Number(e.target.value) })
                }
                className="w-full border p-2 rounded text-gray-800"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="px-3 py-1 border rounded text-gray-800"
                >
                  Cancel
                </button>

                <button className="bg-green-600 text-white px-3 py-1 rounded">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}