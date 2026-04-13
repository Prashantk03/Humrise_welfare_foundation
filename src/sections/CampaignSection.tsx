"use client";

import { useEffect, useState } from "react";

export default function CampaignSection() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("/api/campaigns")
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, []);

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Our Campaigns
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {campaigns.map((campaign: any) => {

            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={campaign._id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
              >

                <div>

                  <h3 className="text-xl font-semibold text-green-700">
                    {campaign.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Location: {campaign.location}
                  </p>

                  <p className="text-gray-600 mt-3 text-sm">
                    {campaign.description}
                  </p>

                </div>

                <div className="mt-6">

                  <div className="w-full bg-gray-200 h-2 rounded-full">

                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    ₹{campaign.raised} raised of ₹{campaign.goal}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}