"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll, always on.
 *
 * We deliberately do NOT bail out for prefers-reduced-motion here:
 * the user explicitly wants the scroll feel everywhere. Section reveal
 * animations still respect reduced-motion via Framer Motion + the global
 * CSS rule in globals.css. Lenis itself only smooths the wheel, it does
 * not animate any element transforms.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smoothTouch is not on the public types but the runtime accepts it
      // (kept off — touch already smooths natively on most mobile browsers)
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
