"use client";

import { Crown, Trophy, Sparkles } from "lucide-react";
import { demoLeaderboard } from "@/data/activities";

export default function Leaderboard() {
  return (
    <section className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-5 text-white md:p-6 shadow-xl">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-[#C6A75E]" />
          <h3 className="text-xl font-bold tracking-tight text-white">
            Top Contributor Leaderboard
          </h3>
        </div>
        <span className="rounded-full border border-[#C6A75E]/40 bg-[#C6A75E]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EB]">
          S5 / S7 BATCH
        </span>
      </div>

      <div className="space-y-2.5">
        {demoLeaderboard.map((item, index) => {
          const isGold = index === 0;
          const isSilver = index === 1;
          const isBronze = index === 2;

          return (
            <div
              key={item.id}
              className={`flex items-center justify-between gap-3 rounded-[1.3rem] border px-3.5 py-3 transition-all duration-200 ${
                isGold
                  ? "border-[#C6A75E]/50 bg-gradient-to-r from-[#C6A75E]/15 to-transparent text-white"
                  : "border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    isGold
                      ? "bg-[#C6A75E] text-white shadow-lg"
                      : isSilver
                      ? "bg-white/20 text-white"
                      : isBronze
                      ? "bg-white/10 text-white/80"
                      : "bg-white/5 text-white/60"
                  }`}
                >
                  {index + 1}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                      {item.batch}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/50 mt-0.5">
                    {item.activities} activities · {item.badge}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-bold text-[#F7F3EB]">
                <Crown size={14} className={isGold ? "text-[#C6A75E]" : "text-white/40"} />
                <span>{item.points} pts</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1">
          <Sparkles size={12} className="text-[#C6A75E]" /> Updated weekly by SAIT Verification Board
        </span>
        <span className="font-mono">[ CUSAT IT ]</span>
      </div>
    </section>
  );
}
