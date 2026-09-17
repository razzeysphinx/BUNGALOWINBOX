import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Tone =
  | "primary"
  | "accent";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    selected?: boolean;
    tone?: Tone;
    children: ReactNode;
  };

export function FilterChip({
  selected = false,
  tone = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: Props) {
  const selectedStyle =
    tone === "accent"
      ? [
          "bg-[#835A39]",
          "border-[#835A39]",
          "text-[#FAF8F2]",
          "hover:bg-[#704A2F]",
          "hover:border-[#704A2F]",
        ].join(" ")
      : [
          "bg-[#14241B]",
          "border-[#14241B]",
          "text-[#FAF8F2]",
          "hover:bg-[#24352B]",
          "hover:border-[#24352B]",
        ].join(" ");

  const defaultStyle = [
    "bg-white",
    "text-[#262724]",
    "border-[#D9D5CB]",
    "hover:border-[#14241B]",
    "hover:text-[#14241B]",
  ].join(" ");

  return (
    <button
      type={type}
      aria-pressed={selected}
      className={[
        "inline-flex",
        "min-h-10",
        "items-center",
        "justify-center",
        "border",
        "px-4",
        "py-2",
        "text-xs",
        "font-semibold",
        "tracking-[0.04em]",
        "rounded-[4px]",
        "transition-colors",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#835A39]",
        "focus-visible:ring-offset-2",
        selected
          ? selectedStyle
          : defaultStyle,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
