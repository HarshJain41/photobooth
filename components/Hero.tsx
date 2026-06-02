import Image from "next/image";

export default function Hero() {
  const mapsUrl =
    "https://maps.app.goo.gl/Qqvy43fNptnJxhHcA?g_st=iw";

  return (
    <section className="relative flex min-h-[65vh] flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-rose-50 to-white px-6 py-16 text-center">
      <Image
        src="/logo.jpeg"
        alt="Gangaur Photobooth Logo"
        width={120}
        height={120}
        priority
        className="mb-5 rounded-full shadow-lg"
      />

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
        Udaipur • Memories • Keepsakes
      </p>

      <h1 className="max-w-4xl text-4xl font-bold text-slate-900 md:text-5xl">
        Gangaur Photobooth
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        A vintage-inspired photo booth experience near Gangaur Ghat,
        where your favorite moments are instantly printed and transformed
        into timeless keepsakes you'll treasure forever.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-pink-500 px-8 py-3 font-medium text-white transition hover:bg-pink-600"
        >
          Visit Now
        </a>

        <a
          href="#about"
          className="rounded-xl border border-pink-300 px-8 py-3 font-medium text-pink-700 transition hover:bg-pink-100"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}