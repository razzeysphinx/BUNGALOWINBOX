import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { pressMentions } from "@/content/press";

export const metadata: Metadata = {
  title: "About Us | Raoul & Vicki Hennin",
  description:
    "Founded in 1998, Bungalow in a Box is a family-owned timber-frame company led by Raoul Hennin (Harvard Physics '82) and Vicki Hennin in Woolwich, Maine.",
};

const timeline = [
  {
    year: "1998",
    title: "Montsweag Brook Corporation Founded",
    description:
      "Raoul and Vicki founded Montsweag Brook Corporation in Woolwich, Maine, to design and build high-performance architectural structures throughout New England."
  },
  {
    year: "2007",
    title: "Bungalow in a Box Launched",
    description:
      "Formalized our precision prefabrication system—combining traditional mortise-and-tenon timber framing with Structural Insulated Panels (SIPs) to provide enduring, energy-efficient kits."
  },
  {
    year: "2014–2015",
    title: "Island Builds & Critical Recognition",
    description:
      "Completed signature projects like the Casco Bay Barn House on Chebeague Island. Recognized by Down East Magazine (Editors' Choice) and Working Waterfront."
  },
  {
    year: "2016",
    title: "Vicki Joins Full-Time",
    description:
      "After 20 years in corporate marketing, Vicki joined full-time to lead client relations, on-site organization, and workshop timber finishing."
  },
  {
    year: "Today",
    title: "Two Generations of Maine Builders",
    description:
      "Joined on-site by children Oscar (Mechanical Engineer) and Iris (Applied Math), operating our dedicated fleet of Fassi crane trucks across New England."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">Our Story & Heritage</p>
          <h1 className="display-lg text-[#14241B]">
            Built by a family.
            <span className="block italic font-normal text-[#98704C]">
              Built for generations.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            At Bungalow in a Box, we believe your structure should be as enduring as it is beautiful. Based in Woolwich, Maine, we combine four decades of traditional mortise-and-tenon joinery with physics-driven thermal performance.
          </p>
        </div>
      </section>

      {/* Narrative Section with Authentic Photos */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="eyebrow">Maine Craftsmanship</p>
              <h2 className="heading-xl text-[#14241B]">
                First we listen. Then we build.
              </h2>
              <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
                Raoul and Vicki founded Montsweag Brook Corporation in 1998 along the quiet tidal waters of Woolwich, Maine. Having built authentic timber-frame structures for over 40 years, Raoul brings classic timber framing skills and extensive construction experience to every design.
              </p>
              <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
                With a degree in Physics from Harvard, he enjoys the art and science of construction almost as much as collaborating with clients. His buildings often surprise and delight clients with unusual details of substance, proportion, and natural light.
              </p>
            </div>

            <div className="lg:col-span-6 arch-image relative aspect-[4/3] border border-[#D9D5CB]">
              <Image
                src="/images/team/founders.jpg"
                alt="Raoul and Vicki Hennin on a timber frame construction site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                Founders Raoul and Vicki Hennin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Family Profiles */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container">
          <div className="max-w-[760px] mb-12">
            <p className="eyebrow">The Builders</p>
            <h2 className="heading-xl text-[#14241B]">
              The People Behind the Craft.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Raoul */}
            <div className="bg-white border border-[#D9D5CB] p-6 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[4/3] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/team/raoul.jpg"
                    alt="Raoul Hennin at work"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Raoul Hennin
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#98704C] mt-1">
                  Founder & Master Builder
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Harvard Physics graduate with 40+ years of timber framing mastery. Raoul designs every bent and joinery detail, ensuring structural integrity and timeless proportion.
                </p>
              </div>
            </div>

            {/* Vicki */}
            <div className="bg-white border border-[#D9D5CB] p-6 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[4/3] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/team/vicki.jpg"
                    alt="Vicki Hennin on site"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Vicki Hennin
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#98704C] mt-1">
                  Co-Founder & Operations
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Bringing over 20 years of marketing and financial management. Vicki oversees client communication, site coordination, and hand-finishing and pre-staining of workshop timbers.
                </p>
              </div>
            </div>

            {/* Oscar & Iris */}
            <div className="bg-white border border-[#D9D5CB] p-6 flex flex-col justify-between">
              <div>
                <div className="arch-image relative aspect-[4/3] mb-6 border border-[#D9D5CB]">
                  <Image
                    src="/images/team/oscar-iris.jpg"
                    alt="Oscar and Iris Hennin"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  Oscar & Iris Hennin
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#98704C] mt-1">
                  Second-Generation Builders
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                  Both grew up on job sites. Oscar (Mechanical Engineer) and Iris (Applied Math) bring advanced technical acumen and physical stamina to our crane raisings and fabrication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Crane Advantage */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 arch-image relative aspect-[4/3] border border-[#D9D5CB]">
              <Image
                src="/images/team/cranes.jpg"
                alt="Bungalow in a Box Fassi Crane trucks loaded with timbers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                Dedicated Fassi Crane Fleet
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <p className="eyebrow">The Muscle & The Method</p>
              <h2 className="heading-xl text-[#14241B]">
                Small, nimble crew. Massive crane capability.
              </h2>
              <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
                Rather than relying on sub-contracted crane operators who may not understand timber joinery, we own and operate our own fleet of custom Fassi crane trucks.
              </p>
              <p className="text-base sm:text-lg text-[#6D716A] leading-relaxed">
                Our cranes not only haul our prefabricated panels and timbers to your building site—they provide the muscle that allows our small family crew to raise complex timber bents safely, swiftly, and precisely in tight spots without tearing up your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-center">Milestones</p>
          <h2 className="heading-xl text-[#14241B] text-center mb-16">
            A Quarter-Century of Building.
          </h2>

          <div className="relative border-l-2 border-[#D9D5CB] ml-4 sm:ml-32 space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8 sm:pl-10">
                <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-[#98704C] border-2 border-white" />
                <span className="font-mono text-sm font-bold text-[#98704C] block sm:absolute sm:-left-28 sm:top-1 sm:text-right sm:w-20">
                  {item.year}
                </span>
                <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#6D716A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Archive */}
      <section id="press" className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="max-w-[760px] mb-12">
            <p className="eyebrow">Media & Press</p>
            <h2 className="heading-xl text-[#14241B]">
              National & Regional Recognition.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressMentions.map((pm) => (
              <a
                key={pm.headline}
                href={pm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F4F1E9] border border-[#D9D5CB] p-6 flex flex-col justify-between hover:border-[#14241B] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#98704C]">
                    <span>{pm.publication}</span>
                    {pm.year && <span>{pm.year}</span>}
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-[#14241B] mt-3 group-hover:text-[#98704C] transition-colors">
                    {pm.headline}
                  </h3>
                  {pm.snippet && (
                    <p className="mt-3 text-xs sm:text-sm text-[#6D716A] leading-relaxed">
                      {pm.snippet}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9D5CB] text-xs font-bold uppercase tracking-wider text-[#14241B] group-hover:text-[#98704C] transition-colors flex items-center justify-between">
                  <span>Read Article</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow">Begin Your Collaboration</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Ready to meet the family and plan your structure?
          </h2>
          <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
            We are available Monday through Friday and on weekends for in-person or phone consultations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/start-a-project" variant="dark">
              Start Your Project
            </Button>
            <Button href="/projects" variant="outline">
              Explore Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
