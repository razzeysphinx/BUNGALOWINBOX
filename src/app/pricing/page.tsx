import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing & Budget | Timber Frame Investment Guide",
  description:
    "Understand the factors that shape your timber-frame kit investment: footprint dimensions, timber joinery, SIP envelope, crane logistics, and our credited $3,000 design deposit.",
};

const budgetFactors = [
  {
    title: "Building Footprint & Gable Width",
    description:
      "Footprints range from 10'x10' compact gazebos and 14'x20' studios up to 28' and 32' wide two-story barn houses. Longer timber clear spans require larger timber dimensions and specialized structural bents."
  },
  {
    title: "Window & Door Schedules",
    description:
      "Because Structural Insulated Panels (SIPs) allow window openings to be placed anywhere without 16-inch stud restrictions, clients often incorporate high-performance glass walls, French doors, or transom windows."
  },
  {
    title: "Roof & Loft Architecture",
    description:
      "Options such as open cathedral ceilings with exposed timber purlins, full second floors with knee-walls, or integrated attic storage lofts with slip-joint ties influence material volume and fabrication time."
  },
  {
    title: "Delivery & Site Accessibility",
    description:
      "Our dedicated Fassi crane trucks deliver and erect frames directly onto your foundation. Island deliveries (such as Casco Bay via ferry barge) or remote mountain terrain involve tailored logistics."
  },
  {
    title: "Exterior Porches & Additions",
    description:
      "Wrap-around covered porches, timber-frame carports, and entryway airlocks integrate into the primary frame structure, extending usable outdoor living."
  },
  {
    title: "Site Conditions & Foundation Type",
    description:
      "Our building systems interface with full concrete basements, radiant frost-wall slabs, sonotube piers, or helical screw piles for rocky or ledge sites."
  }
];

export default function PricingPage() {
  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">Investment & Budget Guide</p>
          <h1 className="display-lg text-[#14241B]">
            Understanding Your
            <span className="block italic font-normal text-[#98704C]">
              Project Budget.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            Due to real-time market fluctuations in raw heavy hemlock timber and high-performance panel cores, as well as the unique site conditions of every build, we do not publish static fixed price lists. Instead, we provide transparent, custom estimates based on your chosen footprint.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[960px]">
          <div className="space-y-6">
            <h2 className="heading-xl text-[#14241B]">
              Why there is no single catalog price.
            </h2>
            <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
              Every Bungalow in a Box is an authentic piece of timber architecture, not an off-the-shelf prefabricated modular box. A 24&apos; x 36&apos; frame configured as an open high-ceiling event barn requires very different timber bent spacing and joinery than a 24&apos; x 36&apos; three-bedroom residence with a daylight basement and wrap-around porch.
            </p>
            <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
              During our free introductory consultation, we review your property, preferred dimensions, and project goals to provide you with reliable estimate ranges based on recent similar builds.
            </p>

            <div className="pt-4 border-t border-[#D9D5CB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#98704C]">
                Introductory Consultations Are Always Free
              </span>
              <Button href="/start-a-project" variant="primary" size="md" arrow>
                Request a Custom Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit & Payment Structure */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <div className="max-w-[760px] mb-12">
            <p className="eyebrow">Payment Schedule</p>
            <h2 className="heading-xl text-[#14241B]">
              Predictable, Phased Investment.
            </h2>
            <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
              Our payment milestones align directly with design deliverables and workshop fabrication stages.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white border border-[#D9D5CB] p-6 space-y-4">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#98704C]">
                STEP 1
              </span>
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                $3,000 Design Deposit
              </h3>
              <p className="text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                Generates complete working drawings, scale elevations, floor plans, 3D renderings, and a firm kit quote.
              </p>
              <div className="pt-2 text-xs font-bold text-[#14241B] bg-[#FAF8F2] p-2 border border-[#D9D5CB]">
                100% credited toward construction cost upon order.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#D9D5CB] p-6 space-y-4">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#98704C]">
                STEP 2
              </span>
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                50% Fabrication Deposit
              </h3>
              <p className="text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                Secures your designated slot on our shop calendar. We order heavy timbers and SIP panels and begin workshop joinery.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#D9D5CB] p-6 space-y-4">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#98704C]">
                STEP 3
              </span>
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                Final Balance Upon Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                The balance of the kit payment is due upon delivery of your Bungalow in a Box to the building site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Budget Drivers */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[960px]">
          <div className="max-w-[760px] mb-12">
            <p className="eyebrow">Cost Drivers</p>
            <h2 className="heading-xl text-[#14241B]">
              Key Factors Influencing Your Budget.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {budgetFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-[#F4F1E9] border border-[#D9D5CB] p-6 space-y-3"
              >
                <h3 className="font-[var(--font-display)] text-xl sm:text-2xl text-[#14241B]">
                  {factor.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow">Ready for Numbers?</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Get a tailored project estimate for your build.
          </h2>
          <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
            Tell us your desired footprint, site location, and timeline. Raoul and Vicki will review your details and connect directly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/start-a-project" variant="primary" size="lg" arrow>
              Request Your Estimate
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              Explore 25 Completed Builds
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
