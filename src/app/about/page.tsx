export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            About Humrise Welfare Foundation
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Humrise Welfare Foundation is committed to uplifting
            underprivileged communities through healthcare initiatives,
            education support, plantation drives and social welfare programs.
          </p>

        </div>
      </section>


      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl text-green-700 font-bold">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600">
              Humrise Welfare Foundation is a non-profit organization working
              towards building a better society. Our initiatives focus on
              providing essential services like healthcare support, education
              assistance, environmental sustainability through plantation drives
              and community development programs.
            </p>

            <p className="mt-4 text-gray-600">
              Through the support of volunteers, donors and corporate partners,
              we are able to organize impactful campaigns that bring real
              change to communities in need.
            </p>
          </div>

          <div>
            {/* <img
              src="/images/about.jpg"
              alt="Humrise activities"
              className="rounded-xl shadow-lg"
            /> */}
          </div>

        </div>
      </section>


      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-green-700">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600">
              To empower underserved communities by providing access to
              healthcare services, education resources, environmental
              sustainability programs and social welfare initiatives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-green-700">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600">
              To create a society where every individual has equal access
              to opportunities, basic necessities and a healthy environment.
            </p>
          </div>

        </div>

      </section>


      {/* Impact */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl text-green-700 font-bold">
            Our Impact
          </h2>

          <p className="text-gray-600 mt-4">
            With the help of volunteers and donors, Humrise continues
            to expand its impact across communities.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            <div>
              <h3 className="text-4xl font-bold text-green-700">10,000+</h3>
              <p className="text-gray-600 mt-2">Lives Impacted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700">120+</h3>
              <p className="text-gray-600 mt-2">Health Camps</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700">50+</h3>
              <p className="text-gray-600 mt-2">Volunteers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700">20+</h3>
              <p className="text-gray-600 mt-2">Corporate Partners</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}