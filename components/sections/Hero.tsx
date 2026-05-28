"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/effects/Typewriter";

export function Hero() {
  const heroDelay = 1.6;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 md:pt-28"
    >
      <div className="container-page relative">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* LEFT - text content */}
          <div>
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: heroDelay }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-fg-muted">
                Available for new orbits &middot; 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: heroDelay + 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(48px, 7vw, 92px)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Building
              <br />
              digital <span className="accent-text">universes</span>
              <br />
              one pixel at a time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.3 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-fg-muted md:text-lg"
            >
              I&apos;m Vineet Vishwakarma — a developer and designer crafting
              interfaces that feel as expansive as the night sky. From quiet
              portfolios to ambitious product surfaces.
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.4 }}
              className="mt-4 font-mono text-sm text-fg-subtle"
            >
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "UI/UX Designer",
                  "Creative Coder",
                  "Problem Solver",
                ]}
              />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-2)))",
                }}
              >
                Explore work &rarr;
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-fg transition-colors hover:border-accent"
              >
                Start a project
              </a>
            </motion.div>
          </div>

          {/* RIGHT - Orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: heroDelay + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center justify-center"
          >
            <div className="orbit-stage relative aspect-square w-full max-w-[420px]">
              <div className="orbit-ring r1" />
              <div className="orbit-ring r2" />
              <div className="orbit-ring r3" />
              <div className="planet" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
