import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className = "",
  size = "default"
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1360px]",
    narrow: "max-w-[980px]",
    wide: "max-w-[1540px]"
  };

  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 md:px-8 mx-auto",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
