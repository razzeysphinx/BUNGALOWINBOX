import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-[#14241B] text-[#FAF8F2] pt-20 pb-12 border-t border-white/10">
      <div className="container">
        {/* Top brand & CTA band */}
        <div className="grid gap-10 pb-16 border-b border-white/15 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="eyebrow text-[#B18A63]">Bungalow in a Box</span>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl leading-tight text-white max-w-[540px]">
              Authentic timber frames designed & fabricated in Maine.
            </h2>
            <p className="text-white/70 max-w-[480px] text-sm sm:text-base leading-relaxed">
              Combining Harvard physics-driven engineering with traditional mortise-and-tenon timber joinery and super-insulated envelopes since 1998.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-5 pt-4">
            <Button
              href="/start-a-project"
              variant="inverse"
              size="lg"
              arrow
            >
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10 text-sm">
          {/* Col 1 */}
          <div>
            <div className="eyebrow text-[#B18A63] text-[0.7rem] mb-4">Explore Work</div>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <Link href="/projects?category=homes" className="hover:text-white transition-colors">
                  Homes & Barn Houses
                </Link>
              </li>
              <li>
                <Link href="/projects?category=cottages-cabins" className="hover:text-white transition-colors">
                  Cottages & Cabins
                </Link>
              </li>
              <li>
                <Link href="/projects?category=adus" className="hover:text-white transition-colors">
                  ADUs & Studios
                </Link>
              </li>
              <li>
                <Link href="/projects?category=barns-workshops" className="hover:text-white transition-colors">
                  Barns & Workshops
                </Link>
              </li>
              <li>
                <Link href="/projects?category=event-spaces" className="hover:text-white transition-colors">
                  Event Barns
                </Link>
              </li>
              <li>
                <Link href="/projects?category=outdoor" className="hover:text-white transition-colors">
                  Pergolas & Pavilions
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#B18A63] font-medium hover:underline block pt-1">
                  View All 25 Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <div className="eyebrow text-[#B18A63] text-[0.7rem] mb-4">Craft & Process</div>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Our 6-Step Process
                </Link>
              </li>
              <li>
                <Link href="/process#engineering" className="hover:text-white transition-colors">
                  Physics & Engineering
                </Link>
              </li>
              <li>
                <Link href="/process#joinery" className="hover:text-white transition-colors">
                  Mortise & Tenon Joinery
                </Link>
              </li>
              <li>
                <Link href="/process#sips" className="hover:text-white transition-colors">
                  SIP Thermal Envelope
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Why Bungalow
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-white transition-colors">
                  About the Family
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="eyebrow text-[#B18A63] text-[0.7rem] mb-4">Resources</div>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Budget Guide
                </Link>
              </li>
              <li>
                <Link href="/client-stories" className="hover:text-white transition-colors">
                  Verified Client Stories
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Unboxing Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/about#press" className="hover:text-white transition-colors">
                  Press & Media Coverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="eyebrow text-[#B18A63] text-[0.7rem] mb-4">Workshop & Contact</div>
            <div className="space-y-3 text-white/75 text-sm">
              <div>
                <p className="font-semibold text-white">Montsweag Brook Corporation</p>
                <p>425 Montsweag Road</p>
                <p>Woolwich, ME 04579</p>
              </div>

              <div className="pt-2">
                <p className="text-xs text-white/50 uppercase tracking-wider">Phone</p>
                <a href="tel:+1-207-522-4590" className="text-white hover:text-[#B18A63] transition-colors font-medium">
                  (207) 522-4590
                </a>
                <br />
                <a href="tel:+1-207-443-5691" className="text-white/75 hover:text-[#B18A63] transition-colors text-xs">
                  (207) 443-5691
                </a>
              </div>

              <div className="pt-1">
                <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                <a href="mailto:info@bungalowinabox.com" className="text-[#B18A63] hover:underline">
                  info@bungalowinabox.com
                </a>
              </div>

              <div className="pt-1 text-xs text-white/50">
                Hours: Mon–Fri 8:00am–5:00pm EST<br />Weekends by consultation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 1998–2026 Montsweag Brook Corporation d/b/a Bungalow in a Box. All rights reserved. Handcrafted in Maine.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.socials.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
