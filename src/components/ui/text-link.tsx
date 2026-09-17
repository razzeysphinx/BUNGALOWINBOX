import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  direction?: "right" | "upRight";
  className?: string;
};

export function TextLink({
  href,
  children,
  external = false,
  direction = "right",
  className = "",
}: Props) {
  const Icon =
    direction === "upRight"
      ? ArrowUpRight
      : ArrowRight;

  const classes = [
    "group",
    "inline-flex",
    "items-center",
    "gap-2",
    "text-xs",
    "font-bold",
    "uppercase",
    "tracking-[0.16em]",
    "text-[#14241B]",
    "transition-colors",
    "hover:text-[#835A39]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[#835A39]",
    "focus-visible:ring-offset-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>

      <Icon
        aria-hidden="true"
        size={14}
        className="
          transition-transform
          duration-250
          group-hover:translate-x-1
        "
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
    >
      {content}
    </Link>
  );
}
