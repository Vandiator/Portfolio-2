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
    // Native lerp-based smoothing instead of long duration easing.
    // Shorter buffer = no growing easing-debt at the bottom of the page.
    const lenis = new Lenis({
      lerp: 0.12,        // 0..1, higher = snappier. 0.12 ≈ 80ms catch-up.
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
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
