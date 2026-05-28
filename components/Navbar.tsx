"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" />
          Vineet<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Let&apos;s talk <span className="arrow">&rarr;</span>
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </div>
      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "oklch(8% 0.03 290 / 0.95)", backdropFilter: "blur(14px)",
          padding: "1rem 2rem", borderTop: "1px solid var(--border)"
        }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMobileOpen(false)}
                   style={{ color: "var(--muted)", textDecoration: "none", fontSize: ".9rem" }}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}
                 style={{ display: "inline-block" }}>
                Let&apos;s talk &rarr;
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
