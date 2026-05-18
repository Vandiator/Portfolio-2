"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [text, setText] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 350, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 350, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      ) as HTMLElement | null;
      if (interactive) {
        setHovering(true);
        const t = interactive.getAttribute("data-cursor-text");
        setText(t);
      } else {
        setHovering(false);
        setText(null);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: springX, translateY: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[6px] -mt-[6px]"
      >
        <motion.div
          animate={{
            scale: hovering ? 2.2 : 1,
            backgroundColor: hovering
              ? "hsl(var(--accent))"
              : "hsl(var(--fg))",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="h-3 w-3 rounded-full"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ translateX: cursorX, translateY: cursorY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5"
      >
        <motion.div
          animate={{
            scale: hovering ? 1.5 : 1,
            opacity: hovering ? 0.4 : 0.15,
            borderColor: hovering ? "hsl(var(--accent))" : "hsl(var(--fg))",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="h-10 w-10 rounded-full border"
        />
      </motion.div>
      {text && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ translateX: springX, translateY: springY }}
          className="pointer-events-none fixed left-0 top-0 z-[100] ml-6 mt-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg"
        >
          {text}
        </motion.div>
      )}
    </>
  );
}
