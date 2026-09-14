"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import type { JourneyStage, JourneyStageKey } from "@/data/journey";

type JourneyStageProps = {
  stage: JourneyStage;
  status: "completed" | "current" | "upcoming";
  isSelected: boolean;
  onSelect: (id: JourneyStageKey) => void;
};

const iconMap = {
  join: Sparkles,
  learn: ArrowRight,
  participate: Check,
  build: Sparkles,
  achieve: Check,
  connect: ArrowRight,
  "leave-mark": Sparkles,
};

export default function JourneyStage({ stage, status, isSelected, onSelect }: JourneyStageProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[stage.id];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(stage.id)}
      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={[
        "group relative w-full rounded-[1.4rem] border p-4 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] md:p-5",
        isSelected
          ? "border-[#C6A75E]/50 bg-white/70"
          : status === "completed"
            ? "border-[#1F2A44]/10 bg-white/50"
            : "border-[#1F2A44]/10 bg-[#F7F3EB] hover:border-[#1F2A44]/20",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
          status === "completed"
            ? "border-[#C6A75E] bg-[#C6A75E] text-[#1F2A44]"
            : status === "current"
              ? "border-[#1F2A44] bg-[#1F2A44] text-white"
              : "border-[#1F2A44]/15 bg-white/60 text-[#1F2A44]/60",
        ].join(" ")}>
          <Icon size={16} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
              {stage.number}
            </span>
            {status === "completed" ? (
              <span className="rounded-full border border-[#C6A75E]/30 bg-[#C6A75E]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]">
                Complete
              </span>
            ) : status === "current" ? (
              <span className="rounded-full border border-[#1F2A44]/15 bg-[#1F2A44]/5 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]">
                Current
              </span>
            ) : (
              <span className="rounded-full border border-[#1F2A44]/10 bg-white/50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                Upcoming
              </span>
            )}
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[#1F2A44] md:text-2xl">
            {stage.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#1F2A44]/70">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
