"use client";

import { motion } from "framer-motion";

const items = [
  "MACHINE LEARNING",
  "FRONTEND ENGINEERING",
  "UI / UX SYSTEMS",
  "ERP AUTOMATION",
  "CINEMATIC INTERFACES",
  "RASA & DIALOGFLOW",
  "FIGMA → REACT",
  "DATA PIPELINES",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-bg-subtle/60 py-6 backdrop-blur">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-fg-muted"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>

      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent"
      />
    </div>
  );
}
