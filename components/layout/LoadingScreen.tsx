"use client";

import React, { useEffect, useState, useRef } from "react";
import TextPressure from "./TextPressure";

const SESSION_STORAGE_KEY = "sait_intro_screen_seen";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [progress, setProgress] = useState(0);

  const rafProgressRef = useRef<number | null>(null);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setMounted(true);

    // Check if user has already seen the intro in this browser session
    try {
      const hasSeenIntro = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (hasSeenIntro) {
        setIsVisible(false);
        return;
      }
    } catch {
      // Handle restricted storage environments gracefully
    }

    setIsVisible(true);

    // Check accessibility reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Static quick transition for reduced motion
      setProgress(100);
      setStep(3);
      const timer1 = setTimeout(() => {
        setIsFadingOut(true);
        try {
          sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        } catch {}
        const timer2 = setTimeout(() => setIsVisible(false), 200);
        timerRefs.current.push(timer2);
      }, 200);
      timerRefs.current.push(timer1);

      return () => {
        timerRefs.current.forEach(clearTimeout);
      };
    }

    // Timeline Sequence:
    // 0ms: background appears
    // ~150ms: SAIT TextPressure appears (step 1)
    const t1 = setTimeout(() => {
      setStep(1);
    }, 150);

    // ~300ms: supporting text fades/slides in (step 2)
    const t2 = setTimeout(() => {
      setStep(2);
    }, 300);

    // ~400ms onward: progress line animates 0% -> 100% (step 3)
    const t3 = setTimeout(() => {
      setStep(3);

      const startTime = performance.now();
      const duration = 750; // progress fill duration

      const animateProgress = (now: number) => {
        const elapsed = now - startTime;
        const currentProgress = Math.min(
          100,
          Math.round((elapsed / duration) * 100)
        );
        setProgress(currentProgress);

        if (elapsed < duration) {
          rafProgressRef.current = requestAnimationFrame(animateProgress);
        } else {
          // Progress complete (~1150ms mark)
          const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
            try {
              sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
            } catch {}
            const removeTimer = setTimeout(() => {
              setIsVisible(false);
            }, 400); // smooth fade out transition
            timerRefs.current.push(removeTimer);
          }, 100);
          timerRefs.current.push(fadeOutTimer);
        }
      };

      rafProgressRef.current = requestAnimationFrame(animateProgress);
    }, 400);

    timerRefs.current.push(t1, t2, t3);

    return () => {
      timerRefs.current.forEach(clearTimeout);
      if (rafProgressRef.current) {
        cancelAnimationFrame(rafProgressRef.current);
      }
    };
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-label="SAIT Loading Experience"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex flex-col justify-between items-center bg-[#f5f4ef] text-[#111111] select-none p-6 sm:p-8 md:p-12 overflow-hidden transition-all duration-400 ease-in-out ${
        isFadingOut
          ? "opacity-0 pointer-events-none -translate-y-2 scale-[0.99]"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Editorial top accent framing */}
      <div className="w-full flex justify-between items-center pt-2 text-[10px] font-mono text-[#111111]/35 tracking-widest uppercase">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e4572e]/80 inline-block animate-pulse" />
          EST. 2024
        </span>
        <span>[ SAIT ]</span>
      </div>

      {/* Main Center Content */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-4xl px-4 text-center">
        {/* Eyebrow Label */}
        <div
          className={`text-[10px] sm:text-xs font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-[#111111]/60 uppercase text-center mb-3 sm:mb-5 transition-all duration-500 ease-out transform ${
            step >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          STUDENTS ASSOCIATION OF INFORMATION TECHNOLOGY
        </div>

        {/* Main SAIT TextPressure Visual */}
        <div
          className={`my-1 sm:my-2 transition-all duration-500 ease-out transform ${
            step >= 1
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          <TextPressure
            text="SAIT"
            textColor="#111111"
            stroke={false}
            alpha={false}
            width={true}
            weight={true}
            italic={true}
            minFontSize={28}
          />
        </div>

        {/* Tagline */}
        <div
          className={`text-xs sm:text-sm font-mono tracking-[0.3em] sm:tracking-[0.42em] text-[#111111]/80 uppercase text-center mt-3 sm:mt-5 transition-all duration-500 ease-out transform ${
            step >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          LEARN. BUILD. CONNECT.
        </div>

        {/* Minimal Progress Line Indicator */}
        <div
          className={`w-44 sm:w-60 md:w-72 h-[2px] bg-[#111111]/12 rounded-full overflow-hidden my-6 sm:my-8 transition-all duration-500 ease-out transform ${
            step >= 3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <div
            className="h-full bg-[#e4572e] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer Label */}
      <div
        className={`text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#111111]/45 uppercase text-center pb-1 transition-all duration-500 ease-out transform ${
          step >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
      >
        DIVISION OF INFORMATION TECHNOLOGY · CUSAT
      </div>
    </div>
  );
}