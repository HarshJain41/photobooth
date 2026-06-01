import Image from "next/image";

export default function Hero() {
  const mapsUrl =
    "https://maps.app.goo.gl/Qqvy43fNptnJxhHcA?g_st=iw";

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/logo.jpeg"
        alt="Gangaur Photobooth Logo"
        width={140}
        height={140}
        priority
        className="mb-6"
      />

      <h1 className="text-5xl font-bold md:text-6xl">
        Gangaur Photobooth
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-gray-500">
        A vintage-inspired photo booth experience near Gangaur Ghat, Udaipur,
        where your favorite moments are instantly printed and transformed into
        timeless keepsakes.
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Visit Now
      </a>
    </section>
  );
}