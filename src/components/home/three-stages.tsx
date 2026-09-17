import { Button } from "@/components/ui/button";

const stages = [
  {
    number: "01",
    title: "Designed Here",
    description:
      "The building begins with your site, intended use, priorities and ideas. We develop a personalized timber-frame plan and 3D frame geometry tailored to your landscape.",
  },
  {
    number: "02",
    title: "Fabricated Here",
    description:
      "Timbers and major structural components are prepared in Woolwich, Maine before delivery. Mortise-and-tenon joints are hand-cut, test-fitted, and labeled for seamless site assembly.",
  },
  {
    number: "03",
    title: "Raised There",
    description:
      "The prepared structural system reaches your site ready for efficient assembly. Our specialized crane truck and nimble crew raise the frame and panel envelope, enclosed in days.",
  },
];

export function ThreeStages() {
  return (
    <section className="section bg-[#FAF8F2]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">The Bungalow Approach</p>

            <h2 className="heading-xl mt-5 max-w-[620px] text-[#14241B]">
              More than a kit.
              <span className="block italic">
                From an idea to a structure.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] leading-relaxed text-[#6D716A]">
              We help clients turn a building idea and a parcel of land into an enduring timber-frame building. By uniting traditional craft with off-site fabrication, we eliminate the weather delays and inefficiencies of conventional construction.
            </p>

            <div className="mt-8">
              <Button href="/process" variant="text" arrow>
                Explore our full 7-step process
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-4 border-t border-[#D9D5CB] py-8 sm:grid-cols-[90px_1fr]"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-[#98704C]">
                  {stage.number}
                </span>

                <div>
                  <h3 className="font-[var(--font-display)] text-3xl text-[#14241B] md:text-4xl">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-[600px] leading-7 text-[#6D716A]">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
