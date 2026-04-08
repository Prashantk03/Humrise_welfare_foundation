import Link from "next/link";

export default function CampaignSection() {
  const campaigns = [
    {
      title: "Free Health Checkup Camp",
      location: "Delhi",
      goal: 50000,
      raised: 32000,
    },
    {
      title: "Education Support Drive",
      location: "Bihar",
      goal: 40000,
      raised: 21000,
    },
    {
      title: "Plantation Drive",
      location: "Uttar Pradesh",
      goal: 20000,
      raised: 9000,
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-green-700 font-bold text-center">
          Our Campaigns
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Support our ongoing initiatives and help us create a positive impact.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {campaigns.map((campaign, index) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
              >

                <h3 className="text-xl font-semibold text-green-700">
                  {campaign.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  Location: {campaign.location}
                </p>

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
                  className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                >
                  Donate
                </Link>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}