"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/",               label: "Home" },
  { href: "/about",          label: "About" },
  { href: "/how-it-works",   label: "How It Works" },
  { href: "/contact",        label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const active = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container-md">
        <nav className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand group-hover:bg-orange-600 transition-colors flex items-center justify-center">
              {/* Wrench icon */}
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11 4a7 7 0 016.93 8H21l-3 3-3-3h1.93A5 5 0 1011 9v-.01A7 7 0 0111 4z"/>
              </svg>
            </div>
            <span className="font-extrabold text-xl text-navy tracking-tight">
              Drive<span className="text-brand">Diagnose</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active(href)
                      ? "bg-orange-50 text-brand"
                      : "text-gray-500 hover:text-navy hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/how-it-works#demo" className="hidden md:flex btn-orange text-sm py-2 px-5">
            Try Free Demo
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 pt-3 pb-4 space-y-1">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active(href)
                    ? "bg-orange-50 text-brand"
                    : "text-gray-500 hover:text-navy hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/how-it-works#demo" onClick={() => setOpen(false)} className="btn-orange w-full text-sm">
                Try Free Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
