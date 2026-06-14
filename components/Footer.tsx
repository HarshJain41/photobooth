import Link from "next/link";

export default function Footer() {
  return (
<<<<<<< Updated upstream
    <footer className="border-t py-8 text-center">
      © 2026 SnapBooth
=======
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">Gangaur Photobooth</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              A vintage-inspired photo booth near Gangaur Ghat, Udaipur —
              turning your favorite moments into printed keepsakes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              Quick Links
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/#about" className="hover:text-pink-400">
                About
              </Link>
              <Link href="/#services" className="hover:text-pink-400">
                Services
              </Link>
              <Link href="/#gallery" className="hover:text-pink-400">
                Gallery
              </Link>
              <Link href="/#contact" className="hover:text-pink-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              Legal
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-pink-400">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-pink-400"
              >
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="hover:text-pink-400">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              Contact Us
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="tel:+917426937749" className="hover:text-pink-400">
                +91 7426937749
              </a>
              <a
                href="mailto:Photoboothmango@gmail.com"
                className="break-words hover:text-pink-400"
              >
                Photoboothmango@gmail.com
              </a>
              <a
                href="https://www.instagram.com/ramit_bhanawat?igsh=NnBwZHBrcjdnbDZq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                @ramit_bhanawat
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Gangaur Photobooth. All rights reserved.
        </div>
      </div>
>>>>>>> Stashed changes
    </footer>
  );
}
