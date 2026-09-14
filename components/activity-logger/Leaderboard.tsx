import { Crown } from "lucide-react";

import { demoLeaderboard } from "@/data/activities";

export default function Leaderboard() {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-[#111111] p-5 text-white md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-medium tracking-tight text-white">Leaderboard</h3>
        <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
          DEMO
        </span>
      </div>

      <div className="space-y-3">
        {demoLeaderboard.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-[1.3rem] border border-white/10 bg-white/5 px-3 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4572e] text-xs font-semibold text-white">
                {index + 1}
              </div>

              <div>
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {item.activities} activities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-[#f5f4ef]">
              <Crown size={14} className="text-[#e4572e]" />
              {item.points}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
