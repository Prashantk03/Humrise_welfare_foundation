"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="bg-gray-100 py-20 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl text-green-700 font-bold text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Have questions or want to collaborate? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold text-green-700">
              Get in Touch
            </h2>

            <p className="text-gray-600 mt-4">
              Reach out to Humrise Welfare Foundation for volunteering,
              partnerships, or donations.
            </p>

            <div className="mt-6 space-y-3 text-gray-600">

              <p>
                <strong>Email:</strong> info@humrise.org
              </p>

              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>

              <p>
                <strong>Location:</strong> India
              </p>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl text-green-700 font-bold mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
              >
                Send Message
              </button>

            </form>


          </div>
            <div className="mt-16">
              <iframe
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-96 border-0 rounded-xl"
                loading="lazy"
              ></iframe>
            </div>

        </div>

      </div>

    </main>
  );
}