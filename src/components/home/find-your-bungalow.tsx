"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { projects } from "@/content/projects";
import { formatDimensions, formatSquareFeet } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FilterChip } from "@/components/ui/filter-chip";
import { TextLink } from "@/components/ui/text-link";

const structureTypes = [
  { label: "Home", value: "homes" },
  { label: "Vacation Home", value: "homes" },
  { label: "Cottage", value: "cottages-cabins" },
  { label: "Cabin", value: "cottages-cabins" },
  { label: "ADU", value: "adus" },
  { label: "Guest House", value: "adus" },
  { label: "Barn", value: "barns-workshops" },
  { label: "Workshop", value: "barns-workshops" },
  { label: "Event Space", value: "event-spaces" },
  { label: "Outdoor Structure", value: "outdoor-structures" },
];

const sizeRanges = [
  { label: "Under 400 sq ft", min: 0, max: 400 },
  { label: "400–800 sq ft", min: 400, max: 800 },
  { label: "800–1,500 sq ft", min: 800, max: 1500 },
  { label: "1,500+ sq ft", min: 1500, max: 10000 },
];

const featurePriorities = [
  { label: "Loft", tag: "Loft" },
  { label: "Full second floor", tag: "Two-Story" },
  { label: "Porch", tag: "Porch" },
  { label: "Cathedral ceiling", tag: "Cathedral" },
  { label: "Open plan", tag: "Open" },
  { label: "Large glazing", tag: "Glazing" },
  { label: "Compact footprint", tag: "Compact" },
  { label: "Flexible layout", tag: "Flexible" },
];

export function FindYourBungalow() {
  const [selectedType, setSelectedType] = useState<string>("homes");
  const [selectedSize, setSelectedSize] = useState<number>(2); // 800-1500 sq ft default
  const [selectedFeature, setSelectedFeature] = useState<string>("Porch");

  const matchedProjects = useMemo(() => {
    const sizeRange = sizeRanges[selectedSize];

    // Score and filter actual projects
    const scored = projects.map((p) => {
      let score = 0;

      // Category match
      if (p.category === selectedType) {
        score += 5;
      }

      // Size match
      if (p.squareFeet) {
        if (p.squareFeet >= sizeRange.min && p.squareFeet <= sizeRange.max) {
          score += 4;
        } else if (
          p.squareFeet >= sizeRange.min * 0.7 &&
          p.squareFeet <= sizeRange.max * 1.3
        ) {
          score += 2;
        }
      }

      // Feature match in features list, story, or description
      const featureLower = selectedFeature.toLowerCase();
      const hasFeature =
        p.features.some((f) => f.toLowerCase().includes(featureLower)) ||
        p.story.toLowerCase().includes(featureLower) ||
        p.shortDescription.toLowerCase().includes(featureLower);

      if (hasFeature) {
        score += 3;
      }

      return { project: p, score };
    });

    // Sort by score descending and take top 3
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3).map((s) => s.project);
  }, [selectedType, selectedSize, selectedFeature]);

  return (
    <section className="section bg-[#FAF8F2] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#98704C] mb-4">
            <Sparkles size={14} />
            <span>Interactive Project Finder</span>
          </div>

          <h2 className="heading-xl text-[#14241B]">
            Find your
            <span className="block italic font-normal">timber-frame structure.</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#6D716A] leading-relaxed">
            Every building begins with how you will live in it and what the site calls for. Select your parameters below to see real completed projects from our Maine workshop.
          </p>
        </div>

        {/* 3-Question Selection Matrix */}
        <div className="mt-12 bg-[#F4F1E9] border border-[#D9D5CB] p-6 sm:p-8 lg:p-10">
          <div className="space-y-8">
            {/* Question 1: What are you building? */}
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] mb-3">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#14241B] text-[#FAF8F2] text-[0.7rem]">
                  1
                </span>
                <span>What are you building?</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {structureTypes.map((type) => (
                  <FilterChip
                    key={type.label}
                    selected={selectedType === type.value}
                    onClick={() => setSelectedType(type.value)}
                  >
                    {type.label}
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Question 2: How much space? */}
            <div className="pt-6 border-t border-[#D9D5CB]">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] mb-3">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#14241B] text-[#FAF8F2] text-[0.7rem]">
                  2
                </span>
                <span>How much space?</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {sizeRanges.map((size, index) => (
                  <FilterChip
                    key={size.label}
                    selected={selectedSize === index}
                    onClick={() => setSelectedSize(index)}
                    className="w-full"
                  >
                    {size.label}
                  </FilterChip>
                ))}
              </div>
            </div>

            {/* Question 3: What matters most? */}
            <div className="pt-6 border-t border-[#D9D5CB]">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] mb-3">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#14241B] text-[#FAF8F2] text-[0.7rem]">
                  3
                </span>
                <span>What matters most to your design?</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {featurePriorities.map((f) => (
                  <FilterChip
                    key={f.label}
                    selected={selectedFeature === f.label}
                    tone="accent"
                    onClick={() => setSelectedFeature(f.label)}
                  >
                    {f.label}
                  </FilterChip>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matching Real Projects Results */}
        <div className="mt-12">
          <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-[#D9D5CB]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#98704C]">
                Verified Matching Results
              </p>
              <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] mt-1">
                Real Projects Matching Your Criteria
              </h3>
            </div>

            <TextLink href="/projects" className="hidden sm:inline-flex">
              Explore all 25 builds
            </TextLink>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {matchedProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col bg-[#F4F1E9] border border-[#D9D5CB] transition-all duration-300 hover:border-[#14241B]"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="arch-image relative aspect-[4/3] overflow-hidden border-b border-[#D9D5CB]">
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#98704C]">
                    {project.location}
                  </div>

                  <h4 className="font-[var(--font-display)] text-2xl text-[#14241B] mt-1 group-hover:text-[#98704C] transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.name}
                    </Link>
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#6D716A]">
                    <span>{formatDimensions(project.width, project.length)}</span>
                    {project.squareFeet && (
                      <span>• {formatSquareFeet(project.squareFeet)}</span>
                    )}
                    {project.stories && (
                      <span>• {project.stories} {project.stories > 1 ? "stories" : "story"}</span>
                    )}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[#6D716A] line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="mt-auto pt-5">
                    <TextLink href={`/projects/${project.slug}`}>
                      View Case Study
                    </TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#F4F1E9] border border-[#D9D5CB] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-[var(--font-display)] text-xl text-[#14241B]">
                Have a unique vision or custom site footprint?
              </h4>
              <p className="text-xs text-[#6D716A] mt-1">
                We design fully custom frames from 10&apos; to 32&apos; clear spans. No two projects are ever identical.
              </p>
            </div>

            <Button href="/start-a-project" size="md" arrow>
              Consult with Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
