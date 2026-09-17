import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    detail: "Free introductory conversation covering your site, goals, preferred footprint, and budget context."
  },
  {
    number: "02",
    title: "Custom Design",
    detail: "A $3,000 design deposit generates working drawings, scale elevations, floor plans, 3D rendering, and fixed fabrication quote (100% credited to build)."
  },
  {
    number: "03",
    title: "Engineering & Coordination",
    detail: "Structural load calculations, foundation coordination, and window/door rough opening specifications."
  },
  {
    number: "04",
    title: "Workshop Fabrication",
    detail: "Timbers are cut, mortised, tenoned, sanded, and pre-stained; SIP panels are sized in our Woolwich shop."
  },
  {
    number: "05",
    title: "Delivery & Crane Raising",
    detail: "Our crane trucks deliver materials to your site; bents are erected and panels enclosed in 10 to 14 days."
  },
  {
    number: "06",
    title: "Weather-Tight Turnkey",
    detail: "Your structure is securely enclosed with standing seam metal roofing, ready for your local finishes."
  }
];

export function ProcessPreview() {
  return (
    <section className="section bg-[#F4F1E9] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="max-w-[760px]">
          <p className="eyebrow">From Idea to Raised Timber Frame</p>

          <h2 className="heading-xl text-[#14241B]">
            A clearer way
            <span className="block italic font-normal">to build.</span>
          </h2>

          <p className="mt-6 body-large text-[#6D716A]">
            Every Bungalow in a Box progresses through an orderly six-phase sequence that minimizes site delays and controls costs from the first sketch to final roof capping.
          </p>
        </div>

        <div className="mt-16 border-t border-[#D9D5CB]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-12 items-baseline border-b border-[#D9D5CB] py-8 gap-4 hover:bg-[#FAF8F2] px-4 transition-colors"
            >
              <span className="md:col-span-2 font-mono text-xs font-bold tracking-[0.2em] text-[#98704C]">
                PHASE {step.number}
              </span>

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
            Want a deeper look at our crane trucks, foundation requirements, and joinery?
          </p>

          <Button href="/process" variant="dark">
            Explore The Full Process
          </Button>
        </div>
      </div>
    </section>
  );
}
