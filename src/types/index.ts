export type ProjectCategory =
  | "homes"
  | "cottages-cabins"
  | "adus"
  | "barns-workshops"
  | "event-spaces"
  | "outdoor";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  location?: string;
  year?: string;
  width: number;
  length: number;
  squareFeet?: number;
  stories?: number;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  heroImage: string;
  gallery: string[];
  floorPlans?: string[];
  elevations?: string[];
  constructionImages?: string[];
  shortDescription: string;
  story: string;
  designResponse?: string;
  timberSpecies?: string;
  enclosureType?: string;
  featured?: boolean;
  videoUrl?: string;
  pressUrl?: string;
  legacyUrl: string;
}

export interface Testimonial {
  quote: string;
  clientName?: string;
  projectName?: string;
  location?: string;
  source?: string;
  sourceUrl?: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Design" | "Construction" | "Site & Foundation" | "Budget" | "Delivery & Raising";
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  image: string;
  readTime: string;
  videoUrl?: string;
}

export interface PressMention {
  publication: string;
  headline: string;
  url: string;
  badge?: string;
  year?: string;
  snippet?: string;
}
