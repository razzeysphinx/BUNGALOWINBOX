import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildCategories } from "@/content/build-categories";

export function BuildCategories() {
  return (
    <section className="section bg-[#FAF8F2]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="eyebrow">Explore Building Types</p>

            <h2 className="heading-xl text-[#14241B]">
              What are you
              <span className="block italic font-normal">building?</span>
            </h2>

            <p className="mt-6 max-w-[420px] leading-relaxed text-[#6D716A] text-base">
              Start with the way you plan to use the structure. Every Bungalow in a Box is custom-tailored to site topography, natural light, and individual living needs.
            </p>

            <div className="mt-8 hidden lg:block">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] hover:text-[#98704C] transition-colors"
              >
                <span>View Full Project Archive (25 Builds)</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {buildCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/projects?category=${category.slug}`}
                className={index === 0 ? "sm:col-span-2" : ""}
              >
                <article className="group bg-[#F4F1E9] border border-[#D9D5CB] p-4 transition-all duration-300 hover:border-[#14241B]">
                  <div
                    className={[
                      "arch-image relative",
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/3]",
                    ].join(" ")}
                  >
                    <Image
                      src={category.image}
                      alt={`Timber frame ${category.title} by Bungalow in a Box`}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 640px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#98704C]">
                        {category.eyebrow}
                      </span>

                      <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] group-hover:text-[#98704C] transition-colors">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#6D716A]">
                        {category.description}
                      </p>

                      <div className="mt-3 text-xs text-[#262724]/70 font-mono">
                        {category.details}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-9 items-center justify-center rounded-full border border-[#D9D5CB] text-[#14241B] transition-all group-hover:bg-[#14241B] group-hover:text-white group-hover:border-[#14241B]"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
