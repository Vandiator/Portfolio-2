"use client";

import { motion } from "framer-motion";

/**
 * Real verbs from real work, not abstract buzzwords. Each line is a
 * concrete thing on Vineet's resume.
 */
const items = [
  "BUILT THE DEEPFAKE DETECTION FRONTEND",
  "DESIGNED A CAMPUS RESOURCE PLATFORM IN FIGMA",
  "AUTOMATED 200+ ERP DATASETS",
  "SHIPPED CHATBOTS WITH RASA & DIALOGFLOW",
  "REACHED THE SIH SEMI-FINALS",
  "WROTE FRONTEND IN HTML / CSS / JS",
  "TRAINED ML MODELS IN SCIKIT-LEARN",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-bg-subtle/60 py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-fg-muted"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((item, i) => (
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
