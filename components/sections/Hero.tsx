"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  // Cursor parallax for hero glyph
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, [-1, 1], [-20, 20]);
  const ty = useTransform(sy, [-1, 1], [-20, 20]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Background glyph */}
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute inset-0 -z-10 grid place-items-center"
      >
        <span className="text-display select-none text-[34vw] font-normal italic leading-none text-fg/[0.04] md:text-[28vw]">
          V
        </span>
      </motion.div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-bg-elevated/40 px-3 py-1 text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono">{profile.availability}</span>
        </motion.div>

        <h1 className="mt-6 max-w-5xl text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          {"I build software with the".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block whitespace-pre"
            >
              {w}{" "}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-display italic text-accent"
          >
            patience
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            of a filmmaker.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-base text-fg-muted md:text-lg"
        >
          {profile.bio[0]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
            data-cursor-text="explore"
          >
            See selected work
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:bg-bg-elevated"
            data-cursor-text="say hi"
          >
            Get in touch
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-fg-subtle">
            <Sparkles size={12} className="text-accent" />
            <span className="font-mono">AI-enabled · v1</span>
          </span>
        </motion.div>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-10 left-6 right-6 hidden items-end justify-between font-mono text-xs text-fg-subtle md:left-8 md:right-8 md:flex"
        >
          <span>{profile.location.toUpperCase()}</span>
          <span className="hidden md:inline">
            SCROLL · CINEMATIC PORTFOLIO · 2026
          </span>
          <span>{new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  );
}
