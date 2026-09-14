"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

import ContactForm from "@/components/shared/ContactForm";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Events", href: "/events" },
  { label: "Placements", href: "/placements" },
  { label: "Alumni", href: "/alumni" },
  { label: "Achievements", href: "/achievements" },
  { label: "Activity Logger", href: "/activity-logger" },
  { label: "Announcements", href: "/announcements" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/10 bg-[#f5f4ef] text-[#111111]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr]">
          <div className="min-w-0">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="SAIT home">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-12">
                S
              </div>

              <div className="leading-none">
                <div className="text-lg font-bold tracking-tight">
                  SAIT<span className="text-[#e4572e]">.</span>
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-black/40">
                  Information Technology
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/65">
              The Students Association of Information Technology is a student-led
              community for building, learning, sharing and growing together.
            </p>
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
              Explore
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-black/75">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-opacity duration-200 hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
              School
            </p>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-black/70">
              <p>Division of Information Technology</p>
              <p>School of Engineering</p>
              <div className="flex items-start gap-3 rounded-[1.3rem] border border-black/10 bg-white/30 p-3">
                <MapPin size={15} className="mt-0.5 text-[#e4572e]" />
                <p>School of Engineering, CUSAT</p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
              Contact
            </p>
            <div className="mt-4 space-y-4 text-sm text-black/70">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#e4572e]" />
                <span>hello@sait-demo.example</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#e4572e]" />
                <span>+91 00000 00000 (Demo)</span>
              </div>

              <ul className="space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
                    >
                      {item.label}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6">
          <ContactForm />
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SAIT. Demo prototype.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white/40 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 hover:border-black/20 hover:bg-white md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            aria-label="Back to top"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
