import Link from "next/link";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="text-sm font-semibold text-pink-500 hover:text-pink-600"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold text-slate-900 md:text-4xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Last Updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
        {title}
      </h2>

      <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
