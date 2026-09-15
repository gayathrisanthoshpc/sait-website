"use client";

import { motion, useReducedMotion } from "framer-motion";

import JourneyStage from "@/components/journey/JourneyStage";
import type { JourneyStage as JourneyStageType, JourneyStageKey } from "@/data/journey";

type JourneyPathProps = {
  stages: JourneyStageType[];
  completedIds: JourneyStageKey[];
  currentStageId: JourneyStageKey;
  selectedStageId: JourneyStageKey;
  onSelectStage: (id: JourneyStageKey) => void;
};

export default function JourneyPath({
  stages,
  completedIds,
  currentStageId,
  selectedStageId,
  onSelectStage,
}: JourneyPathProps) {
  const shouldReduceMotion = useReducedMotion();
  const selectedStage = stages.find((stage) => stage.id === selectedStageId) ?? stages[0];

  return (
    <section className="px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative">
            <div className="absolute left-[1.15rem] top-2 bottom-2 hidden w-px bg-[#1F2A44]/10 md:block" aria-hidden="true" />
            <div className="space-y-5">
              {stages.map((stage, index) => {
                const status = completedIds.includes(stage.id)
                  ? "completed"
                  : stage.id === currentStageId
                    ? "current"
                    : "upcoming";

                return (
                  <motion.div
                    key={stage.id}
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: index * 0.06, ease: "easeOut" }}
                    className="relative md:pl-9"
                  >
                    <div className="absolute left-[0.3rem] top-7 hidden h-4 w-4 rounded-full border-2 border-[#F7F3EB] bg-[#C6A75E] shadow-[0_0_0_8px_rgba(198,167,94,0.12)] md:block" aria-hidden="true" />
                    <JourneyStage
                      stage={stage}
                      status={status}
                      isSelected={selectedStage.id === stage.id}
                      onSelect={onSelectStage}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.aside
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-6 text-[#F7F3EB] md:p-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
              {selectedStage.number} · {selectedStage.title}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              {selectedStage.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#F7F3EB]/75">
              {selectedStage.description}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C6A75E]">
                  Milestone
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EB]/70">
                  {selectedStage.milestone}
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EB]/55">
                    Example SAIT activities
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[#F7F3EB]/75">
                    {selectedStage.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C6A75E]" aria-hidden="true" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1rem] border border-[#C6A75E]/20 bg-[#C6A75E]/10 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C6A75E]">
                    Latest achievement
                  </p>
                  <p className="mt-2 text-lg font-medium text-[#F7F3EB]">
                    {selectedStage.achievement}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
