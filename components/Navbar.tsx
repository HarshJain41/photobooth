<<<<<<< Updated upstream
=======
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

>>>>>>> Stashed changes
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<<<<<<< Updated upstream
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm">
      <h1 className="text-2xl font-bold">
        SnapBooth
      </h1>

      <div className="flex gap-6">
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
=======
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.jpeg"
            alt="Gangaur Photobooth"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-base font-bold text-slate-900 md:text-lg">
            Gangaur Photobooth
          </span>
        </Link>

        {/* Hamburger toggle (all screen sizes) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-pink-300 hover:text-pink-500"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Nav menu */}
      <div
        className={`${open ? "block" : "hidden"} border-t border-slate-200 bg-white`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 md:flex-row md:justify-end md:gap-8 md:px-6 md:py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-pink-50 hover:text-pink-500 md:rounded-none md:px-0 md:py-0 md:hover:bg-transparent"
            >
              {link.label}
            </Link>
          ))}
        </div>
>>>>>>> Stashed changes
      </div>
    </nav>
  );
}
