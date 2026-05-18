"use client";

import { useEffect, useRef } from "react";

/**
 * Floating particles + cursor connection lines.
 *
 * - 80 particles drift around the viewport
 * - When the cursor gets within 200px of a particle, a line is drawn
 *   between cursor and particle, fading with distance
 * - Same particle also glows brighter near the cursor
 * - Honors prefers-reduced-motion (renders a static dot field)
 * - Reads --accent CSS variable so it auto-matches dark/light theme
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

    type Particle = {
      x: number;
      y: number;
      sz: number;
      vx: number;
      vy: number;
    };

    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles: Particle[] = [];
    const COUNT = 80;
    const LINK_DIST = 200;

    function spawn() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          sz: 0.8 + Math.random() * 1.6,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
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
      if (particles.length === 0) spawn();
    }
    resize();

    let mx = -1000;
    let my = -1000;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onLeave = () => {
      mx = -1000;
      my = -1000;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);

    function getAccent(): string {
      // Read the CSS variable so we follow dark/light theme automatically
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      // --accent is "H S% L%"; reconstitute it
      return v ? `hsl(${v})` : "#ff9a3c";
    }

    let raf = 0;

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      const color = getAccent();

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }

        // Base particle dot
        ctx!.globalAlpha = 0.18;
        ctx!.fillStyle = color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx!.fill();

        // Cursor interaction
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          const t = 1 - d / LINK_DIST;

          // Connection line
          ctx!.globalAlpha = t * 0.55;
          ctx!.strokeStyle = color;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mx, my);
          ctx!.stroke();

          // Particle glow boost
          ctx!.globalAlpha = t * 0.85;
          ctx!.fillStyle = color;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.sz * 2.4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      ctx!.globalAlpha = 1;
      if (!reduceMotion) raf = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      frame();
    } else {
      raf = requestAnimationFrame(frame);
    }

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
