"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
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
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Left: logo-mark + name */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2"
        >
          <span className="logo-mark transition-transform group-hover:rotate-[20deg]" />
          <span className="text-sm font-medium text-fg">
            Vineet<span className="text-accent">.</span>
          </span>
        </a>

        {/* Center: nav links */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-fg-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Let's talk CTA */}
        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-2)))",
              boxShadow: "0 0 20px rgba(var(--glow), 0.3)",
            }}
          >
            Let&apos;s talk &rarr;
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-border/60 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav className="container-page py-4">
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-center text-base font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-2)))",
                    }}
                  >
                    Let&apos;s talk &rarr;
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
