import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    phase: "DISCOVERY",
    title: "Discovery & Consultation",
    detail:
      "A preliminary conversation exploring your building goals, site location, intended use, and general budget parameters.",
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "Custom Timber-Frame Design",
    detail:
      "A $3,000 design deposit initiates custom working plans, 3D frame geometry, elevations, and fixed fabrication quotes (100% credited to build).",
  },
  {
    number: "03",
    phase: "ENGINEERING",
    title: "Structural Engineering & Coordination",
    detail:
      "Site-specific snow/wind load verification, foundation specs, and window/door rough opening dimensions coordinated with your team.",
  },
  {
    number: "04",
    phase: "FABRICATION",
    title: "Workshop Fabrication in Maine",
    detail:
      "Native Maine hemlock is cut, mortised, tenoned, sanded, and pre-stained; high-performance SIP panels are precision-cut indoors.",
  },
  {
    number: "05",
    phase: "DELIVERY",
    title: "Staged Delivery to Your Site",
    detail:
      "Materials are staged on flatbeds and transported via our specialized trucks or island ferry barges in reverse assembly order.",
  },
  {
    number: "06",
    phase: "RAISING",
    title: "Crane-Assisted Site Raising",
    detail:
      "Our crane truck and crew hoist timber bents, pin joints with hardwood oak trunnels, and install the thermal panel envelope.",
  },
  {
    number: "07",
    phase: "COMPLETION",
    title: "Weather-Tight Handoff",
    detail:
      "Your structure is securely enclosed, weathertight, and ready for interior mechanicals, cabinetry, and flooring finishes.",
  },
];

export function ProcessPreview() {
  return (
    <section className="section bg-[#F4F1E9] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="max-w-[760px]">
          <p className="eyebrow">The 7-Stage Journey</p>

          <h2 className="heading-xl text-[#14241B]">
            A clearer way
            <span className="block italic font-normal">to build.</span>
          </h2>

          <p className="mt-6 body-large text-[#6D716A]">
            Every Bungalow in a Box progresses through an orderly seven-phase sequence that minimizes site delays and controls costs from initial idea to weather-tight dry-in.
          </p>
        </div>

        <div className="mt-16 border-t border-[#D9D5CB]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-12 items-baseline border-b border-[#D9D5CB] py-7 gap-4 hover:bg-[#FAF8F2] px-4 transition-colors"
            >
              <div className="md:col-span-2 font-mono text-xs font-bold tracking-[0.2em] text-[#98704C]">
                {step.number} • {step.phase}
              </div>

              <h3 className="md:col-span-4 font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B]">
                {step.title}
              </h3>

              <p className="md:col-span-6 text-sm sm:text-base text-[#6D716A] leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
          <p className="text-sm text-[#6D716A]">
            Want a detailed breakdown of what is included, foundation coordination, and client responsibilities?
          </p>

          <Button href="/process" variant="primary" size="lg" arrow>
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
