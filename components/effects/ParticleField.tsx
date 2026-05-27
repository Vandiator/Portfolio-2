"use client";

import { useEffect, useRef } from "react";

/**
 * Star field — space-themed background.
 *
 * Behaviour:
 *   - 140 stars in 3 size tiers (faint pinpricks → bright headliners)
 *   - Each star drifts slowly + has its own twinkle phase
 *   - Cursor within 220px → constellation lines connect cursor to stars,
 *     and the nearest stars flare brighter
 *   - Honors prefers-reduced-motion (no drift, no twinkle, lines still draw)
 *
 * Colour:
 *   - Reads --star-rgb at runtime from the host element so dark/light
 *     themes can pick contrasting colours without re-mounting the canvas.
 *     Dark mode: warm white. Light mode: deep navy blue.
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
      r: number;          // base radius
      tier: 0 | 1 | 2;    // 0 = faint, 1 = mid, 2 = bright
      vx: number;
      vy: number;
      tw: number;         // twinkle phase (radians)
      tws: number;        // twinkle speed
    };

    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: Star[] = [];
    const COUNT = 140;
    const LINK_DIST = 220;

    function spawn() {
      stars.length = 0;
      for (let i = 0; i < COUNT; i++) {
        // Tier weights: 60% faint, 30% mid, 10% bright headliners
        const t = Math.random();
        const tier: Star["tier"] = t < 0.6 ? 0 : t < 0.9 ? 1 : 2;
        const baseR =
          tier === 0
            ? 0.5 + Math.random() * 0.6
            : tier === 1
              ? 1.0 + Math.random() * 0.8
              : 1.6 + Math.random() * 1.2;

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
    let scrollY = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onLeave = () => {
      mx = -10000;
      my = -10000;
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    function getStarRgb(): string {
      // Single dark theme — warm white starlight always
      return "245, 240, 230";
    }

    let raf = 0;

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      const rgb = getStarRgb();

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0 || s.x > W) s.vx *= -1;
          if (s.y < 0 || s.y > H) s.vy *= -1;
          s.tw += s.tws;
        }

        // Parallax: brighter (closer) tiers move more with mouse + scroll.
        // tier 0 (faint, distant) drifts ~6px, tier 2 (bright, near) drifts ~18px.
        const depth = (s.tier + 1) * 6;
        const px = s.x - scrollY * 0.04 * (s.tier + 1);
        const py = s.y - scrollY * 0.12 * (s.tier + 1);
        // Wrap vertically so stars never disappear after long scroll
        const wrappedY = ((py % H) + H) % H;
        const renderX = px;
        const renderY = wrappedY;

        // Twinkle: 0.65–1.0 multiplier on alpha for non-faint tiers.
        const twinkle =
          s.tier === 0
            ? 1
            : 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(s.tw));

        const baseAlpha =
          s.tier === 0 ? 0.45 : s.tier === 1 ? 0.7 : 0.95;

        // Distance to cursor (against rendered position so cursor lines
        // hit the visible star, not the unparallaxed one)
        const dx = mx - renderX;
        const dy = my - renderY;
        const d = Math.sqrt(dx * dx + dy * dy);
        const near = d < LINK_DIST;
        const t = near ? 1 - d / LINK_DIST : 0;

        // 1) Soft halo for bright stars (and any star inside cursor reach)
        if (s.tier === 2 || near) {
          const haloR = s.r * (s.tier === 2 ? 6 : 4) * (1 + t * 0.5);
          const halo = ctx!.createRadialGradient(
            renderX,
            renderY,
            0,
            renderX,
            renderY,
            haloR
          );
          const haloAlpha = (s.tier === 2 ? 0.18 : 0.08) * twinkle + t * 0.25;
          halo.addColorStop(0, `rgba(${rgb}, ${haloAlpha})`);
          halo.addColorStop(1, `rgba(${rgb}, 0)`);
          ctx!.fillStyle = halo;
          ctx!.beginPath();
          ctx!.arc(renderX, renderY, haloR, 0, Math.PI * 2);
          ctx!.fill();
        }

        // 2) Star body
        const bodyAlpha = baseAlpha * twinkle + t * 0.4;
        ctx!.fillStyle = `rgba(${rgb}, ${Math.min(1, bodyAlpha)})`;
        ctx!.beginPath();
        ctx!.arc(renderX, renderY, s.r * (1 + t * 0.6), 0, Math.PI * 2);
        ctx!.fill();

        // 3) Constellation line to cursor
        if (near) {
          ctx!.strokeStyle = `rgba(${rgb}, ${t * 0.45})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(renderX, renderY);
          ctx!.lineTo(mx, my);
          ctx!.stroke();
        }
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
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
