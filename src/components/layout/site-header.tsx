"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "How It Works",
    href: "/process",
  },
  {
    label: "Why Bungalow",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = scrolled || menuOpen || !isHome;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",
          isSolid
            ? "border-b border-black/8 bg-[#FAF8F2]/95 text-[#14241B] shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "bg-transparent text-white",
        ].join(" ")}
      >
        <div className="container flex h-[78px] items-center justify-between">
          <Link
            href="/"
            aria-label="Bungalow in a Box home"
            className="relative z-50 max-w-[190px] text-[0.76rem] font-bold uppercase tracking-[0.18em] md:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#835A39]"
          >
            Bungalow in a Box
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative py-2 text-[0.84rem] font-medium transition-colors",
                    active
                      ? isSolid
                        ? "text-[#14241B] font-semibold"
                        : "text-white font-semibold"
                      : isSolid
                      ? "text-[#14241B]/80 hover:text-[#14241B]"
                      : "text-white/80 hover:text-white",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current",
                    "after:transition-all after:duration-300",
                    active ? "after:w-full" : "after:w-0 hover:after:w-full",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button
              href="/start-a-project"
              variant={isSolid ? "primary" : "inverse"}
              size="sm"
              arrow
            >
              Start Your Project
            </Button>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className={[
              "relative z-50 flex size-11",
              "items-center justify-center",
              "lg:hidden",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-[#835A39]",
            ].join(" ")}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={[
          "fixed inset-0 z-40",
          "bg-[#FAF8F2]",
          "text-[#14241B]",
          "transition-all duration-500",
          "lg:hidden",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="container flex min-h-dvh flex-col pb-8 pt-28">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#D9D5CB]"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "group flex items-center",
                  "justify-between",
                  "border-b border-[#D9D5CB]",
                  "py-5",
                ].join(" ")}
              >
                <span className="flex items-baseline gap-5">
                  <span className="text-[0.68rem] font-bold tracking-[0.16em] text-[#98704C]">
                    0{index + 1}
                  </span>

                  <span className="font-[var(--font-display)] text-[2rem] leading-none">
                    {item.label}
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="opacity-45 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </nav>

          <Button
            href="/start-a-project"
            size="lg"
            arrow
            className="mt-8 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Start Your Project
          </Button>

          <div className="mt-auto pt-12 text-sm leading-6 text-[#6D716A]">
            Custom timber-frame structures designed and fabricated in Woolwich, Maine.
          </div>
        </div>
      </div>
    </>
  );
}
