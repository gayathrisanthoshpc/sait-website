"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
      className="border-t border-[#1F2A44]/10 bg-[#1F2A44] text-[#F7F3EB]"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1.2fr]">
          {/* Brand Info */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeOut" }}
            className="min-w-0"
          >
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="SAIT home">
              <Image
                src="/images/sait-logo.png"
                alt="SAIT logo"
                width={42}
                height={42}
                className="h-10 w-10 object-contain rounded-full bg-white/10 p-1.5"
              />

              <div className="leading-none">
                <div className="text-xl font-bold tracking-tight text-[#F7F3EB]">
                  SAIT<span className="text-[#C6A75E]">.</span>
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#F7F3EB]/60 font-mono">
                  Division of Information Technology
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F7F3EB]/75">
              The Students Association of Information Technology is the premier student body under the Division of Information Technology, School of Engineering, CUSAT.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F7F3EB]/15 bg-[#F7F3EB]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F7F3EB]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
                SOE CUSAT · KOCHI
              </span>
            </div>
          </motion.div>

          {/* Site Navigation */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}
            className="min-w-0"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EB]/55">
              Navigation & Hubs
            </p>
            <ul className="mt-4 grid gap-2 text-xs font-medium text-[#F7F3EB]/75">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-opacity duration-200 hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Department Location & Campus */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
            className="min-w-0"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EB]/55">
              Campus Location
            </p>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-[#F7F3EB]/70">
              <p className="font-semibold text-[#F7F3EB]">
                Division of Information Technology
              </p>
              <p>School of Engineering, CUSAT</p>
              <p>South Kalamassery, Kochi, Kerala 682022</p>

              {/* Interactive Location Card */}
              <a
                href="https://maps.google.com/?q=School+of+Engineering+CUSAT+Kochi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-[1.3rem] border border-[#F7F3EB]/15 bg-[#F7F3EB]/5 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7F3EB]/10 hover:border-[#C6A75E]/50 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A75E]/15 text-[#C6A75E]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-semibold text-[#F7F3EB]">
                    <span>Get Directions</span>
                    <ExternalLink size={12} className="text-[#F7F3EB]/50 group-hover:text-[#C6A75E]" />
                  </div>
                  <p className="mt-0.5 text-[10px] text-[#F7F3EB]/60">Open CUSAT Campus in Google Maps</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Details & Socials */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.16, ease: "easeOut" }}
            className="min-w-0"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EB]/55">
              Official Contact
            </p>
            <div className="mt-4 space-y-3 text-xs text-[#F7F3EB]/75">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#C6A75E]" />
                <a href="mailto:sait@cusat.ac.in" className="hover:underline font-mono">
                  sait@cusat.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#C6A75E]" />
                <span className="font-mono">+91 484 2575510</span>
              </div>

              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EB]/55 mb-2">
                  Social & Community
                </p>
                <ul className="space-y-1.5">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#F7F3EB]/75 hover:text-[#C6A75E] transition-colors"
                      >
                        {item.label}
                        <ArrowUpRight size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          className="mt-12 border-t border-[#F7F3EB]/10 pt-8"
        >
          <ContactForm />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-5 border-t border-[#F7F3EB]/10 pt-6 text-xs text-[#F7F3EB]/55 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 SAIT — Students Association of Information Technology, SOE CUSAT.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#F7F3EB]/15 bg-[#F7F3EB]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F7F3EB] transition-all duration-200 hover:border-[#C6A75E]/40 hover:bg-[#F7F3EB]/10 md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F3EB]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
