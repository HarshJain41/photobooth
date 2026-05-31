export default function Services() {
  const services = [
    {
      title: "Weddings",
      description:
        "Capture every smile, laugh, and unforgettable moment on your special day.",
      icon: "💍",
    },
    {
      title: "Corporate Events",
      description:
        "Engage guests with branded photo experiences that leave a lasting impression.",
      icon: "🏢",
    },
    {
      title: "Birthday Parties",
      description:
        "Fun props, instant prints, and memories that guests can take home.",
      icon: "🎉",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-pink-400">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Perfect For Every Celebration
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Whether it's a wedding, corporate gathering, or private party,
            we create interactive photo experiences your guests will never forget.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                {service.description}
              </p>

              <button className="mt-6 text-pink-400 transition hover:text-pink-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
