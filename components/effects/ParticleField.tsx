"use client";

import { useEffect, useRef } from "react";

/**
 * Star field - space-themed background.
 *
 * Behaviour:
 *   - 100 stars in 3 size tiers (faint pinpricks to bright headliners)
 *   - Each star drifts slowly + has its own twinkle phase
 *   - Cursor proximity creates a halo/flare on nearby stars
 *   - Subtle mouse parallax shifts rendering position
 *   - Honors prefers-reduced-motion (no drift, no twinkle)
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Star = {
      x: number;
      y: number;
      r: number;
      tier: 0 | 1 | 2;
      vx: number;
      vy: number;
      tw: number;
      tws: number;
    };

    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: Star[] = [];
    const COUNT = 100;
    const PROX_DIST = 220;

    function spawn() {
      stars.length = 0;
      for (let i = 0; i < COUNT; i++) {
        const t = Math.random();
        const tier: Star["tier"] = t < 0.6 ? 0 : t < 0.9 ? 1 : 2;
        const baseR =
          tier === 0
            ? 0.4 + Math.random() * 0.5
            : tier === 1
              ? 0.9 + Math.random() * 0.7
              : 1.5 + Math.random() * 1.0;

        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: baseR,
          tier,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          tw: Math.random() * Math.PI * 2,
          tws: 0.012 + Math.random() * 0.02,
        });
      }
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (stars.length === 0) spawn();
    }
    resize();

    let mx = -10000;
    let my = -10000;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onLeave = () => {
      mx = -10000;
      my = -10000;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);

    const rgb = "200, 210, 255";

    let raf = 0;

    function frame() {
      ctx!.clearRect(0, 0, W, H);

      // Subtle parallax offset based on mouse position
      const px = mx > -9000 ? (mx - W / 2) * 0.02 : 0;
      const py = my > -9000 ? (my - H / 2) * 0.02 : 0;

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0 || s.x > W) s.vx *= -1;
          if (s.y < 0 || s.y > H) s.vy *= -1;
          s.tw += s.tws;
        }

        const twinkle =
          s.tier === 0
            ? 1
            : 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(s.tw));

        const baseAlpha =
          s.tier === 0 ? 0.45 : s.tier === 1 ? 0.7 : 0.95;

        // Apply parallax offset to draw position
        const drawX = s.x + px;
        const drawY = s.y + py;

        // Distance to cursor (use actual star position for proximity check)
        const dx = mx - s.x;
        const dy = my - s.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const near = d < PROX_DIST;
        const t = near ? 1 - d / PROX_DIST : 0;

        // Soft halo for bright stars and stars within cursor reach
        if (s.tier === 2 || near) {
          const haloR = s.r * (s.tier === 2 ? 6 : 4) * (1 + t * 0.5);
          const halo = ctx!.createRadialGradient(
            drawX,
            drawY,
            0,
            drawX,
            drawY,
            haloR
          );
          const haloAlpha = (s.tier === 2 ? 0.18 : 0.08) * twinkle + t * 0.25;
          halo.addColorStop(0, `rgba(${rgb}, ${haloAlpha})`);
          halo.addColorStop(1, `rgba(${rgb}, 0)`);
          ctx!.fillStyle = halo;
          ctx!.beginPath();
          ctx!.arc(drawX, drawY, haloR, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Star body
        const bodyAlpha = baseAlpha * twinkle + t * 0.4;
        ctx!.fillStyle = `rgba(${rgb}, ${Math.min(1, bodyAlpha)})`;
        ctx!.beginPath();
        ctx!.arc(drawX, drawY, s.r * (1 + t * 0.6), 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5]"
    />
  );
}
