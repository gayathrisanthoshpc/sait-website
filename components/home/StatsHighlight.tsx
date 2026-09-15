"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "Many", label: "Student Community" },
  { value: "Active", label: "Workshops & Seminars" },
  { value: "Growing", label: "Projects & Activities" },
  { value: "Strong", label: "Alumni Connections" },
];

type CountUpProps = {
  value: string;
  duration?: number;
};

function CountUp({ value, duration = 1200 }: CountUpProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const numericValue = Number(match[1]);
    const suffix = match[2] || "";

    let observer: IntersectionObserver | null = null;
    const element = ref.current;

    if (!element) return;

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry || hasAnimated) return;

        if (entry.isIntersecting) {
          observer?.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const nextValue = numericValue * eased;
            setDisplayValue(`${Math.round(nextValue)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(`${value}`);
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer?.disconnect();
  }, [duration, hasAnimated, reducedMotion, value]);

  return (
    <p
      ref={ref}
      className="text-4xl font-semibold tracking-tight text-[#1F2A44] md:text-5xl"
    >
      {displayValue}
    </p>
  );
}

export default function StatsHighlight() {
  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#E8DCC8] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-6"
            >
              <CountUp value={stat.value} duration={1200} />
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#1F2A44]/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
