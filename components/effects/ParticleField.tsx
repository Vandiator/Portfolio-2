"use client";

import { useEffect, useRef } from "react";

/**
 * Star field matching the HTML reference design.
 *
 * Behaviour:
 *   - 220 stars with static positions (no drift/velocity)
 *   - Scroll-based vertical parallax (stars shift based on scrollY)
 *   - Mouse-based parallax (subtle horizontal/vertical shift)
 *   - Each star drawn with a radial gradient glow + solid core
 *   - Warm pink-white color: rgba(255, 230, 255, ...)
 *   - Stars wrap vertically based on scroll position
 *   - Honors prefers-reduced-motion (static, no parallax)
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
      alpha: number;
      parallaxFactor: number;
    };

    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: Star[] = [];
    const COUNT = 220;

    let scrollY = 0;
    let mx = 0.5;
    let my = 0.5;

    function spawn() {
      stars.length = 0;
      for (let i = 0; i < COUNT; i++) {
        const t = Math.random();
        const r =
          t < 0.65
            ? 0.3 + Math.random() * 0.5
            : t < 0.9
              ? 0.7 + Math.random() * 0.6
              : 1.2 + Math.random() * 0.8;
        const alpha = t < 0.65 ? 0.3 + Math.random() * 0.3 : 0.5 + Math.random() * 0.5;

        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r,
          alpha,
          parallaxFactor: 0.2 + Math.random() * 0.8,
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

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / W;
      my = e.clientY / H;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize);

    const rgb = "255, 230, 255";

    let raf = 0;

    function frame() {
      ctx!.clearRect(0, 0, W, H);

      // Mouse parallax offset
      const mpx = reduceMotion ? 0 : (mx - 0.5) * 30;
      const mpy = reduceMotion ? 0 : (my - 0.5) * 20;

      // Scroll parallax
      const scrollOffset = reduceMotion ? 0 : scrollY;

      for (const s of stars) {
        // Calculate draw position with scroll wrap and parallax
        const sy = scrollOffset * s.parallaxFactor * 0.15;
        let drawY = ((s.y - sy) % H + H) % H;
        let drawX = s.x + mpx * s.parallaxFactor;

        // Wrap X
        if (drawX < 0) drawX += W;
        if (drawX > W) drawX -= W;

        // Draw glow
        const glowR = s.r * 5;
        const glow = ctx!.createRadialGradient(
          drawX,
          drawY,
          0,
          drawX,
          drawY,
          glowR
        );
        glow.addColorStop(0, `rgba(${rgb}, ${s.alpha * 0.4})`);
        glow.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(drawX, drawY, glowR, 0, Math.PI * 2);
        ctx!.fill();

        // Draw solid core
        ctx!.fillStyle = `rgba(${rgb}, ${s.alpha})`;
        ctx!.beginPath();
        ctx!.arc(drawX, drawY, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
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
