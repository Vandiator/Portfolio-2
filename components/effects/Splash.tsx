"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

export function Splash() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      aria-hidden={!show}
      initial={false}
      animate={{ y: show ? 0 : "-100%" }}
      transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1], delay: show ? 0 : 0 }}
      className="fixed inset-0 z-[200] grid place-items-center bg-bg"
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-center text-4xl italic md:text-6xl"
        >
          {profile.name.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block whitespace-pre"
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-3 font-mono text-[11px] uppercase tracking-[0.4em] text-fg-subtle"
        >
          v1 · cinematic edition
        </motion.p>

        <div className="mt-8 h-px w-full overflow-hidden bg-fg/[0.08]">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="mt-3 flex w-full justify-between font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
          <span>{Math.round(progress * 100).toString().padStart(3, "0")}</span>
          <span>loading scene</span>
        </div>
      </div>
    </motion.div>
  );
}
