import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { BuildCategories } from "@/components/home/build-categories";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { BungalowDifference } from "@/components/home/bungalow-difference";
import { FeaturedCaseStudy } from "@/components/home/featured-case-study";
import { ProcessPreview } from "@/components/home/process-preview";
import { PressStrip } from "@/components/home/press-strip";
import { ClientStories } from "@/components/home/client-stories";
import { FAQPreview } from "@/components/home/faq-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Large Architectural Manifesto / Introduction */}
      <section className="section bg-[#FAF8F2]">
        <div className="container grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow">Built Differently</p>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6D716A]">
              Maine Craft • Modern Performance
            </span>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4.8vw,5.2rem)] leading-[1.02] tracking-[-0.035em] text-[#14241B]">
              We don&apos;t mass-produce houses. We craft enduring structures tailored to the site and the people who live in them.
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 text-[#6D716A] text-base leading-relaxed">
              <p>
                First, we listen. Then we design and prefabricate authentic timber-frame structures in our Woolwich workshop. Combining traditional mortise-and-tenon joinery with high-performance Structural Insulated Panels (SIPs), we eliminate the drafts and energy waste of standard stick-built construction.
              </p>
              <p>
                Whether it is a 2,000 sq. ft. coastal barn house, a 280 sq. ft. mountain studio, or an open timber-frame event space, each Bungalow in a Box arrives on site pre-cut, pre-stained, and ready to be raised swiftly with our dedicated crane fleet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BuildCategories />
      <FeaturedProjects />
      <BungalowDifference />
      <FeaturedCaseStudy />
      <ProcessPreview />
      <PressStrip />
      <ClientStories />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
