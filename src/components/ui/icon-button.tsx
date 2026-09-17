import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant =
  | "overlay"
  | "light"
  | "dark";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    label: string;
    variant?: Variant;
  };

export function IconButton({
  children,
  label,
  variant = "overlay",
  className = "",
  type = "button",
  ...props
}: Props) {
  const styles = {
    overlay: [
      "bg-white/10",
      "text-white",
      "border-white/15",
      "hover:bg-white/22",
      "hover:border-white/30",
    ].join(" "),

    light: [
      "bg-white",
      "text-[#14241B]",
      "border-[#D9D5CB]",
      "hover:bg-[#F4F1E9]",
    ].join(" "),

    dark: [
      "bg-[#14241B]",
      "text-[#FAF8F2]",
      "border-[#14241B]",
      "hover:bg-[#24352B]",
    ].join(" "),
  };

  return (
    <button
      type={type}
      aria-label={label}
      className={[
        "inline-flex",
        "size-11",
        "shrink-0",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "transition-colors",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#FAF8F2]",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-black",

        styles[variant],
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
