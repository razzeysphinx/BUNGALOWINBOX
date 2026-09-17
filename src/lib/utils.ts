export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDimensions(width?: number, length?: number): string {
  if (!width && !length) return "";
  if (width && !length) return `${width}' Wide`;
  return `${width}' × ${length}'`;
}

export function formatSquareFeet(sqft?: number): string {
  if (!sqft) return "";
  return `${sqft.toLocaleString()} sq. ft.`;
}
