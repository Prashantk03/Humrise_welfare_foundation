async function getCampaigns() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/campaigns`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <main className="bg-gray-100 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl text-green-700 font-bold text-center">
          Our Campaigns
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {campaigns.map((campaign:any) => {

            const progress =
              (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={campaign._id}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h3 className="text-xl font-semibold text-green-700">
                  {campaign.title}
                </h3>

                <p className="text-gray-600">
                  Location: {campaign.location}
                </p>

                <div className="mt-4">

                  <div className="w-full bg-gray-300 h-2 rounded-full">

                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                  <p className="text-sm mt-2 text-gray-600">
                    ₹{campaign.raised} raised of ₹{campaign.goal}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </main>
  );
}