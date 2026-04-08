import Link from "next/link";

export default function VolunteerSection() {
  return (
    <section className="py-20 bg-green-700 text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Become a Volunteer
          </h2>

          <p className="mt-4 text-gray-100">
            Join Humrise Welfare Foundation and help us create a positive
            impact in communities through healthcare camps, education
            programs, plantation drives and social initiatives.
          </p>

          <Link
            href="/volunteer"
            className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Join as Volunteer
          </Link>

        </div>

        {/* Image */}
        <div>
          <img
            src="/images/volunteer.png"
            alt="Volunteers helping community"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}