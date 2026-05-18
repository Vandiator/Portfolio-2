"use client";

/**
 * Film grain overlay — sits ABOVE content with mix-blend-mode so it
 * actually shows up. Pointer-events disabled so it never blocks clicks.
 *
 * 4 layers:
 *  - Layer 1: fine noise, fast steps() jitter
 *  - Layer 2: coarse noise, slow drift
 *  - Scanline: projector sweep top→bottom every ~14s
 *  - Flicker: rare projector blink
 */
export function FilmGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      <div className="grain-layer layer-1" />
      <div className="grain-layer layer-2" />
      <div className="scanline" />
      <div className="flicker" />
    </div>
  );
}
