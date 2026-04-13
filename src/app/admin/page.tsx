"use client";

import { useEffect, useState } from "react";

type DashboardStats = {
  totalCampaigns: number;
  totalRaised: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCampaigns: 0,
    totalRaised: 0,
  });

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Total Campaigns */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">
            Total Campaigns
          </h3>
          <p className="text-2xl font-bold text-green-700">
            {stats.totalCampaigns}
          </p>
        </div>

        {/* Total Volunteers (static for now) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">
            Total Volunteers
          </h3>
          <p className="text-2xl font-bold text-green-700">
            20
          </p>
        </div>

        {/* Total Donations */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">
            Total Donations
          </h3>
          <p className="text-2xl font-bold text-green-700">
            ₹{stats.totalRaised.toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
}