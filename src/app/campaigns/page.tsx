import Link from "next/link";

export default function CampaignsPage() {
  const campaigns = [
    {
      title: "Free Health Checkup Camp",
      location: "Delhi",
      description:
        "Providing free health checkups and medical awareness programs for underserved communities.",
      goal: 50000,
      raised: 32000,
    },
    {
      title: "Education Support Program",
      location: "Bihar",
      description:
        "Helping children from low-income families access school supplies and educational support.",
      goal: 40000,
      raised: 21000,
    },
    {
      title: "Tree Plantation Drive",
      location: "Uttar Pradesh",
      description:
        "Organizing plantation drives to promote environmental sustainability and greener communities.",
      goal: 20000,
      raised: 9000,
    },
    {
      title: "Food Distribution Drive",
      location: "Delhi",
      description:
        "Providing food support to families facing food insecurity.",
      goal: 30000,
      raised: 15000,
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl text-green-700 font-bold text-center">
          Our Campaigns
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore the campaigns organized by Humrise Welfare Foundation
          and support the causes that bring positive change to communities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {campaigns.map((campaign, index) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >

                <h2 className="text-xl font-semibold text-green-700">
                  {campaign.title}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Location: {campaign.location}
                </p>

                <p className="text-gray-600 mt-3">
                  {campaign.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">

                  <div className="w-full bg-gray-300 h-2 rounded-full">

                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    ₹{campaign.raised} raised of ₹{campaign.goal}
                  </p>

                </div>

                <Link
                  href="/donate"
                  className="inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  Donate
                </Link>

              </div>
            );
          })}

        </div>

      </div>

    </main>
  );
}