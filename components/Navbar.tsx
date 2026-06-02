import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-700 md:text-base">
            <a href="#about" className="hover:text-pink-500">
              About
            </a>

            <a href="#services" className="hover:text-pink-500">
              Services
            </a>

            <a href="#gallery" className="hover:text-pink-500">
              Gallery
            </a>

            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}