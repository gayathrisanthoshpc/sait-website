"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Events", href: "/events" },
  { label: "Placements", href: "/placements" },
];

const secondaryNavItems = [
  { label: "Alumni", href: "/alumni" },
  { label: "Achievements", href: "/achievements" },
  { label: "Archive", href: "/archive" },
  { label: "My SAIT Journey", href: "/journey" },
  { label: "Activity Logger", href: "/activity-logger" },
  { label: "Announcements", href: "/announcements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[#1F2A44]/12 bg-[#F7F3EB]/95 backdrop-blur-sm"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3.5 sm:px-6 md:px-10"
      >
        <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}>
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="SAIT home">
            <Image
              src="/images/sait-logo.png"
              alt="SAIT"
              width={120}
              height={120}
              className="h-9 w-9 object-contain"
              priority
            />
            <div className="leading-none">
              <div className="text-base font-bold tracking-tight text-[#1F2A44]">SAIT</div>
              <div className="hidden text-[8px] uppercase tracking-[0.2em] text-[#1F2A44]/45 sm:block">
                Information Technology
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="hidden flex-1 items-center justify-center gap-1 text-sm lg:flex">
          {primaryNavItems.map((item, index) => {
            const isActive = isActiveLink(item.href);
            return (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, delay: shouldReduceMotion ? 0 : 0.12 + index * 0.04, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] ${
                    isActive ? "bg-[#1F2A44] text-white" : "text-[#1F2A44] hover:bg-[#1F2A44]/8"
                  }`}
                >
                  {item.label}
                  {!isActive ? (
                    <span className="absolute inset-x-2 -bottom-1 h-px origin-left scale-x-0 bg-[#C6A75E] transition-transform duration-200 group-hover:scale-x-100" />
                  ) : null}
                </Link>
              </motion.div>
            );
          })}

          <div className="relative">
            <button
              type="button"
              aria-expanded={isSecondaryOpen}
              aria-controls="secondary-nav-menu"
              onClick={() => setIsSecondaryOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F2A44]/15 bg-white/50 px-3.5 py-2 text-sm font-medium text-[#1F2A44] transition-all duration-200 hover:border-[#1F2A44]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              More
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${isSecondaryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isSecondaryOpen ? (
              <div
                id="secondary-nav-menu"
                className="absolute right-0 top-[calc(100%+0.6rem)] min-w-[210px] rounded-2xl border border-[#1F2A44]/12 bg-[#F7F3EB] p-1.5 shadow-[0_16px_40px_rgba(31,42,68,0.10)]"
              >
                {secondaryNavItems.map((item) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsSecondaryOpen(false)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] ${
                        isActive ? "bg-[#1F2A44] text-white" : "text-[#1F2A44] hover:bg-[#1F2A44]/8"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={13} />
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/activity-logger"
            className="hidden rounded-full bg-[#1F2A44] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
          >
            My SAIT
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F2A44]/15 bg-white/50 text-[#1F2A44] transition-colors duration-200 hover:border-[#1F2A44]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] lg:hidden"
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.25, ease: "easeOut" }}
          id="mobile-navigation"
          className="border-t border-[#1F2A44]/10 bg-[#F7F3EB] px-4 py-3 lg:hidden"
        >
          <div className="flex flex-col gap-1 text-sm text-[#1F2A44]">
            {[...primaryNavItems, ...secondaryNavItems].map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44] ${
                    isActive ? "bg-[#1F2A44] text-white" : "text-[#1F2A44] hover:bg-[#1F2A44]/8"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={13} className={isActive ? "text-white" : "text-[#1F2A44]/40"} />
                </Link>
              );
            })}

            <Link
              href="/activity-logger"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1F2A44] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              My SAIT
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
