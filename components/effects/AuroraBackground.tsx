"use client";

/**
 * Animated background layer used behind the hero / page.
 * Soft warm-amber aurora orbs + subtle film grain.
 * GPU-only (transforms + opacity), respects prefers-reduced-motion.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="vignette" />
    </div>
  );
}
