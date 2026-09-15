import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F3EB] px-6 py-16 text-[#1F2A44]">
      <div className="w-full max-w-4xl rounded-[2rem] border border-[#1F2A44]/10 bg-white/40 p-8 shadow-[0_20px_60px_rgba(31,42,68,0.06)] md:p-12">
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
          <Compass size={14} className="text-[#C6A75E]" />
          404 — Lost in the archive
        </div>

        <h1 className="mt-6 text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#1F2A44]">
          The page you wanted is not in the SAIT archive.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1F2A44]/65">
          The section may have moved, or the link you followed is no longer part of the
          active site. Head back to the community hub or explore upcoming events.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
          >
            Return home
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full border border-[#1F2A44]/15 bg-transparent px-6 py-3 text-sm font-medium text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
          >
            Explore events
          </Link>
        </div>
      </div>
    </main>
  );
}
