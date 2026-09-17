"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { FAQItem } from "@/types";
import { FilterChip } from "@/components/ui/filter-chip";
import { cn } from "@/lib/utils";

interface FAQDirectoryProps {
  items: FAQItem[];
}

const categories = [
  "All",
  "General",
  "Design",
  "Construction",
  "Site & Foundation",
  "Budget",
  "Delivery & Raising"
];

export function FAQDirectory({ items }: FAQDirectoryProps) {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([items[0]?.id || ""]));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (selectedCat !== "All" && item.category !== selectedCat) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [items, selectedCat, search]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-[#F4F1E9] border border-[#D9D5CB] p-6 space-y-6">
        <div className="relative max-w-lg">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6D716A]"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. foundation, deposit, raising, SIPs)..."
            className="w-full pl-10 pr-10 py-3 bg-white border border-[#D9D5CB] text-sm text-[#14241B] placeholder-[#6D716A]/70 focus:outline-none focus:border-[#14241B]"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D716A] hover:text-[#14241B]"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <FilterChip
              key={cat}
              selected={selectedCat === cat}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-[#D9D5CB] border-t border-b border-[#D9D5CB]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div key={item.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#835A39] focus-visible:ring-offset-2"
                >
                  <div className="space-y-1">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#98704C] block">
                      {item.category}
                    </span>
                    <span className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] group-hover:text-[#98704C] transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    size={22}
                    className={cn(
                      "text-[#98704C] transition-transform duration-300 shrink-0 mt-2",
                      isOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8 text-sm sm:text-base leading-relaxed text-[#6D716A] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-16 text-center text-[#6D716A] space-y-3">
            <p className="font-[var(--font-display)] text-2xl text-[#14241B]">
              No questions matched your search.
            </p>
            <p className="text-sm">
              Please try another keyword or contact us directly at (207) 522-4590.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
