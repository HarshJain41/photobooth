export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Services
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 px-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          Weddings
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          Corporate Events
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          Birthday Parties
        </div>
      </div>
    </section>
  );
}
