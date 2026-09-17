import Link from "next/link";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "timber";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "dark",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-[48px] items-center justify-center px-7 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14241B]";

  const variants = {
    dark: "bg-[#14241B] text-[#FAF8F2] hover:bg-[#24352B] focus-visible:outline-[#98704C]",
    light: "bg-[#FAF8F2] text-[#14241B] hover:bg-white hover:text-black focus-visible:outline-white",
    outline: "border border-current bg-transparent hover:bg-white/10",
    timber: "bg-[#98704C] text-[#FAF8F2] hover:bg-[#B18A63] focus-visible:outline-[#14241B]"
  };

  const combinedClass = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass} {...props}>
      {children}
    </button>
  );
}
