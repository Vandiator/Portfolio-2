"use client";

import { useEffect, useRef } from "react";

/**
 * Star field matching the HTML reference design EXACTLY.
 *
 * - 220 stars with 3 layers (l = 0, 1, 2) and sizes 0.4, 0.8, 1.2 * dpr
 * - Twinkle via sin wave (phase t, speed s 0.001-0.003)
 * - Mouse parallax: mx*(layer+1)*6*dpr for X, my*(layer+1)*4*dpr for Y
 * - Scroll parallax: -scrollY*0.05*(layer+1)*dpr for X, -scrollY*0.15*(layer+1)*dpr for Y
 * - Y wraps: ((py%h)+h)%h
 * - Glow: center rgba(255,230,255,a*tw), mid rgba(220,180,255,a*tw*0.4), edge transparent
 * - Core: rgba(255,255,255,a*tw)
 * - Canvas sized at innerWidth*dpr x innerHeight*dpr
 * - Stars regenerated on every resize
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    type Star = {
      x: number;
      y: number;
      r: number;
      a: number;
      t: number;
      s: number;
      l: number;
    };

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let mx = 0;
    let my = 0;
    let sy = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas!.width = window.innerWidth * dpr;
      h = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      stars = [];
      for (let i = 0; i < 220; i++) {
        const l = Math.floor(Math.random() * 3);
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: (l === 0 ? 0.4 : l === 1 ? 0.8 : 1.2) * dpr,
          a: 0.3 + Math.random() * 0.7,
          t: Math.random() * Math.PI * 2,
          s: 0.001 + Math.random() * 0.003,
          l,
        });
      }
    }

    function onMouseMove(e: MouseEvent) {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    function onScroll() {
      sy = window.scrollY;
    }

    let raf = 0;

    function loop() {
      const dpr = window.devicePixelRatio || 1;
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.t += s.s;
        const tw = 0.5 + Math.sin(s.t) * 0.5;
        const px =
          s.x + mx * (s.l + 1) * 6 * dpr - sy * 0.05 * (s.l + 1) * dpr;
        const py =
          s.y + my * (s.l + 1) * 4 * dpr - sy * 0.15 * (s.l + 1) * dpr;
        const yy = ((py % h) + h) % h;
        const g = ctx!.createRadialGradient(px, yy, 0, px, yy, s.r * 3);
        g.addColorStop(0, `rgba(255,230,255,${s.a * tw})`);
        g.addColorStop(0.5, `rgba(220,180,255,${s.a * tw * 0.4})`);
        g.addColorStop(1, "rgba(220,180,255,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(px, yy, s.r * 3, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(255,255,255,${s.a * tw})`;
        ctx!.beginPath();
        ctx!.arc(px, yy, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1 }}
    />
  );
}
