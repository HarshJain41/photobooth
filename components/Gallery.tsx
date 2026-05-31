export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Gallery
      </h2>

      <div className="mx-auto grid max-w-6xl gap-4 px-8 md:grid-cols-3">
        <div className="h-64 rounded-lg bg-gray-300"></div>
        <div className="h-64 rounded-lg bg-gray-300"></div>
        <div className="h-64 rounded-lg bg-gray-300"></div>
      </div>
    </section>
  );
}
