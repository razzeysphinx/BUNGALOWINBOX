import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { ArrowUpRight } from "lucide-react";

export type Variant =
  | "primary"
  | "secondary"
  | "light"
  | "ghost"
  | "text"
  | "dark"
  | "outline"
  | "timber";

export type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ActionButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | ActionButtonProps;

const base = [
  "group",
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-2.5",
  "font-semibold",
  "tracking-[-0.01em]",
  "whitespace-nowrap",
  "select-none",
  "transition-all",
  "duration-300",
  "ease-out",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-[#98704C]",
  "focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
  "disabled:opacity-45",
].join(" ");

const variants: Record<string, string> = {
  primary: [
    "bg-[#14241B]",
    "text-[#FAF8F2]",
    "border",
    "border-[#14241B]",
    "hover:bg-[#24352B]",
    "hover:border-[#24352B]",
    "active:translate-y-px",
  ].join(" "),

  secondary: [
    "bg-transparent",
    "text-[#14241B]",
    "border",
    "border-[#14241B]/25",
    "hover:border-[#14241B]",
    "hover:bg-[#14241B]",
    "hover:text-[#FAF8F2]",
  ].join(" "),

  light: [
    "bg-[#FAF8F2]",
    "text-[#14241B]",
    "border",
    "border-[#FAF8F2]",
    "hover:bg-white",
    "hover:border-white",
    "active:translate-y-px",
  ].join(" "),

  ghost: [
    "bg-transparent",
    "text-current",
    "border",
    "border-current/30",
    "hover:border-current",
    "hover:bg-white/10",
  ].join(" "),

  text: [
    "bg-transparent",
    "text-current",
    "border-0",
    "px-0",
    "justify-start",
    "hover:opacity-70",
  ].join(" "),

  // Backwards compatibility aliases
  dark: [
    "bg-[#14241B]",
    "text-[#FAF8F2]",
    "border",
    "border-[#14241B]",
    "hover:bg-[#24352B]",
    "hover:border-[#24352B]",
    "active:translate-y-px",
  ].join(" "),

  outline: [
    "bg-transparent",
    "text-current",
    "border",
    "border-current/30",
    "hover:border-current",
    "hover:bg-white/10",
  ].join(" "),

  timber: [
    "bg-[#98704C]",
    "text-[#FAF8F2]",
    "border",
    "border-[#98704C]",
    "hover:bg-[#B18A63]",
    "hover:border-[#B18A63]",
    "active:translate-y-px",
  ].join(" "),
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-4 text-[0.82rem]",
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-14 px-7 text-[0.95rem]",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    arrow = false,
    className = "",
  } = props;

  const normalizedVariant = variants[variant] ? variant : "primary";

  const classes = [
    base,
    variants[normalizedVariant],
    sizes[size],
    normalizedVariant === "text" ? "" : "rounded-[4px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>

      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          size={17}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children: _children,
      variant: _variant,
      size: _size,
      arrow: _arrow,
      className: _className,
      ...linkProps
    } = props as LinkButtonProps;
    void _children;
    void _variant;
    void _size;
    void _arrow;
    void _className;

    const external =
      href.startsWith("http://") || href.startsWith("https://");

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    arrow: _arrow,
    className: _className,
    type = "button",
    ...buttonProps
  } = props as ActionButtonProps;
  void _children;
  void _variant;
  void _size;
  void _arrow;
  void _className;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
