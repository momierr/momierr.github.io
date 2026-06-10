"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Conferences", href: "#conferences" },
  { label: "CV", href: "/docs/CV_MOMIER.pdf", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm border-b border-slate-200" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold text-slate-900 hover:text-blue-700 transition-colors">
          R. Momier
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
