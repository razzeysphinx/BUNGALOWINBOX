import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildCategories } from "@/content/build-categories";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Explore Timber-Frame Structures | Bungalow in a Box",
  description:
    "Explore custom timber-frame homes, cottages, cabins, ADUs, barn houses, workshops, event spaces, and outdoor structures designed and prefabricated in Maine.",
};

export default function ExplorePage() {
  return (
    <div className="bg-[#FAF8F2] pt-28 pb-24 md:pt-36">
      <div className="container">
        {/* Header */}
        <div className="max-w-[860px] pb-14 border-b border-[#D9D5CB]">
          <p className="eyebrow">Architectural Typologies</p>
          <h1 className="display-lg text-[#14241B]">
            What we create.
            <span className="block italic font-normal text-[#98704C]">
              Designed around your place.
            </span>
          </h1>
          <p className="mt-6 body-large text-[#6D716A]">
            Bungalow in a Box is not limited to small kits. We design, mill, and crane-raise residential timber frames across New England, ranging from 280 sq. ft. mountain cabins to 2,400+ sq. ft. island barn houses and expansive community event spaces.
          </p>
        </div>

        {/* Visual Category Directory */}
        <div className="mt-14 space-y-20">
          {buildCategories.map((category, index) => {
            const count = projects.filter(
              (p) => p.category === category.slug || (category.slug === "homes" && p.category === "homes")
            ).length;

            return (
              <article
                key={category.slug}
                className="grid gap-10 lg:grid-cols-12 items-center border-b border-[#D9D5CB] pb-16"
              >
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/explore/${category.slug}`}
                    className="group block"
                  >
                    <div className="arch-image relative aspect-[16/10] overflow-hidden border border-[#D9D5CB]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                  } space-y-4`}
                >
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#98704C] flex items-center gap-2">
                    <span>{category.eyebrow}</span>
                    <span>•</span>
                    <span className="font-mono text-[0.7rem] text-[#6D716A]">{count} Builds</span>
                  </div>

                  <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
                    <Link
                      href={`/explore/${category.slug}`}
                      className="hover:text-[#98704C] transition-colors"
                    >
                      {category.title}
                    </Link>
                  </h2>

                  <p className="text-base text-[#6D716A] leading-relaxed">
                    {category.description}
                  </p>

                  <div className="p-4 bg-[#F4F1E9] border border-[#D9D5CB] text-xs font-mono text-[#262724]">
                    <span className="font-semibold block text-[#98704C] uppercase mb-1">Typical Scope:</span>
                    {category.details}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button
                      href={`/explore/${category.slug}`}
                      variant="primary"
                      size="sm"
                      arrow
                    >
                      Explore {category.title}
                    </Button>
                    <Button
                      href={`/projects?category=${category.slug}`}
                      variant="secondary"
                      size="sm"
                    >
                      View Real Builds
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Inquiry Callout */}
        <div className="mt-20 bg-[#14241B] text-[#FAF8F2] p-8 sm:p-12 lg:p-16 border border-[#14241B]">
          <div className="max-w-[760px] space-y-6">
            <p className="eyebrow text-[#B18A63]">Unusual & Custom Structures</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-white">
              Have an idea that doesn&apos;t fit a neat category?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              We frequently build one-of-a-kind structures: high-posted cape additions, airlock preschool entries, Asian-inspired tea houses, and heavy-timber pergolas with protective copper capping. If it can be framed with timbers, we can design and raise it.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button href="/start-a-project" variant="light" size="lg" arrow>
                Discuss a Custom Build
              </Button>
              <Button href="/process" variant="ghost" size="lg" className="border-white/40 text-white hover:bg-white hover:text-[#14241B]">
                How We Engineer & Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
