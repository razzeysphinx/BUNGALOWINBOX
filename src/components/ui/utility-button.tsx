import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant =
  | "default"
  | "strong";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: Variant;
  };

export function UtilityButton({
  children,
  variant = "default",
  className = "",
  type = "button",
  ...props
}: Props) {
  const style =
    variant === "strong"
      ? [
          "bg-[#14241B]",
          "text-[#FAF8F2]",
          "border-[#14241B]",
          "hover:bg-[#24352B]",
          "hover:border-[#24352B]",
        ].join(" ")
      : [
          "bg-white",
          "text-[#14241B]",
          "border-[#D9D5CB]",
          "hover:bg-[#F4F1E9]",
          "hover:border-[#14241B]",
        ].join(" ");

  return (
    <button
      type={type}
      className={[
        "inline-flex",
        "min-h-10",
        "items-center",
        "justify-center",
        "border",
        "px-4",
        "py-2",
        "rounded-[4px]",
        "text-xs",
        "font-semibold",
        "transition-colors",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#835A39]",
        "focus-visible:ring-offset-2",

        "disabled:pointer-events-none",
        "disabled:opacity-35",

        style,
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
