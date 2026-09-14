"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
  maxFontSize?: number;
  className?: string;
  /** When true, plays an autonomous sinusoidal wave sweep through the characters.
   *  Used by LoadingScreen to make the effect visible without pointer interaction. */
  autoWave?: boolean;
}

const BASE_WEIGHT = 400;
const MAX_WEIGHT = 620;
const MAX_SCALE_BOOST = 0.05;
const FIT_SAFETY = 0.94;
const LETTER_SPACING = "-0.02em";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function TextPressure({
  text = "SAIT",
  fontFamily = "var(--font-geist-sans), 'Geist', Arial, Helvetica, sans-serif",
  fontUrl,
  width = true,
  weight = true,
  italic = false,
  alpha = false,
  stroke = false,
  textColor = "#1F2A44",
  strokeColor = "#1F2A44",
  minFontSize = 28,
  maxFontSize = 168,
  className = "",
  autoWave = false,
}: TextPressureProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const charStateRef = useRef<{ w: number; s: number; o: number }[]>([]);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const chars = useMemo(() => Array.from(text), [text]);

  if (charStateRef.current.length !== chars.length) {
    charStateRef.current = chars.map(() => ({ w: BASE_WEIGHT, s: 1, o: 1 }));
  }

  // Optionally load a custom variable font URL.
  useEffect(() => {
    if (!fontUrl) return;
    const fontName = "TextPressureFont";
    const font = new FontFace(fontName, `url(${fontUrl})`);
    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
      })
      .catch((err) => {
        console.warn("Failed to load TextPressure font:", err);
      });
  }, [fontUrl]);

  const applyBaseStyles = useCallback(() => {
    spansRef.current.forEach((span) => {
      if (!span) return;
      span.style.fontWeight = `${BASE_WEIGHT}`;
      span.style.transform = "scaleX(1)";
      span.style.opacity = "1";
    });
  }, []);

  /**
   * Fit the text to the available width via binary search on a hidden
   * clone. This keeps "SAIT" large and editorial while guaranteeing it
   * can never cause horizontal overflow at any viewport size.
   */
  const fitToWidth = useCallback(() => {
    const outer = outerRef.current;
    const measure = measureRef.current;
    if (!outer || !measure || chars.length === 0) return;

    const available = outer.clientWidth;
    if (available <= 0) return;

    let lo = Math.max(1, minFontSize);
    let hi = Math.min(maxFontSize, available);
    if (lo > hi) {
      setFontSize(hi);
      return;
    }

    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      measure.style.fontSize = `${mid}px`;
      if (measure.offsetWidth <= available * FIT_SAFETY) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }

    measure.style.fontSize = "";
    setFontSize(lo);
  }, [chars.length, minFontSize, maxFontSize, text]);

  useIsomorphicLayoutEffect(() => {
    fitToWidth();

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(fitToWidth);
    };

    window.addEventListener("resize", onResize);

    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && outerRef.current) {
      observer = new ResizeObserver(onResize);
      observer.observe(outerRef.current);
    }

    let cancelled = false;
    document.fonts?.ready
      .then(() => {
        if (!cancelled) fitToWidth();
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [fitToWidth]);

  // ── Pointer-driven pressure ───────────────────────────────────────────────
  // Disabled for reduced motion or when no variable property is enabled.
  // The rAF loop only runs while the pointer is active or values are settling.
  useEffect(() => {
    if ((!weight && !width && !alpha) || chars.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyBaseStyles();
      return;
    }

    const tick = () => {
      rafRef.current = null;
      const pointer = pointerRef.current;
      let settled = true;

      for (let i = 0; i < spansRef.current.length; i++) {
        const span = spansRef.current[i];
        const state = charStateRef.current[i];
        if (!span || !state) continue;

        let targetWeight = BASE_WEIGHT;
        let targetScale = 1;
        let targetOpacity = 1;

        if (pointer) {
          const rect = span.getBoundingClientRect();
          const dist = Math.hypot(
            pointer.x - (rect.left + rect.width / 2),
            pointer.y - (rect.top + rect.height / 2)
          );
          const radius = Math.max(240, rect.height * 3.2);
          const pressure = Math.max(0, 1 - dist / radius);

          if (weight) targetWeight = BASE_WEIGHT + pressure * (MAX_WEIGHT - BASE_WEIGHT);
          if (width) targetScale = 1 + pressure * MAX_SCALE_BOOST;
          if (alpha) targetOpacity = 0.55 + pressure * 0.45;
        }

        state.w += (targetWeight - state.w) * 0.16;
        state.s += (targetScale - state.s) * 0.16;
        state.o += (targetOpacity - state.o) * 0.16;

        if (
          Math.abs(targetWeight - state.w) > 0.4 ||
          Math.abs(targetScale - state.s) > 0.002 ||
          Math.abs(targetOpacity - state.o) > 0.004
        ) {
          settled = false;
        }

        span.style.fontWeight = `${Math.round(state.w)}`;
        span.style.transform = `scaleX(${state.s.toFixed(4)})`;
        span.style.opacity = state.o.toFixed(3);
      }

      if (!(settled && !pointer)) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const ensureLoop = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      ensureLoop();
    };
    const onPointerGone = () => {
      pointerRef.current = null;
      ensureLoop();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerGone);
    window.addEventListener("blur", onPointerGone);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerGone);
      window.removeEventListener("blur", onPointerGone);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      pointerRef.current = null;
      applyBaseStyles();
    };
  }, [weight, width, alpha, chars.length, applyBaseStyles]);

  // ── Autonomous wave animation (used by LoadingScreen) ─────────────────────
  // When autoWave becomes true, sweeps a sinusoidal font-weight pulse through
  // the characters over ~1.2s, then settles back to base weight.
  // This makes the TextPressure effect clearly visible without pointer input.
  useEffect(() => {
    if (!autoWave || chars.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startTime: number | null = null;
    const WAVE_DURATION = 1800; // ms — full sweep duration for clearer visibility
    const SETTLE_AFTER = 2000; // ms — start settling back to base after this
    let animId: number;

    const waveStep = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      for (let i = 0; i < spansRef.current.length; i++) {
        const span = spansRef.current[i];
        if (!span) continue;

        // Phase offset per character so the wave sweeps L→R
        const charPhase = (i / Math.max(chars.length - 1, 1)) * Math.PI;
        // Time-based sine pulse: peaks at ~0.5s per character, then recedes
        const t = elapsed / WAVE_DURATION;
        const sine = Math.sin(Math.PI * t - charPhase) * Math.max(0, 1 - t * 0.6);
        const pressure = Math.max(0, sine);

        const w = Math.round(BASE_WEIGHT + pressure * (MAX_WEIGHT - BASE_WEIGHT));
        span.style.fontWeight = `${w}`;
      }

      if (elapsed < SETTLE_AFTER + 400) {
        animId = requestAnimationFrame(waveStep);
      } else {
        // Settle all characters back to base weight
        spansRef.current.forEach((span) => {
          if (span) span.style.fontWeight = `${BASE_WEIGHT}`;
        });
      }
    };

    animId = requestAnimationFrame(waveStep);

    return () => cancelAnimationFrame(animId);
  }, [autoWave, chars.length]);

  return (
    <div
      ref={outerRef}
      role="img"
      aria-label={text}
      className={`relative w-full max-w-full flex justify-center overflow-x-clip ${className}`}
    >
      <div
        className="inline-flex flex-nowrap items-baseline justify-center whitespace-nowrap leading-none select-none cursor-default"
        style={{
          fontFamily,
          color: textColor,
          WebkitTextStroke: stroke ? `1px ${strokeColor}` : undefined,
          fontStyle: italic ? "italic" : undefined,
          letterSpacing: LETTER_SPACING,
          fontSize: fontSize != null ? `${fontSize}px` : "1px",
          visibility: fontSize != null ? "visible" : "hidden",
        }}
      >
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}`}
            ref={(el) => {
              spansRef.current[index] = el;
            }}
            aria-hidden="true"
            className="inline-block will-change-transform"
            style={{
              fontWeight: BASE_WEIGHT,
              transformOrigin: "center center",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Hidden measurement clone used by the fit-to-width binary search. */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 invisible whitespace-nowrap"
        style={{
          fontFamily,
          fontWeight: BASE_WEIGHT,
          fontStyle: italic ? "italic" : undefined,
          letterSpacing: LETTER_SPACING,
        }}
      >
        {chars.map((char, index) => (
          <span key={`${char}-${index}`} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
