import { BellRing } from "lucide-react";

import { demoFeed } from "@/data/activities";

export default function DashboardFeed() {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white/30 p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-medium tracking-tight text-[#111111]">Your SAIT Feed</h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef]">
          <BellRing size={16} />
        </div>
      </div>

      <div className="space-y-3">
        {demoFeed.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.4rem] border border-black/10 bg-[#f5f4ef] p-4"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
