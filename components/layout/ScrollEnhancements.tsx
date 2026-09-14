"use client";

import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollEnhancements() {
  const shouldReduceMotion = useReducedMotion();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const progress = useSpring(0, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;

      progress.set(nextProgress);
      setShowScrollTop(scrollTop > 420);
    };

    update();

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [progress]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[#C6A75E]"
        style={{ scaleX: shouldReduceMotion ? 1 : progress }}
      />

      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            type="button"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.28, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1F2A44]/15 bg-[#1F2A44] text-[#F7F3EB] shadow-[0_18px_30px_rgba(31,42,68,0.14)] transition-colors duration-200 hover:bg-[#1F2A44]/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] sm:bottom-6 sm:right-6"
          >
            <ArrowUp size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
