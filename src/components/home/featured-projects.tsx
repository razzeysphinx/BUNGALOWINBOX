import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { formatDimensions, formatSquareFeet } from "@/lib/utils";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section bg-[#F4F1E9] border-t border-b border-[#D9D5CB]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9D5CB]">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="heading-xl text-[#14241B]">
              Selected
              <span className="block italic font-normal">Timber Frames.</span>
            </h2>
          </div>

          <p className="max-w-[440px] text-sm md:text-base text-[#6D716A] leading-relaxed">
            Every structure shown is an authentic project designed, fabricated, and crane-raised by our team in Maine and New England.
          </p>
        </div>

        {/* Editorial Alternating Showcase */}
        <div className="divide-y divide-[#D9D5CB]">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={project.slug}
                className="py-16 lg:py-20 grid gap-10 lg:grid-cols-12 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="arch-image relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-[#D9D5CB]">
                      <Image
                        src={project.heroImage}
                        alt={`${project.name} - timber frame in ${project.location}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#98704C]">
                    <span>{project.categoryLabel}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-[#14241B] mt-3 leading-tight">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[#98704C] transition-colors"
                    >
                      {project.name}
                    </Link>
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#262724]">
                    <div>
                      <span className="text-[#6D716A]">Footprint:</span>{" "}
                      {formatDimensions(project.width, project.length)}
                    </div>
                    {project.squareFeet && (
                      <div>
                        <span className="text-[#6D716A]">Area:</span>{" "}
                        {formatSquareFeet(project.squareFeet)}
                      </div>
                    )}
                    {project.timberSpecies && (
                      <div>
                        <span className="text-[#6D716A]">Frame:</span>{" "}
                        {project.timberSpecies.split(" ")[0]} Hemlock
                      </div>
                    )}
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#6D716A]">
                    {project.shortDescription}
                  </p>

                  <div className="mt-7">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#14241B] hover:text-[#98704C] transition-colors group"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#14241B] text-[#FAF8F2] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#24352B] transition-colors"
          >
            <span>View All 25 Completed Builds</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
