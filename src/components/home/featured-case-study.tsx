import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeaturedCaseStudy() {
  return (
    <section className="section bg-[#FAF8F2]">
      <div className="container">
        <div className="border border-[#D9D5CB] bg-[#F4F1E9] p-6 sm:p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D9D5CB]">
            <div>
              <p className="eyebrow">Deep Architectural Case Study</p>
              <h2 className="heading-xl text-[#14241B]">
                Casco Bay Barn House
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#98704C] mt-2">
                Chebeague Island, Maine • 2,000 Sq. Ft. High-Posted Cape
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button href="/projects/casco-bay-barn-house" variant="dark">
                View Full Case Study
              </Button>
            </div>
          </div>

          {/* Imagery Grid */}
          <div className="grid gap-6 lg:grid-cols-12 mt-10">
            {/* Primary Large Exterior */}
            <div className="lg:col-span-8 arch-image relative aspect-[16/10] border border-[#D9D5CB]">
              <Image
                src="/images/projects/casco-bay/hero.jpg"
                alt="Completed Casco Bay Barn House on Chebeague Island"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-xs px-3 py-1 backdrop-blur-sm">
                Completed Exterior & Wrap-Around Porch
              </div>
            </div>

            {/* Floor Plan & Construction detail */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Floor Plan Preview */}
              <div className="arch-image relative aspect-[4/3] bg-white border border-[#D9D5CB] p-2">
                <Image
                  src="/images/projects/casco-bay/floor-plan.jpg"
                  alt="Casco Bay Barn House Floor Plan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-contain p-2"
                />
                <div className="absolute top-2 right-2 bg-[#14241B] text-white text-[0.65rem] uppercase font-bold tracking-wider px-2 py-1">
                  Floor Plan Preview
                </div>
              </div>

              {/* Timber Detail / Raising */}
              <div className="arch-image relative aspect-[4/3] border border-[#D9D5CB]">
                <Image
                  src="/images/projects/casco-bay/bent-raising.jpg"
                  alt="Raising bents with crane on Chebeague Island"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#14241B]/90 text-white text-[0.65rem] uppercase tracking-wider px-2 py-1">
                  Crane Raising Bents on Island
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 mt-10 border-t border-b border-[#D9D5CB] text-xs font-mono">
            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem]">Dimensions</span>
              <span className="text-sm font-bold text-[#14241B]">24&apos; × 40&apos; (2 Stories)</span>
            </div>
            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem]">Conditioned Space</span>
              <span className="text-sm font-bold text-[#14241B]">2,000 sq. ft.</span>
            </div>
            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem]">Structural System</span>
              <span className="text-sm font-bold text-[#14241B]">Native Hemlock + SIPs</span>
            </div>
            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem]">Key Innovation</span>
              <span className="text-sm font-bold text-[#14241B]">Slip-Joint Attic Cross-Ties</span>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="grid gap-8 lg:grid-cols-12 mt-10 items-start">
            <div className="lg:col-span-4">
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                The Island Challenge
              </h3>
              <p className="mt-3 text-sm text-[#6D716A] leading-relaxed">
                Building on an island requires eliminating material waste and avoiding unexpected field alterations. All timber joints and panel openings were pre-machined in Woolwich, loaded onto flatbed trailers, and ferried across Casco Bay.
              </p>
            </div>

            <div className="lg:col-span-4">
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                The Architectural Response
              </h3>
              <p className="mt-3 text-sm text-[#6D716A] leading-relaxed">
                A high-posted cape design with a continuous central ridge pole creates expansive headroom on the upper floor. Unique slip-joint cross-ties support an overhead storage loft without cluttering the cathedral volume.
              </p>
            </div>

            <div className="lg:col-span-4">
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                Press & Performance
              </h3>
              <p className="mt-3 text-sm text-[#6D716A] leading-relaxed">
                Featured in <em>Working Waterfront Magazine</em> for its exceptional energy efficiency and speedy crane assembly. The wrap-around covered porch shelters entryways against Nor&apos;easters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
