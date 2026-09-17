import { Suspense } from "react";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectArchive } from "@/components/projects/project-archive";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Explore 25 authentic timber-frame homes, cottages, ADUs, barns, event spaces, and pavilions designed and fabricated by Bungalow in a Box in Maine.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF8F2] pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="container">
        {/* Header editorial */}
        <div className="max-w-[840px] pb-12">
          <p className="eyebrow">Project Explorer</p>
          <h1 className="display-lg text-[#14241B]">
            Authentic Timber Frames.
            <span className="block italic font-normal">Real Completed Builds.</span>
          </h1>
          <p className="mt-6 body-large text-[#6D716A]">
            Every project in our portfolio is a true custom structure designed and fabricated in Woolwich, Maine. Explore by intended use, width footprint, or specific site conditions.
          </p>
        </div>

        <Suspense fallback={<div className="py-20 text-center font-mono text-xs text-[#6D716A]">Loading Project Explorer...</div>}>
          <ProjectArchive initialProjects={projects} />
        </Suspense>
      </div>
    </div>
  );
}
