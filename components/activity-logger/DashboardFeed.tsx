import { BellRing } from "lucide-react";

import { demoFeed } from "@/data/activities";

export default function DashboardFeed() {
  return (
    <section className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-2xl font-medium tracking-tight text-[#1F2A44]">Your SAIT Feed</h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F2A44] text-[#F7F3EB]">
          <BellRing size={16} />
        </div>
      </div>

      <div className="space-y-3">
        {demoFeed.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.4rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-4"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#1F2A44]/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
