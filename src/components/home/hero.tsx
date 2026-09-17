import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-[#14241B] text-white flex items-end">
      {/* Background Architectural Photo */}
      <Image
        src="/images/projects/hero.jpg"
        alt="Completed Casco Bay Barn House timber frame home on Chebeague Island, Maine"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle architectural gradient overlays for high legibility while letting photography shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="container relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="max-w-[1000px]">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="size-2 rounded-full bg-[#B18A63] animate-pulse" />
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/90">
              Designed & Fabricated in Woolwich, Maine
            </p>
          </div>

          <h1 className="max-w-[960px] font-[var(--font-display)] text-[clamp(3.5rem,7.5vw,7.8rem)] leading-[0.88] tracking-[-0.045em] text-[#FAF8F2]">
            Authentic Timber Frames
            <span className="block italic font-normal text-white">
              Built for the Way You Live.
            </span>
          </h1>

          <p className="mt-7 max-w-[660px] text-base md:text-lg leading-relaxed text-white/85">
            Custom homes, cottages, ADUs, barns and small structures shaped by four decades of traditional joinery, Harvard physics-driven engineering, and high-performance panel enclosure.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Button href="/projects" variant="light" className="gap-2">
              <span>Explore Our Work</span>
              <ArrowRight size={15} />
            </Button>

            <Button
              href="/start-a-project"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-[#14241B]"
            >
              Start Your Project
            </Button>
          </div>

          {/* Project provenance caption */}
          <div className="mt-12 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/65 max-w-[620px]">
            <div>
              <span className="font-semibold text-white/90">Featured Project:</span> Casco Bay Barn House
            </div>
            <div>Chebeague Island, Maine • 2,000 sq. ft.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
