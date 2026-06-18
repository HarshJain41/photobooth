export default function Contact() {
  const mapsUrl =
    "https://maps.app.goo.gl/Qqvy43fNptnJxhHcA?g_st=iw";

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-400">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Visit Gangaur Photobooth
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We'd love to be part of your Udaipur memories. Stop by,
            strike a pose, and take home beautifully printed keepsakes.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur">
          <div className="divide-y divide-slate-800">
            <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-white">
                📍 Address
              </span>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:text-pink-400"
              >
                Near Gangaur Ghat, Udaipur, Rajasthan
              </a>
            </div>

            <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-white">
                📞 Phone
              </span>

              <a
                href="tel:+917426937749"
                className="text-slate-300 transition hover:text-pink-400"
              >
                +91 7426937749
              </a>
            </div>

            <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-white">
                ✉️ Email
              </span>

              <a
                href="mailto:Photoboothmango@gmail.com"
                className="break-all text-slate-300 transition hover:text-pink-400"
              >
                Photoboothmango@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-white">
                📸 Instagram
              </span>

              <a
                href="https://www.instagram.com/gangaur_photobooth"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-slate-300 transition hover:text-pink-400"
              >
                @gangaur_photobooth
              </a>
            </div>

            <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-white">
                🕒 Opening Hours
              </span>

              <span className="text-slate-300">
                Daily • 8:00 AM – 11:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}