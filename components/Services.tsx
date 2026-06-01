export default function Services() {
  const services = [
    {
      title: "Vintage Cabin Photo Booth",
      icon: "📸",
      description:
        "Step inside our private photo booth cabin and create your own photo strip memories with instant premium-quality prints.",
    },
    {
      title: "Udaipur-Inspired Photo Strips",
      icon: "🏰",
      description:
        "Exclusive print templates inspired by Udaipur's heritage, festivals, seasons, and special occasions.",
    },
    {
      title: "Instagram-Worthy Mirror Corner",
      icon: "🪞",
      description:
        "Capture aesthetic mirror selfies with beautiful lighting, perfect for reels, stories, and travel content.",
    },
    {
      title: "Udaipur Passport Collection",
      icon: "🎟️",
      description:
        "Unlock collectible memory markers, special designs, and surprises inspired by iconic Udaipur experiences.",
    },
    {
      title: "Surprise Experiences",
      icon: "🎁",
      description:
        "Discover secret print designs, seasonal collectibles, and limited-time experiences during your visit.",
    },
    {
      title: "Custom Memory Frames",
      icon: "🖼️",
      description:
        "Transform your favorite photo strips into decorative frames, travel displays, and gift-ready keepsakes.",
    },
    {
      title: "Personalized Keychains",
      icon: "🔑",
      description:
        "Create custom keychains using your photos and carry your favorite memories wherever you go.",
    },
    {
      title: "Memory Merchandise",
      icon: "🛍️",
      description:
        "Take home unique souvenirs including frames, keychains, memory holders, and seasonal collectibles.",
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
            Create Memories Worth Taking Home
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            From instant photo strips and collectible keepsakes to personalized
            souvenirs, every experience is designed to help you take a piece of
            Udaipur home with you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl"
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

        {/* Perfect For Section */}
        <div className="mt-24 rounded-3xl border border-slate-700 bg-slate-800 p-10 text-center">
          <h3 className="text-3xl font-bold">
            Perfect For
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Couples",
              "Friends",
              "Solo Travelers",
              "Families",
              "Birthdays",
              "Anniversaries",
              "Udaipur Vacations",
              "Content Creators",
              "Travel Enthusiasts",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-pink-500 px-5 py-2 text-sm font-medium text-pink-300"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-xl font-semibold text-white">
            Create memories. Print them. Take them home.
          </p>
        </div>
      </div>
    </section>
  );
}
