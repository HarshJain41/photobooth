export default function Contact() {
  const mapsUrl =
    "https://maps.app.goo.gl/Qqvy43fNptnJxhHcA?g_st=iw";

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-pink-400">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {/* Address */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-pink-500"
          >
            <div className="text-4xl">📍</div>

            <h3 className="mt-4 text-xl font-bold">
              Address
            </h3>

            <p className="mt-3 text-slate-300">
              Near Gangaur Ghat
              <br />
              Udaipur, Rajasthan
              <br />
              India
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+917426937749"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-pink-500"
          >
            <div className="text-4xl">📞</div>

            <h3 className="mt-4 text-xl font-bold">
              Phone
            </h3>

            <p className="mt-3 text-slate-300">
              +91 7426937749
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@gangaurphotobooth.com"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-pink-500"
          >
            <div className="text-4xl">✉️</div>

            <h3 className="mt-4 text-xl font-bold">
              Email
            </h3>

            <p className="mt-3 break-words text-slate-300">
              Photoboothmango@gmail.com
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ramit_bhanawat?igsh=NnBwZHBrcjdnbDZq&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-pink-500"
          >
            <div className="text-4xl">📸</div>

            <h3 className="mt-4 text-xl font-bold">
              Instagram
            </h3>

            <p className="mt-3 text-slate-300">
              @ramit_bhanawat
            </p>
          </a>

          {/* Opening Hours */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-4xl">🕒</div>

            <h3 className="mt-4 text-xl font-bold">
              Opening Hours
            </h3>

            <p className="mt-3 text-slate-300">
              Daily
              <br />
              8:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}