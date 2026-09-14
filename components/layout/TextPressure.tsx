"use client";

import React, { useEffect, useRef } from "react";

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
  className?: string;
}

export default function TextPressure({
  text = "SAIT",
  fontFamily = "var(--font-geist-sans), Arial, Helvetica, sans-serif",
  fontUrl,
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  stroke = false,
  textColor = "#111111",
  strokeColor = "#111111",
  minFontSize = 24,
  className = "",
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePos = useRef<{ x: number; y: number } | null>(null);
  const rafId = useRef<number | null>(null);

  // Optionally load custom variable font URL if provided
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

  // Window pointer listeners so the entire viewport responds to cursor movement
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerLeave = () => {
      mousePos.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const updatePressure = () => {
      const spans = spansRef.current;
      const pointer = mousePos.current;

      spans.forEach((span) => {
        if (!span) return;

        if (!pointer) {
          // Baseline resting state
          span.style.fontWeight = weight ? "300" : "400";
          span.style.transform = "scaleX(1) skewX(0deg)";
          span.style.fontStyle = "normal";
          span.style.opacity = "1";
          return;
        }

        const rect = span.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dist = Math.hypot(pointer.x - charCenterX, pointer.y - charCenterY);
        // Radius of influence around each letter
        const maxDist = Math.max(280, rect.width * 3.5);
        const pressure = Math.max(0, 1 - dist / maxDist);

        // Calculate dynamic properties
        const targetWeight = weight ? Math.round(200 + pressure * 700) : 400;
        const targetScaleX = width ? 0.88 + pressure * 0.38 : 1;
        const targetSkew = italic ? pressure * -12 : 0;
        const targetOpacity = alpha ? 0.3 + pressure * 0.7 : 1;
        const isItalic = italic && pressure > 0.18;

        span.style.fontWeight = `${targetWeight}`;
        span.style.transform = `scaleX(${targetScaleX}) skewX(${targetSkew}deg)`;
        span.style.fontStyle = isItalic ? "italic" : "normal";
        span.style.opacity = `${targetOpacity}`;
      });

      rafId.current = requestAnimationFrame(updatePressure);
    };

    rafId.current = requestAnimationFrame(updatePressure);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [width, weight, italic, alpha]);

  const chars = text.split("");

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-nowrap items-center justify-center cursor-default select-none max-w-full overflow-hidden py-1 ${className}`}
      style={{
        fontFamily,
        color: textColor,
        WebkitTextStroke: stroke ? `1px ${strokeColor}` : "none",
      }}
    >
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          ref={(el) => {
            spansRef.current[index] = el;
          }}
          className="inline-block transition-all duration-150 ease-out leading-none tracking-tighter text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[9.5rem]"
          style={{
            fontWeight: 300,
            transformOrigin: "center center",
            willChange: "transform, font-weight, font-style",
            fontSize: `clamp(${minFontSize}px, 16vw, 9.5rem)`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}