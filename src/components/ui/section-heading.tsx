import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  description,
  theme = "light",
  align = "left",
  className = ""
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto max-w-[780px]" : "max-w-[780px]",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            isDark ? "text-[#B18A63]" : "text-[#98704C]"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "heading-xl",
          isDark ? "text-[#FAF8F2]" : "text-[#14241B]"
        )}
      >
        {title}
        {italicWord && (
          <span className="block italic font-normal">{italicWord}</span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 body-large leading-relaxed",
            isDark ? "text-white/75" : "text-[#6D716A]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
