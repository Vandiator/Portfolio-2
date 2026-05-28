"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { Avatar } from "@/components/Avatar";

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
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: heroDelay }}
              className="font-mono text-xs uppercase tracking-widest text-fg-subtle"
            >
              Developer &amp; Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: heroDelay + 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-balance text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Crafting Digital
              <br />
              Experiences with
              <br />
              <span className="text-display accent-text">Purpose &amp; Precision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.3 }}
              className="mt-6 max-w-xl text-balance text-base text-fg-muted md:text-lg"
            >
              {profile.bio[0]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-fg transition-colors hover:border-accent"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.7 }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-fg-subtle">
                Currently available for freelance
              </span>
            </motion.div>
          </div>

          {/* RIGHT - Avatar with orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: heroDelay + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
