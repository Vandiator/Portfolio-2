"use client";

/**
 * Page background stack (z-[-10]):
 *   1. Animated gradient mesh (slow drift, full-page)
 *   2. Aurora orbs (faster local glow, hero-focused)
 *   3. Vignette (radial darken)
 *   4. Static dark grain (subtle)
 *
 * GPU-only (transforms + opacity), respects prefers-reduced-motion.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="gradient-mesh" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="vignette" />
      <div className="grain" />
    </div>
  );
}
