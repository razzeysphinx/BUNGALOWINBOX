"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    phase: "DESIGN",
    title: "Site Analysis & Frame Geometry",
    description:
      "Every project begins with your land and living priorities. We model the structural timber frame in 3D, calculating snow loads, wind resistance, and sun angles.",
    image: "/images/projects/casco-bay/elevation-3d.jpg",
    detail: "CAD blueprints & full 3D timber cut-sheets",
  },
  {
    step: "02",
    phase: "TIMBER PREPARATION",
    title: "Hand Joinery & Precision Millwork",
    description:
      "Native Maine hemlock timbers are brought into our Woolwich workshop. Each mortise, tenon, and scarf joint is cut, sanded, and test-fitted by hand.",
    image: "/images/projects/casco-bay/joinery.jpg",
    detail: "Traditional mortise and tenon joinery with oak trunnels",
  },
  {
    step: "03",
    phase: "PANEL FABRICATION",
    title: "Thermal Envelope Preparation",
    description:
      "Structural Insulated Panels (SIPs) are custom-cut to match the frame geometry. Window and door rough openings are prepared under controlled shop conditions.",
    image: "/images/process/timber-staining.jpg",
    detail: "Zero thermal bridging panels prepared indoors",
  },
  {
    step: "04",
    phase: "LOADED FOR DELIVERY",
    title: "Logistical Staging in Woolwich",
    description:
      "The entire building kit—timber bents, posts, roof rafters, panels, and fasteners—is systematically organized and strapped onto our flatbeds in sequence of assembly.",
    image: "/images/team/cranes.jpg",
    detail: "Loaded in reverse assembly order for rapid site offloading",
  },
  {
    step: "05",
    phase: "ARRIVAL ON SITE",
    title: "Reaching Mainland or Remote Islands",
    description:
      "Our specialized Fassi crane trucks deliver directly to your foundation. For island projects, flatbeds roll onto vehicle ferry barges across Casco Bay or Penobscot Bay.",
    image: "/images/projects/casco-bay/barge-delivery.jpg",
    detail: "Navigating tight rural roads, woods, and ocean barges",
  },
  {
    step: "06",
    phase: "WALLS RAISED",
    title: "First Bents Erected",
    description:
      "The heavy timber posts and bottom plates are anchored to the foundation. Our crane hoists the first pre-assembled timber bents into place with pinpoint accuracy.",
    image: "/images/projects/casco-bay/bent-raising.jpg",
    detail: "Precision crane lifts coordinated by Raoul and crew",
  },
  {
    step: "07",
    phase: "TIMBER FRAME",
    title: "Frame Pinned with Hardwood Pegs",
    description:
      "Girts, tie beams, and braces are joined and secured with hand-driven oak trunnels. The sculptural skeleton of the timber frame stands fully freestanding.",
    image: "/images/process/raising-woolwich.jpg",
    detail: "Self-supporting traditional post-and-beam structure",
  },
  {
    step: "08",
    phase: "ROOF",
    title: "Rafters & Cathedral Cross-Ties",
    description:
      "The central ridge beam and rafters are hoisted and fastened. Cross-ties lock the second-story cathedral volume together, ready for deck and insulation.",
    image: "/images/projects/casco-bay/rafters.jpg",
    detail: "High-capacity roof system engineered for heavy Maine snow",
  },
  {
    step: "09",
    phase: "WEATHER-TIGHT",
    title: "Continuous Enclosure in Days",
    description:
      "SIP wall and roof panels encase the exterior of the timber frame. With panels secured and weather barriers taped, the home is fully dried in within 10–14 days.",
    image: "/images/process/crane-raising.jpg",
    detail: "Airtight high R-value exterior envelope completed rapidly",
  },
  {
    step: "10",
    phase: "FINISHED BUILDING",
    title: "Ready for Interior Craftsmanship",
    description:
      "With the timber frame exposed internally and the structure completely weather-tight, your local contractor or our finish partners step in to complete the interior.",
    image: "/images/projects/casco-bay/hero.jpg",
    detail: "Generations of enduring comfort and architectural beauty",
  },
];

export function ShopToSite() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section bg-[#F4F1E9] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="max-w-[840px] pb-12">
          <p className="eyebrow">Documentary Timeline</p>
          <h2 className="heading-xl text-[#14241B]">
            Shop to site.
            <span className="block italic font-normal">
              How a Bungalow comes together.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#6D716A] leading-relaxed">
            From raw native hemlock in our Woolwich workshop to a crane-raised, weather-tight structure standing on your site. Follow the verified 10-stage progression.
          </p>
        </div>

        {/* Interactive Desktop / Tablet Stage Selector & Feature Viewer */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Timeline navigation strip */}
          <div className="lg:col-span-4 flex flex-col space-y-2 max-h-[640px] overflow-y-auto pr-2">
            {steps.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={[
                    "text-left p-3.5 border transition-all rounded-[4px] flex items-baseline gap-3.5",
                    isSelected
                      ? "bg-[#14241B] text-[#FAF8F2] border-[#14241B] shadow-sm"
                      : "bg-white text-[#262724] border-[#D9D5CB] hover:border-[#14241B]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "font-mono text-xs font-bold tracking-wider",
                      isSelected ? "text-[#B18A63]" : "text-[#98704C]",
                    ].join(" ")}
                  >
                    {item.step}
                  </span>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.16em] opacity-80">
                      {item.phase}
                    </div>
                    <div className="text-sm font-semibold mt-0.5">
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Big Display */}
          <div className="lg:col-span-8 bg-white border border-[#D9D5CB] p-6 sm:p-8 lg:p-10">
            <div className="arch-image relative aspect-[16/10] w-full overflow-hidden border border-[#D9D5CB]">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#14241B]/90 text-white backdrop-blur-md px-3 py-1.5 text-xs font-mono">
                STAGE {steps[activeStep].step} OF 10: {steps[activeStep].phase}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#98704C]">
                {steps[activeStep].phase}
              </div>

              <h3 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B] mt-2">
                {steps[activeStep].title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#6D716A]">
                {steps[activeStep].description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#D9D5CB] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#262724]">
                  <span className="text-[#6D716A]">Verification:</span> {steps[activeStep].detail}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 text-xs font-semibold border border-[#D9D5CB] rounded-[4px] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#F4F1E9]"
                  >
                    ← Previous Stage
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#14241B] text-white rounded-[4px] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#24352B]"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/process" variant="secondary" size="lg" arrow>
            Read Our Complete Technical Process Guide
          </Button>
        </div>
      </div>
    </section>
  );
}
