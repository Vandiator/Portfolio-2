"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "@/components/effects/Typewriter";

/**
 * Cinematic avatar frame.
 *
 * Kept: corner brackets, soft halo, head silhouette, eyes that track cursor.
 * Removed: the "scene 01 · vandiator", "● rec", "24fps", "2026 — present"
 * filmstrip text — looked clever once, was noise on every visit.
 *
 * When you have a real photo, replace the SVG block with <Image />.
 */
export function Avatar() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 80, damping: 14 });
  const sy = useSpring(py, { stiffness: 80, damping: 14 });
  const eyeX = useTransform(sx, [-1, 1], [-3, 3]);
  const eyeY = useTransform(sy, [-1, 1], [-2, 2]);
  const tilt = useTransform(sx, [-1, 1], [-3, 3]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / Math.max(window.innerWidth / 2, 1);
      const dy = (e.clientY - cy) / Math.max(window.innerHeight / 2, 1);
      px.set(Math.max(-1, Math.min(1, dx)));
      py.set(Math.max(-1, Math.min(1, dy)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate: tilt }}
      className="relative mx-auto aspect-[4/5] w-full max-w-sm"
    >
      {/* Outer film border */}
      <div className="absolute inset-0 rounded-[28px] border border-border/60 bg-bg-elevated/50" />
      <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-accent/30" />

      {/* Corner brackets */}
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <span
          key={c}
          aria-hidden
          className={
            "absolute h-5 w-5 border-accent " +
            (c === "tl"
              ? "left-3 top-3 border-l-2 border-t-2"
              : c === "tr"
                ? "right-3 top-3 border-r-2 border-t-2"
                : c === "bl"
                  ? "bottom-3 left-3 border-b-2 border-l-2"
                  : "bottom-3 right-3 border-b-2 border-r-2")
          }
        />
      ))}

      {/* Inner "portrait" — abstract face that follows cursor */}
      <div className="absolute inset-10 grid place-items-center">
        <div className="relative h-full w-full">
          {/* Soft halo */}
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" />
          {/* Head silhouette */}
          <svg
            viewBox="0 0 200 240"
            className="relative h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent) / 0.35)" />
                <stop offset="100%" stopColor="hsl(var(--accent) / 0)" />
              </linearGradient>
            </defs>
            <path
              d="M10 230 C 30 175, 75 165, 100 165 C 125 165, 170 175, 190 230 Z"
              fill="url(#hg)"
              opacity="0.55"
            />
            <circle
              cx="100"
              cy="100"
              r="55"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle cx="100" cy="100" r="52" fill="hsl(var(--bg-elevated))" />
          </svg>

          {/* Eyes that track cursor */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="-mt-3 flex items-center gap-5">
              <motion.span
                style={{ x: eyeX, y: eyeY }}
                className="h-1.5 w-1.5 rounded-full bg-fg shadow-[0_0_8px_hsl(var(--accent))]"
              />
              <motion.span
                style={{ x: eyeX, y: eyeY }}
                className="h-1.5 w-1.5 rounded-full bg-fg shadow-[0_0_8px_hsl(var(--accent))]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Caption with typewriter role cycle */}
      <div className="absolute -bottom-12 left-1/2 w-[120%] -translate-x-1/2 px-2 text-center sm:-bottom-8 sm:w-full">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle sm:tracking-[0.3em]">
          <span className="text-fg-subtle">vandiator</span>
          <span className="mx-1.5 text-accent">·</span>
          <Typewriter
            words={[
              "ML & Software Developer",
              "UI/UX Designer",
              "Creative Technologist",
              "Vandiator",
            ]}
            className="text-fg"
          />
        </p>
      </div>
    </motion.div>
  );
}
