"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mainNavLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "How It Works" },
  { href: "/about", label: "Why Bungalow" },
  { href: "/pricing", label: "Pricing & Budget" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#14241B]/95 text-white backdrop-blur-md py-3 shadow-md border-b border-white/10"
            : "bg-[#14241B] text-white py-5 border-b border-white/10"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-white"
          >
            <span className="text-[0.82rem] font-bold uppercase tracking-[0.2em] text-[#FAF8F2] group-hover:text-white transition-colors">
              Bungalow in a Box
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#B18A63]">
              Woolwich, Maine • Est. 1998
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {mainNavLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white py-1 relative",
                    active ? "text-white" : "text-white/70"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#98704C]" />
                  )}
                </Link>
              );
            })}

            <Button
              href="/start-a-project"
              variant="light"
              className="ml-2 !min-h-[42px] !px-5"
            >
              Start Your Project
            </Button>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center text-white lg:hidden focus-visible:outline-white"
            onClick={() => setOpen((val) => !val)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#14241B] text-white pt-24 px-6 pb-8 lg:hidden overflow-y-auto">
          <div className="flex flex-col border-b border-white/10 pb-6 mb-6">
            <span className="eyebrow text-[#B18A63] text-xs">Navigation</span>
            <nav className="flex flex-col divide-y divide-white/10">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="py-4 font-[var(--font-display)] text-2xl text-white hover:text-[#B18A63] transition-colors"
              >
                Home
              </Link>
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 font-[var(--font-display)] text-2xl text-white hover:text-[#B18A63] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/client-stories"
                onClick={() => setOpen(false)}
                className="py-4 font-[var(--font-display)] text-2xl text-white hover:text-[#B18A63] transition-colors"
              >
                Client Stories
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-4">
            <Button
              href="/start-a-project"
              variant="light"
              className="w-full text-center"
            >
              Start Your Project
            </Button>

            <div className="text-center text-xs text-white/60 space-y-1">
              <div>Montsweag Brook Corporation • Woolwich, ME</div>
              <a href="tel:+1-207-522-4590" className="text-[#B18A63] block font-semibold">
                (207) 522-4590
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
