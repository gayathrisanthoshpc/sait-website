"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import TextPressure from "./TextPressure";

const SESSION_STORAGE_KEY = "sait_intro_screen_seen";

const LOGO_SRC = "/images/sait-logo.png";

// SAIT loading-screen palette (self-contained; the rest of the site is untouched).
const NAVY = "#1F2A44";
const GOLD = "#C6A75E";
const MUTED = "#667085";
const BACKGROUND = "#F7F3EB";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const revealVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

const contentExit = {
  opacity: 0,
  y: -14,
  scale: 0.985,
  transition: { duration: 0.3, ease: "easeIn" as const },
};

/**
 * Sparse connection motif — a few thin navy paths and nodes suggesting the
 * association's connected-community idea. Purely decorative, extremely low
 * contrast, static (no runtime cost), and hidden on small screens.
 */
function ConnectionMotif({ visible }: { visible: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 1.1s ease-out" }}
    >
      <g stroke={NAVY} strokeWidth="1">
        <path d="M96 148 L268 118 L392 208" opacity="0.07" />
        <path d="M1204 690 L1338 610 L1400 676" opacity="0.07" />
        <path d="M1240 176 L1332 250" opacity="0.06" />
        <path d="M148 682 L232 756 L372 722" opacity="0.06" />
        <path d="M640 118 L712 82 L796 122" opacity="0.05" />
      </g>
      <g fill={NAVY}>
        <circle cx="96" cy="148" r="2" opacity="0.1" />
        <circle cx="268" cy="118" r="2.5" opacity="0.12" />
        <circle cx="392" cy="208" r="2" opacity="0.09" />
        <circle cx="1204" cy="690" r="2" opacity="0.1" />
        <circle cx="1338" cy="610" r="2.5" opacity="0.12" />
        <circle cx="1400" cy="676" r="2" opacity="0.09" />
        <circle cx="1240" cy="176" r="2" opacity="0.09" />
        <circle cx="1332" cy="250" r="2" opacity="0.1" />
        <circle cx="712" cy="82" r="2" opacity="0.08" />
        <circle cx="148" cy="682" r="2" opacity="0.09" />
        <circle cx="372" cy="722" r="2" opacity="0.08" />
      </g>
    </svg>
  );
}

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [step, setStep] = useState<Step>(0);
  // Triggers autonomous wave on the TextPressure component once SAIT appears
  const [runTextWave, setRunTextWave] = useState(false);

  const progressMV = useMotionValue(0);
  const pctRef = useRef<HTMLSpanElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    setMounted(true);

    const forceIntro = new URLSearchParams(window.location.search).get("intro") === "1";

    // Never touch sessionStorage during SSR; fail soft if storage is blocked.
    try {
      if (!forceIntro && sessionStorage.getItem(SESSION_STORAGE_KEY)) {
        return;
      }
    } catch {
      // Storage unavailable — simply show the intro.
    }

    setShowLoader(true);

    // Keep the page still while the intro plays.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = (exitDelay: number, exitDuration: number) => {
      const exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        try {
          sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
        } catch {}
        window.setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          setShowLoader(false);
        }, exitDuration);
      }, exitDelay);
      timersRef.current.push(exitTimer);
    };

    const timers = timersRef.current;
    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    if (prefersReducedMotion) {
      // Short, calm version: everything visible at once, brief fade out.
      setStep(5);
      progressMV.set(1);
      finish(450, 250);
      return () => {
        timers.forEach((id) => window.clearTimeout(id));
        document.body.style.overflow = previousOverflow;
      };
    }

    // Full sequence — total ~3.2s to 3.5s:
    //  0.20s  Logo fades/scales in              (step 1)
    //  0.50s  SAIT TextPressure + wave starts   (step 2)
    //  1.10s  Association name                  (step 3)
    //  1.40s  Division line                     (step 4)
    //  1.70s  Tagline                           (step 5)
    //  1.10s  Gold progress bar starts → 100% by 2.8s
    //  2.80s  Exit transition begins
    //  3.30s  LoadingScreen unmounted (500ms exit)
    schedule(() => setStep(1), 200);
    schedule(() => {
      setStep(2);
      setRunTextWave(true);  // kick off autonomous TextPressure wave
    }, 500);
    schedule(() => setStep(3), 1100);
    schedule(() => setStep(4), 1400);
    schedule(() => setStep(5), 1700);

    // Gold progress bar: 0→100% over 1700ms starting at 1.1s → completes at ~2.8s
    schedule(() => {
      controlsRef.current = animate(progressMV, 1, {
        duration: 1.7,
        ease: [0.4, 0, 0.2, 1],
        onComplete: () => finish(0, 500),
      });
    }, 1100);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      controlsRef.current?.stop();
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the tiny percent label in sync without re-rendering per frame.
  useEffect(() => {
    const unsubscribe = progressMV.on("change", (v) => {
      if (pctRef.current) {
        pctRef.current.textContent = `${Math.round(v * 100)}%`;
      }
    });
    return unsubscribe;
  }, [progressMV]);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[9999] select-none overflow-hidden"
        style={{ backgroundColor: BACKGROUND }}
      />
    );
  }

  if (!showLoader) {
    return null;
  }

  const stepAt = (n: Step) => (step >= n ? "visible" : "hidden");

  return (
    <AnimatePresence>
      <motion.div
        key="sait-intro"
        role="status"
        aria-label="SAIT is loading"
        className="fixed inset-0 z-[9999] select-none overflow-hidden"
        style={{ backgroundColor: BACKGROUND, color: NAVY }}
        initial={{ opacity: 1 }}
        animate={
          isExiting
            ? { opacity: 0, y: -20, scale: 0.99 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        exit={{ opacity: 0, y: -20, scale: 0.99, transition: { duration: 0.5, ease: EASE_OUT } }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <ConnectionMotif visible={step >= 2} />

        {/* Hairline frame */}
        <div className="pointer-events-none absolute inset-x-6 top-6 hidden justify-between sm:flex md:inset-x-10 md:top-10">
          <span className="h-px w-16 bg-[#1F2A44]/15" />
          <span className="h-px w-16 bg-[#1F2A44]/15" />
        </div>

        <div className="relative flex h-full flex-col px-6 sm:px-10 md:px-12">
          {/* Center composition */}
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-10 text-center">
            <motion.div variants={logoVariants} initial="hidden" animate={stepAt(1)}>
              <Image
                src={LOGO_SRC}
                alt="SAIT — Students Association of Information Technology"
                width={1632}
                height={1612}
                priority
                draggable={false}
                className="h-14 w-auto object-contain sm:h-16 md:h-[72px]"
                sizes="(max-width: 768px) 64px, 72px"
              />
            </motion.div>

            {/* Official SAIT wordmark via TextPressure */}
            <motion.div
              variants={revealVariants}
              custom={0.05}
              initial="hidden"
              animate={stepAt(2)}
              className="mt-6 w-full md:mt-8"
            >
              <TextPressure
                text="SAIT"
                textColor={NAVY}
                minFontSize={44}
                maxFontSize={170}
                autoWave={runTextWave}
              />
            </motion.div>

            <motion.p
              variants={revealVariants}
              custom={0.05}
              initial="hidden"
              animate={stepAt(3)}
              className="mt-6 text-[11px] font-medium uppercase leading-relaxed tracking-[0.24em] text-[#1F2A44]/80 sm:text-xs md:mt-8 md:tracking-[0.3em]"
            >
              Students Association of Information Technology
            </motion.p>

            <motion.p
              variants={revealVariants}
              custom={0.05}
              initial="hidden"
              animate={stepAt(4)}
              className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#667085] sm:text-[11px] sm:tracking-[0.24em]"
            >
              Division of Information Technology · CUSAT
            </motion.p>

            <motion.p
              variants={revealVariants}
              custom={0.05}
              initial="hidden"
              animate={stepAt(5)}
              className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#C6A75E] sm:text-xs sm:tracking-[0.38em] md:mt-10"
            >
              Learn. Build. Connect.
            </motion.p>
          </div>

          {/* Editorial gold progress line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto w-full max-w-md pb-10 sm:pb-12"
          >
            <div className="h-px w-full bg-[#1F2A44]/10">
              <motion.div
                className="h-px origin-left"
                style={{ backgroundColor: GOLD, scaleX: progressMV }}
              />
            </div>
            <div
              aria-hidden="true"
              className="mt-3 text-center text-[9px] uppercase tracking-[0.3em] text-[#667085]"
            >
              01&nbsp;—&nbsp;<span ref={pctRef}>0%</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
