import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[82svh] md:min-h-[92svh] overflow-hidden bg-[#14241B] text-white flex items-end">
      {/* Background Authentic Architectural Photo */}
      <Image
        src="/images/projects/hero.jpg"
        alt="Bungalow in a Box timber-frame home on Chebeague Island, Maine"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Editorial gradient overlays for high legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="container relative z-10 flex min-h-[82svh] md:min-h-[92svh] items-end pb-14 pt-32 md:pb-24">
        <div className="max-w-[1050px]">
          <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/80">
            Designed & Fabricated in Maine
          </p>

          <h1 className="display-xl max-w-[1050px] text-[#FAF8F2]">
            Designed Around
            <span className="block">Your Place.</span>
            <span className="block italic text-white/95">Raised on Yours.</span>
          </h1>

          <p className="mt-7 max-w-[680px] text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Custom timber-frame homes, cottages, cabins, ADUs, barns and special structures—designed collaboratively, prefabricated in Maine, delivered to your site, and raised with care.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="/projects"
              variant="inverse"
              size="lg"
              arrow
              className="w-full sm:w-auto"
            >
              Explore Our Work
            </Button>

            <Button
              href="/start-a-project"
              variant="inverseOutline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>
          </div>

          {/* Project provenance note */}
          <div className="mt-12 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-white/65 max-w-[620px]">
            <div>
              <span className="font-semibold text-white/90">Featured Project:</span> Casco Bay Barn House
            </div>
            <div>Chebeague Island, Maine • 2,000 sq ft</div>
          </div>
        </div>
      </div>
    </section>
  );
}
