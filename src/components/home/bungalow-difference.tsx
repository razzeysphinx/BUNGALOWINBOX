import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Traditional Timber Craft",
    description:
      "Native Maine hemlock timbers, precision mortise-and-tenon joinery with hardwood pegs, and exposed interior volumes that bring enduring warmth and acoustic calm.",
    image: "/images/projects/casco-bay/joinery.jpg",
    caption: "Handcrafted mortise and tenon joint with oak trunnel"
  },
  {
    number: "02",
    title: "Modern Building Envelope",
    description:
      "Structural Insulated Panels (SIPs) wrap the exterior of the timber frame without thermal bridging, creating an airtight, super-insulated four-season shell that cuts heating costs drastically.",
    image: "/images/process/crane-raising.jpg",
    caption: "Crane-hoisted SIP panel installation directly onto bents"
  },
  {
    number: "03",
    title: "Shop Fabricated in Maine",
    description:
      "Every post, bent, rafter, and panel opening is cut, drilled, sanded, and pre-stained under controlled conditions in our Woolwich workshop before touching your building site.",
    image: "/images/process/timber-staining.jpg",
    caption: "Pre-staining timbers in our Woolwich workshop"
  },
  {
    number: "04",
    title: "Efficient Crane-Assisted Raising",
    description:
      "Our dedicated Fassi crane trucks deliver and raise the heavy timbers safely with a small, nimble crew. A typical structure is fully framed, paneled, and roofed in 10 to 14 days.",
    image: "/images/projects/casco-bay/bent-raising.jpg",
    caption: "Raising heavy timber bents with company-owned crane"
  },
];

export function BungalowDifference() {
  return (
    <section className="section bg-[#14241B] text-[#FAF8F2]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow text-[#B18A63]">The Bungalow Difference</p>

            <h2 className="display-lg text-white">
              Old craft.
              <span className="block italic font-normal text-[#FAF8F2]">
                Modern physics.
              </span>
            </h2>

            <p className="mt-6 text-white/75 leading-relaxed text-base md:text-lg max-w-[460px]">
              We merge the 800-year lineage of European and American timber framing with modern thermal envelope science. The result is a home that feels timeless the day you move in and performs effortlessly for decades.
            </p>

            <div className="mt-8 p-6 bg-white/5 border border-white/10 max-w-[460px]">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#B18A63] mb-2">
                Harvard Physics Foundation
              </div>
              <p className="text-xs leading-relaxed text-white/70">
                Founder Raoul Hennin applies physical principles of structural load paths, thermal conductivity, and timber fiber elasticity to eliminate weak points and prevent heat loss.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-12 items-start"
              >
                <div className="sm:col-span-2 font-mono text-xs font-bold tracking-[0.2em] text-[#B18A63]">
                  {pillar.number}
                </div>

                <div className="sm:col-span-10 space-y-4">
                  <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-white/75">
                    {pillar.description}
                  </p>

                  <div className="arch-image relative aspect-[16/9] w-full mt-4 border border-white/15">
                    <Image
                      src={pillar.image}
                      alt={pillar.caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-[0.7rem] text-white/50 italic">
                    {pillar.caption}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
