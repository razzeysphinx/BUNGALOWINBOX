import { Button } from "@/components/ui/button";

const costFactors = [
  {
    title: "Footprint & Dimensions",
    description: "Overall square footage, width (10' to 32' clear spans), and length define the primary timber bent count and volume.",
  },
  {
    title: "Timber & Joinery Scope",
    description: "Post-and-beam spacing, timber sizing for regional snow loads, and decorative elements like arched braces or king posts.",
  },
  {
    title: "Roof & Volume Complexity",
    description: "Simple gable versus dormers, cathedral cross-ties, second-story knee walls, and structural storage lofts.",
  },
  {
    title: "Windows & Openings",
    description: "The quantity, scale, and placement of custom rough openings precut into the exterior thermal panels.",
  },
  {
    title: "Site Conditions & Delivery",
    description: "Mainland road accessibility, terrain slope, tree clearance for crane outriggers, or vehicle ferry logistics for island builds.",
  },
  {
    title: "Enclosure & Porch Additions",
    description: "Integrated wrap-around covered porches, shed additions, metal roofing specifications, and exterior trim packages.",
  },
];

export function PricingBudget() {
  return (
    <section className="section bg-[#FAF8F2] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow">Financial Clarity</p>

            <h2 className="heading-xl text-[#14241B]">
              Understanding your
              <span className="block italic font-normal">project budget.</span>
            </h2>

            <p className="mt-6 body-large text-[#6D716A]">
              We do not publish misleading &ldquo;starting at&rdquo; gimmicks. Every timber frame we build is engineered specifically for your site conditions, intended footprint, and architectural goals.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#6D716A]">
              Our design process begins with a transparent, itemized structural estimate. Once your preliminary drawings are completed under our $3,000 design deposit (fully credited to your build), you receive fixed-cost pricing for your timber frame and panel package before shop fabrication begins.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/start-a-project" variant="primary" size="lg" arrow>
                Request a Project Estimate
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View Budget Breakdown
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F4F1E9] border border-[#D9D5CB] p-6 sm:p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#98704C] mb-6">
                Key Factors That Determine Your Estimate
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {costFactors.map((factor, index) => (
                  <div
                    key={factor.title}
                    className="border-t border-[#D9D5CB] pt-4"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#98704C]">
                      <span>0{index + 1}</span>
                      <span>•</span>
                      <span className="font-sans font-bold text-[#14241B] text-sm tracking-normal">
                        {factor.title}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#6D716A]">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#D9D5CB] bg-white p-5 border">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#14241B]">
                  Deposit & Payment Structure
                </div>
                <div className="mt-2 text-xs leading-relaxed text-[#6D716A]">
                  <strong>1. Design Deposit:</strong> $3,000 to initiate CAD blueprints, 3D renderings, and fixed quote (100% credited).<br />
                  <strong>2. Fabrication Deposit:</strong> 50% upon contract signing to mill native timbers and cut SIP panels.<br />
                  <strong>3. Raising & Delivery Balance:</strong> Remaining 50% upon delivery to your site.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
