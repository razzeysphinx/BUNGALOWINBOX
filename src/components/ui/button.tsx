import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { ArrowUpRight } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "inverse"
  | "inverseOutline"
  | "accent"
  | "text";

export type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
};

type LinkButtonProps =
  CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  > & {
    href: string;
  };

type ActionButtonProps =
  CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps =
  | LinkButtonProps
  | ActionButtonProps;

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
  "transition-colors",
  "duration-250",
  "ease-out",

  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-[#835A39]",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-[#FAF8F2]",

  "disabled:pointer-events-none",
  "disabled:cursor-not-allowed",
  "disabled:opacity-45",
].join(" ");

const variants:
  Record<ButtonVariant, string> = {

  primary: [
    "bg-[#14241B]",
    "text-[#FAF8F2]",
    "border",
    "border-[#14241B]",

    "hover:bg-[#24352B]",
    "hover:border-[#24352B]",

    "active:bg-[#0F1A14]",
  ].join(" "),

  secondary: [
    "bg-transparent",
    "text-[#14241B]",
    "border",
    "border-[#14241B]/30",

    "hover:bg-[#14241B]",
    "hover:text-[#FAF8F2]",
    "hover:border-[#14241B]",

    "active:bg-[#0F1A14]",
    "active:text-[#FAF8F2]",
  ].join(" "),

  inverse: [
    "bg-[#FAF8F2]",
    "text-[#14241B]",
    "border",
    "border-[#FAF8F2]",

    "hover:bg-white",
    "hover:border-white",

    "active:bg-[#F4F1E9]",
  ].join(" "),

  inverseOutline: [
    "bg-transparent",
    "text-[#FAF8F2]",
    "border",
    "border-white/45",

    "hover:bg-[#FAF8F2]",
    "hover:text-[#14241B]",
    "hover:border-[#FAF8F2]",

    "active:bg-white",
    "active:text-[#14241B]",
  ].join(" "),

  accent: [
    "bg-[#835A39]",
    "text-[#FAF8F2]",
    "border",
    "border-[#835A39]",

    "hover:bg-[#704A2F]",
    "hover:border-[#704A2F]",

    "active:bg-[#603E28]",
  ].join(" "),

  text: [
    "bg-transparent",
    "text-[#14241B]",
    "border-0",
    "px-0",

    "justify-start",

    "hover:text-[#835A39]",
  ].join(" "),
};

const sizes:
  Record<ButtonSize, string> = {

  sm:
    "min-h-11 px-4 text-[0.82rem]",

  md:
    "min-h-12 px-6 text-sm",

  lg:
    "min-h-14 px-7 text-[0.95rem]",
};

export function Button(
  props: ButtonProps,
) {
  const {
    children,
    variant = "primary",
    size = "md",
    arrow = false,
    className = "",
  } = props;

  const classes = [
    base,
    variants[variant],
    sizes[size],

    variant === "text"
      ? ""
      : "rounded-[4px]",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>
        {children}
      </span>

      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          size={17}
          strokeWidth={1.8}
          className={[
            "shrink-0",
            "transition-transform",
            "duration-250",
            "group-hover:translate-x-0.5",
            "group-hover:-translate-y-0.5",
          ].join(" ")}
        />
      )}
    </>
  );

  if (
    "href" in props &&
    typeof props.href === "string"
  ) {
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
      href.startsWith("http://") ||
      href.startsWith("https://");

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
      <Link
        href={href}
        className={classes}
        {...linkProps}
      >
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
  } =
    props as ActionButtonProps;

  void _children;
  void _variant;
  void _size;
  void _arrow;
  void _className;

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
