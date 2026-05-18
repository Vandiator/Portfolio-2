"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Strings to cycle through. */
  words: string[];
  /** Per-character type speed in ms. Default 55. */
  typeMs?: number;
  /** Per-character delete speed in ms. Default 30. */
  deleteMs?: number;
  /** Pause after a word is fully typed, ms. Default 1600. */
  holdMs?: number;
  /** Pause after a word is fully deleted, ms. Default 350. */
  gapMs?: number;
  /** Optional className applied to the wrapper. */
  className?: string;
  /** Caret colour utility class, defaults to text-accent. */
  caretClassName?: string;
};

/**
 * Cycling typewriter:
 *   - Types the current word char-by-char
 *   - Holds it
 *   - Backspaces it
 *   - Moves to next word, loops
 *
 * Respects prefers-reduced-motion (renders the first word, no animation).
 */
export function Typewriter({
  words,
  typeMs = 55,
  deleteMs = 30,
  holdMs = 1600,
  gapMs = 350,
  className,
  caretClassName = "text-accent",
}: Props) {
  const [text, setText] = useState("");
  const [reduced, setReduced] = useState(false);
  const idxRef = useRef(0);
  const phaseRef = useRef<"typing" | "holding" | "deleting" | "gap">("typing");
  const lenRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setText(words[0] ?? "");
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[idxRef.current % words.length] ?? "";
      const phase = phaseRef.current;

      if (phase === "typing") {
        if (lenRef.current < word.length) {
          lenRef.current += 1;
          setText(word.slice(0, lenRef.current));
          timer = setTimeout(tick, typeMs);
        } else {
          phaseRef.current = "holding";
          timer = setTimeout(tick, holdMs);
        }
      } else if (phase === "holding") {
        phaseRef.current = "deleting";
        timer = setTimeout(tick, deleteMs);
      } else if (phase === "deleting") {
        if (lenRef.current > 0) {
          lenRef.current -= 1;
          setText(word.slice(0, lenRef.current));
          timer = setTimeout(tick, deleteMs);
        } else {
          phaseRef.current = "gap";
          timer = setTimeout(tick, gapMs);
        }
      } else {
        idxRef.current += 1;
        phaseRef.current = "typing";
        timer = setTimeout(tick, typeMs);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words, typeMs, deleteMs, holdMs, gapMs]);

  return (
    <span className={className} aria-live="polite">
      <span>{text}</span>
      {!reduced && (
        <span
          aria-hidden
          className={`ml-0.5 inline-block w-[1px] animate-pulse self-stretch ${caretClassName}`}
          style={{
            verticalAlign: "-0.1em",
            height: "1em",
            background: "currentColor",
          }}
        />
      )}
    </span>
  );
}
