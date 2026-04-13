export default function GalleryPage() {
  const images = [
    "/images/work1.png",
    "/images/work2.png",
    "/images/work3.png",
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl text-green-700 font-bold text-center">
          Gallery
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Moments from our health camps, plantation drives, food distribution
          and community development activities.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >

              <img
                src={img}
                alt="Humrise activity"
                className="w-full h-60 object-cover hover:scale-110 transition duration-300"
              />

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}