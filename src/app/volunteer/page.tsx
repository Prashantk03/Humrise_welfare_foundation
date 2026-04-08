"use client";

import { useState } from "react";

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);

    alert("Thank you for volunteering! We will contact you soon.");

    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      skills: "",
      message: "",
    });
  };

  return (
    <main className="bg-gray-100 min-h-screen py-20">

      <div className="max-w-3xl mx-auto px-6 bg-white p-10 rounded-xl shadow">

        <h1 className="text-3xl text-green-700 font-bold text-center">
          Become a Volunteer
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Join Humrise Welfare Foundation and help us create a positive
          impact in communities.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* Skills */}
          <input
            type="text"
            name="skills"
            placeholder="Your Skills (Teaching, Medical, Organizing etc.)"
            value={form.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Submit Application
          </button>

        </form>

      </div>

    </main>
  );
}