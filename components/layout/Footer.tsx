"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone, ExternalLink, Compass } from "lucide-react";

import ContactForm from "@/components/shared/ContactForm";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About SAIT", href: "/about" },
  { label: "Executive & People", href: "/people" },
  { label: "Events & Workshops", href: "/events" },
  { label: "Placements & Careers", href: "/placements" },
  { label: "Alumni Network", href: "/alumni" },
  { label: "Hall of Fame", href: "/achievements" },
  { label: "Activity Logger", href: "/activity-logger" },
  { label: "Announcements", href: "/announcements" },
];

const socialLinks = [
  { label: "Instagram (@sait_cusat)", href: "https://instagram.com" },
  { label: "LinkedIn (SAIT CUSAT)", href: "https://linkedin.com" },
  { label: "GitHub (CUSAT IT)", href: "https://github.com" },
  { label: "Luma Events Calendar", href: "https://luma.com" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/10 bg-[#f5f4ef] text-[#111111]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1.2fr]">
          {/* Brand Info */}
          <div className="min-w-0">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="SAIT home">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-base font-bold text-white transition-transform duration-300 group-hover:rotate-12">
                S
              </div>

              <div className="leading-none">
                <div className="text-xl font-bold tracking-tight">
                  SAIT<span className="text-[#e4572e]">.</span>
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-black/50 font-mono">
                  Division of Information Technology
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/65">
              The Students Association of Information Technology is the premier student body under the Division of Information Technology, School of Engineering, CUSAT.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e4572e] animate-pulse" />
                SOE CUSAT · KOCHI
              </span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Navigation & Hubs
            </p>
            <ul className="mt-4 grid gap-2 text-xs font-medium text-black/75">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-opacity duration-200 hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Department Location & Campus */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Campus Location
            </p>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-black/70">
              <p className="font-semibold text-[#111111]">
                Division of Information Technology
              </p>
              <p>School of Engineering, CUSAT</p>
              <p>South Kalamassery, Kochi, Kerala 682022</p>

              {/* Interactive Location Card */}
              <a
                href="https://maps.google.com/?q=School+of+Engineering+CUSAT+Kochi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-[1.3rem] border border-black/15 bg-white/40 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-[#e4572e]/40 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4572e]/10 text-[#e4572e]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-semibold text-[#111111]">
                    <span>Get Directions</span>
                    <ExternalLink size={12} className="text-black/40 group-hover:text-[#e4572e]" />
                  </div>
                  <p className="mt-0.5 text-[10px] text-black/55">Open CUSAT Campus in Google Maps</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Details & Socials */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Official Contact
            </p>
            <div className="mt-4 space-y-3 text-xs text-black/70">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#e4572e]" />
                <a href="mailto:sait@cusat.ac.in" className="hover:underline font-mono">
                  sait@cusat.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#e4572e]" />
                <span className="font-mono">+91 484 2575510</span>
              </div>

              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 mb-2">
                  Social & Community
                </p>
                <ul className="space-y-1.5">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-black/70 hover:text-[#e4572e] transition-colors"
                      >
                        {item.label}
                        <ArrowUpRight size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 border-t border-black/10 pt-8">
          <ContactForm />
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 text-xs text-black/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SAIT — Students Association of Information Technology, SOE CUSAT.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 hover:border-black/20 hover:bg-white md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
