"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  { label: "Activity Logger", href: "/activity-logger" },
  { label: "Announcements", href: "/announcements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f4ef]/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="SAIT home">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-12">
            S
          </div>

          <div className="leading-none">
            <div className="text-lg font-bold tracking-tight text-[#111111]">
              SAIT<span className="text-[#e4572e]">.</span>
            </div>

            <div className="mt-1 hidden text-[9px] uppercase tracking-[0.18em] text-black/40 sm:block">
              Information Technology
            </div>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-5 text-sm lg:flex">
          {primaryNavItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                  isActive
                    ? "bg-[#111111] text-white"
                    : "text-[#111111] hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              type="button"
              aria-expanded={isSecondaryOpen}
              aria-controls="secondary-nav-menu"
              onClick={() => setIsSecondaryOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-3 py-2 text-sm text-[#111111] transition-all duration-200 hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            >
              More
              <ChevronDown size={14} className={isSecondaryOpen ? "rotate-180" : ""} />
            </button>

            {isSecondaryOpen ? (
              <div
                id="secondary-nav-menu"
                className="absolute right-0 top-[calc(100%+0.75rem)] min-w-[220px] rounded-[1.5rem] border border-black/10 bg-[#f5f4ef] p-2 shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
              >
                {secondaryNavItems.map((item) => {
                  const isActive = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsSecondaryOpen(false)}
                      className={`flex w-full items-center justify-between rounded-full px-3 py-2 text-left text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                        isActive
                          ? "bg-[#111111] text-white"
                          : "text-[#111111] hover:bg-white/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={14} />
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/activity-logger"
            className="hidden rounded-full bg-[#111111] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4572e] md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            My SAIT
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 text-[#111111] transition-colors duration-200 hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] lg:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-black/10 bg-[#f5f4ef] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-sm text-[#111111]">
            {[...primaryNavItems, ...secondaryNavItems].map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-full px-3 py-2.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                    isActive
                      ? "bg-[#111111] text-white"
                      : "border border-transparent hover:border-black/10 hover:bg-white/40"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={14} className={isActive ? "text-white" : "text-black/50"} />
                </Link>
              );
            })}

            <Link
              href="/activity-logger"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#e4572e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            >
              My SAIT
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
