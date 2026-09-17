import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { formatDimensions, formatSquareFeet } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-[#F4F1E9] border border-[#D9D5CB] flex flex-col justify-between transition-all duration-300 hover:border-[#14241B]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="arch-image relative aspect-[4/3] overflow-hidden border-b border-[#D9D5CB]">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {project.location && (
            <div className="absolute top-3 left-3 bg-[#14241B]/90 text-white text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm">
              {project.location}
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[#98704C]">
            <span>{project.categoryLabel}</span>
            <span className="font-mono text-[#262724]">
              {formatDimensions(project.width, project.length)}
            </span>
          </div>

          <h3 className="font-[var(--font-display)] text-2xl text-[#14241B] mt-2 group-hover:text-[#98704C] transition-colors leading-snug">
            <Link href={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-[#6D716A] line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.features.slice(0, 3).map((feat) => (
                <span
                  key={feat}
                  className="inline-block text-[0.65rem] bg-white border border-[#D9D5CB] px-2 py-0.5 text-[#262724]"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#D9D5CB] flex items-center justify-between">
          <span className="text-xs font-mono text-[#6D716A]">
            {project.squareFeet ? formatSquareFeet(project.squareFeet) : `${project.width}' Gable`}
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] group-hover:text-[#98704C] transition-colors"
          >
            <span>View Project</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
