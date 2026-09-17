import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Zap, Layers, Truck, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Process | How Timber Frame Kits Are Designed & Built",
  description:
    "Explore the 6-step design-build sequence of Bungalow in a Box: from free consultation and $3,000 credited custom design to shop fabrication and 10-day crane raising.",
};

const processSteps = [
  {
    phase: "01",
    title: "Discovery & Consultation",
    cost: "Free",
    icon: Compass,
    summary:
      "We meet in person or by phone to discuss your vision, intended use, building site characteristics, and target timeline.",
    details: [
      "Review site topography, sun angles, and view corridors",
      "Evaluate footprint size options from 8'x8' up to 32' wide",
      "Provide preliminary ballpark budget ranges based on recent builds",
      "Explain the exact division of responsibilities between our team and your site trades"
    ]
  },
  {
    phase: "02",
    title: "Custom Architectural Design",
    cost: "$3,000 Deposit (100% Credited to Build)",
    icon: Layers,
    summary:
      "We charge a $3,000 deposit to produce complete working architectural documents tailored to your property. This fee is fully deducted from construction costs.",
    details: [
      "Dimensioned scale architectural floor plans",
      "Exterior scale elevations for all four sides",
      "3D spatial computer renderings illustrating interior timber volumes",
      "Site-specific foundation plan with exact point loads",
      "Firm, guaranteed fabrication and kit cost quote"
    ]
  },
  {
    phase: "03",
    title: "Engineering & Structural Planning",
    cost: "Included in Design",
    icon: ShieldCheck,
    summary:
      "We coordinate engineering parameters for local snow loads, coastal wind exposures, and seismic criteria.",
    details: [
      "Heavy timber bent sizing and beam depth calculations",
      "Coordination with local building code officials",
      "Foundation interface details (slab, frost wall, or helical screw piers)",
      "Rough opening schedules for windows and exterior doors"
    ]
  },
  {
    phase: "04",
    title: "Workshop Fabrication",
    cost: "50% Fabrication Deposit",
    icon: Zap,
    summary:
      "Upon receipt of the fabrication deposit, materials are ordered and production begins in our dry, climate-controlled Woolwich workshop.",
    details: [
      "Native Maine hemlock timbers are surfaced, checked, and squared",
      "Mortise and tenon joints, scarf joints, and peg holes are precision cut",
      "Timbers are hand-sanded and treated with protective heritage oils",
      "Structural Insulated Panels (SIPs) are cut to precision dimensions with wire chases"
    ]
  },
  {
    phase: "05",
    title: "Delivery & Crane Raising",
    cost: "Final Balance Upon Delivery",
    icon: Truck,
    summary:
      "Our company-owned Fassi crane trucks deliver your bungalow kit to your site and our experienced crew raises the heavy timber frame.",
    details: [
      "Timber bents assembled and hoisted into place with our crane",
      "Oak trunnels (hardwood pegs) driven to permanently lock joinery",
      "SIP wall and roof panels hoisted and fastened to the frame exterior",
      "Standing-seam metal roofing installed; structure is weather-tight in 10 to 14 days"
    ]
  },
  {
    phase: "06",
    title: "Interior Finishes & Move-In",
    cost: "Local Trades",
    icon: CheckCircle2,
    summary:
      "With the structure fully weather-tight and dry, your local general contractor or electrical/plumbing trades step in to complete finishes.",
    details: [
      "Plumbing and electrical wiring run easily through pre-drilled SIP chases",
      "Interior partition walls placed without load-bearing constraints",
      "Installation of wood stoves, mini-split heat pumps, and kitchen cabinetry",
      "Move into an enduring, high-performance timber home"
    ]
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">The Building Sequence</p>
          <h1 className="display-lg text-[#14241B]">
            From concept to raised timber frame.
            <span className="block italic font-normal text-[#98704C]">
              A proven, predictable sequence.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            Building should not be fraught with unpredictable weather delays, wasted lumber, and escalating field costs. Our prefabrication method brings the majority of construction into our Maine workshop so on-site raising takes days, not months.
          </p>
        </div>
      </section>

      {/* Six Step Deep-Dive */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[1040px] space-y-16">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="bg-white border border-[#D9D5CB] p-8 sm:p-12 hover:border-[#14241B] transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#D9D5CB]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] bg-[#14241B] text-[#FAF8F2] px-3 py-1.5 flex items-center gap-2">
                      <Icon size={14} className="text-[#B18A63]" />
                      <span>PHASE {step.phase}</span>
                    </span>
                    <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-[#14241B]">
                      {step.title}
                    </h2>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#98704C]">
                    {step.cost}
                  </span>
                </div>

                <p className="mt-6 text-base sm:text-lg text-[#262724] leading-relaxed">
                  {step.summary}
                </p>

                <div className="mt-6 pt-6 border-t border-[#F4F1E9]">
                  <span className="eyebrow text-xs block mb-4">What Happens in this Phase:</span>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-xs sm:text-sm text-[#6D716A]">
                        <CheckCircle2 size={16} className="text-[#98704C] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Pillars: Joinery + SIPs + Cranes */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container">
          <div className="max-w-[760px] mb-12">
            <p className="eyebrow">The System</p>
            <h2 className="heading-xl text-[#14241B]">
              The Anatomy of a Bungalow.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Joinery */}
            <div className="bg-white border border-[#D9D5CB] p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[16/10] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/projects/casco-bay/joinery.jpg"
                    alt="Traditional mortise and tenon timber joinery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Traditional Joinery
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Every connection is mortised and tenoned by hand. Hardwood oak pegs (trunnels) draw the joints tight, allowing wood fibers to breathe and self-tighten over generations without metal brackets.
                </p>
              </div>
            </div>

            {/* SIPs */}
            <div className="bg-white border border-[#D9D5CB] p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[16/10] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/process/crane-raising.jpg"
                    alt="Structural insulated panels being hoisted onto timber frame"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Continuous SIP Envelope
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Structural Insulated Panels enclose the outside of the timbers. Because the timbers bear all loads, exterior walls have zero thermal bridging and allow windows to be positioned anywhere on the facade.
                </p>
              </div>
            </div>

            {/* Crane Raising */}
            <div className="bg-white border border-[#D9D5CB] p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[16/10] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/team/cranes.jpg"
                    alt="Fassi crane trucks raising timber frame"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Precision Crane Raising
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Our company-owned Fassi crane fleet provides the muscle to erect multi-ton timber bents safely in tight woodland clearings, island sites, or suburban backyards without damaging surrounding trees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow">Take the First Step</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Schedule your free introductory consultation.
          </h2>
          <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
            Let&apos;s discuss your building site, footprint possibilities, and how our $3,000 design deposit gets your project onto our shop calendar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/start-a-project" variant="primary" size="lg" arrow>
              Start Your Project Inquiry
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Learn About Project Budgets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
