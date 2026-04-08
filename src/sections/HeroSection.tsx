import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Rising Together for Humanity
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Humrise Welfare Foundation works to uplift underprivileged
            communities through healthcare programs, education support
            and social welfare campaigns.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/donate"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Donate Now
            </Link>

            <Link
              href="/campaigns"
              className="border border-gray-400 px-6 py-3 rounded-lg text-green-700 hover:bg-gray-200 transition"
            >
              Explore Campaigns
            </Link>

          </div>

        </div>

        {/* Image */}
        <div>

          <img
            src="/images/hero.png"
            alt="Helping community"
            className="rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}