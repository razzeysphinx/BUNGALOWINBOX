"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { FilterChip } from "@/components/ui/filter-chip";

interface ProjectArchiveProps {
  initialProjects: Project[];
}

const categories: { label: string; value: string }[] = [
  { label: "All Projects", value: "all" },
  { label: "Homes & Barn Houses", value: "homes" },
  { label: "Cottages & Cabins", value: "cottages-cabins" },
  { label: "ADUs & Studios", value: "adus" },
  { label: "Barns & Workshops", value: "barns-workshops" },
  { label: "Event Spaces", value: "event-spaces" },
  { label: "Outdoor Structures", value: "outdoor" },
];

const widthRanges: { label: string; value: string }[] = [
  { label: "All Widths", value: "all" },
  { label: "10' – 14' (Compact)", value: "compact" },
  { label: "16' – 20' (Mid-Size)", value: "mid" },
  { label: "22' – 24' (Generous)", value: "generous" },
  { label: "28' – 32' (Large Clear Span)", value: "large" },
];

export function ProjectArchive({ initialProjects }: ProjectArchiveProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedWidth, setSelectedWidth] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }

      // Width match
      if (selectedWidth === "compact" && (project.width < 10 || project.width > 14)) {
        return false;
      }
      if (selectedWidth === "mid" && (project.width < 16 || project.width > 20)) {
        return false;
      }
      if (selectedWidth === "generous" && (project.width < 22 || project.width > 24)) {
        return false;
      }
      if (selectedWidth === "large" && project.width < 28) {
        return false;
      }

      // Text search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = project.name.toLowerCase().includes(q);
        const matchDesc = project.shortDescription.toLowerCase().includes(q);
        const matchLoc = project.location?.toLowerCase().includes(q);
        const matchFeat = project.features.some((f) => f.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchLoc && !matchFeat) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, selectedCategory, selectedWidth, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedWidth("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="bg-[#F4F1E9] border border-[#D9D5CB] p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6D716A]"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, town, or feature..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D9D5CB] text-sm text-[#14241B] placeholder-[#6D716A]/70 focus:outline-none focus:border-[#14241B]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D716A] hover:text-[#14241B]"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Mobile Filter Trigger */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#D9D5CB] text-xs font-bold uppercase tracking-wider text-[#14241B] rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#835A39] focus-visible:ring-offset-2"
            >
              <SlidersHorizontal size={14} />
              <span>Filter Options</span>
            </button>

            <span className="text-xs font-mono text-[#6D716A]">
              Showing <strong className="text-[#14241B]">{filteredProjects.length}</strong> of {initialProjects.length} builds
            </span>
          </div>
        </div>

        {/* Desktop Category Pills */}
        <div className="hidden md:flex flex-wrap gap-2 pt-6 border-t border-[#D9D5CB] mt-6">
          {categories.map((cat) => (
            <FilterChip
              key={cat.value}
              selected={selectedCategory === cat.value}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </FilterChip>
          ))}
        </div>

        {/* Desktop Width Filter Strip */}
        <div className="hidden md:flex items-center gap-3 pt-4 text-xs">
          <span className="font-mono text-[#6D716A] uppercase tracking-wider text-[0.68rem]">
            Width Filter:
          </span>
          <div className="flex gap-2">
            {widthRanges.map((w) => (
              <FilterChip
                key={w.value}
                selected={selectedWidth === w.value}
                tone="accent"
                onClick={() => setSelectedWidth(w.value)}
              >
                {w.label}
              </FilterChip>
            ))}
          </div>

          {(selectedCategory !== "all" || selectedWidth !== "all" || searchQuery) && (
            <Button
              type="button"
              variant="text"
              size="sm"
              onClick={resetFilters}
              className="ml-auto"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden pt-6 border-t border-[#D9D5CB] mt-4 space-y-4">
            <div>
              <span className="eyebrow text-xs block mb-2">Building Type</span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <FilterChip
                    key={cat.value}
                    selected={selectedCategory === cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {cat.label}
                  </FilterChip>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow text-xs block mb-2">Width Dimension</span>
              <div className="flex flex-wrap gap-1.5">
                {widthRanges.map((w) => (
                  <FilterChip
                    key={w.value}
                    selected={selectedWidth === w.value}
                    tone="accent"
                    onClick={() => setSelectedWidth(w.value)}
                  >
                    {w.label}
                  </FilterChip>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs">
              <Button
                type="button"
                variant="text"
                size="sm"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => setMobileFilterOpen(false)}
              >
                Apply & Close
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#F4F1E9] border border-[#D9D5CB] p-8 space-y-4">
          <p className="font-[var(--font-display)] text-3xl text-[#14241B]">
            No structures matched your criteria.
          </p>
          <p className="text-sm text-[#6D716A] max-w-md mx-auto">
            Try resetting your category or width filters, or search for another term like &quot;cottage&quot;, &quot;barn&quot;, or &quot;Maine&quot;.
          </p>
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
