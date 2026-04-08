import Link from "next/link";

export default function GalleryPreview() {
  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-green-700 font-bold text-center">
          Our Work in Action
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Glimpses of our health camps, plantation drives, community
          programs and volunteer activities.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">

              <img
                src={img}
                alt="Humrise activity"
                className="w-full h-60 object-cover hover:scale-105 transition duration-300"
              />

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-10">

          <Link
            href="/gallery"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            View Full Gallery
          </Link>

        </div>

      </div>

    </section>
  );
}