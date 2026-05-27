"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "@/components/effects/Typewriter";

/**
 * Orbit-and-planet hero visual.
 *
 * Three concentric rotating rings, each with a satellite dot, around a
 * central planet with a Saturn-style tilted ring. The whole stage rotates
 * subtly with the cursor (parallax tilt via Framer's spring).
 *
 * Rationale: we don't have a real photo yet, and the previous SVG head
 * silhouette read as "placeholder". An orbit visual reads as "deep space
 * portfolio" without pretending to be a face.
 *
 * When you have a real portrait, swap the `.planet` div for an <Image />.
 */
export function Avatar() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const tilt = useTransform(sx, [-1, 1], [-3, 3]);
  const lift = useTransform(sy, [-1, 1], [-2, 2]);

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
    <div className="relative mx-auto w-full max-w-[420px]">
      <motion.div
        ref={ref}
        style={{ rotate: tilt, y: lift }}
        className="orbit-stage relative aspect-square w-full"
      >
        {/* Three rotating rings — each with its own satellite dot */}
        <div className="orbit-ring r1" />
        <div className="orbit-ring r2" />
        <div className="orbit-ring r3" />

        {/* Central planet with Saturn-style tilted ring */}
        <div className="planet" />
      </motion.div>

      {/* Caption with typewriter role cycle */}
      <div className="mt-6 w-full text-center">
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
    </div>
  );
}
