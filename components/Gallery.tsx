import Image from "next/image";

export default function Gallery() {
  const images = [
    "/photo1.jpeg",
    "/photo2.jpeg",
    "/photo3.jpeg",
    "/photo4.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-pink-500">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Moments Captured Forever
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            A glimpse into the memories, smiles, and experiences created at
            Gangaur Photobooth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={600}
                height={600}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}