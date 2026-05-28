"use client";

/**
 * Page background (z-[-10]):
 * Just a fixed div with 3 radial gradients (the "cosmos" class).
 * No animated orbs - matches the HTML reference design.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="gradient-mesh" />
    </div>
  );
}
