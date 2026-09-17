export interface BuildCategory {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  details: string;
}

export const buildCategories: BuildCategory[] = [
  {
    title: "Homes",
    slug: "homes",
    eyebrow: "Primary Residences",
    description:
      "Full-scale residences and island homes designed around natural light, site topography, and the people who will live there.",
    image: "/images/categories/homes.jpg",
    details: "Typically 24' to 32' wide footprints with 1,200–2,400+ sq. ft. of articulated living space."
  },
  {
    title: "Cottages & Cabins",
    slug: "cottages-cabins",
    eyebrow: "Retreats & Getaways",
    description:
      "Compact coastal and woodland sanctuaries featuring cathedral ceilings, open timber lofts, and generous porches.",
    image: "/images/categories/cottages.jpg",
    details: "Typically 14' to 24' wide footprints engineered for fast assembly and four-season thermal performance."
  },
  {
    title: "ADUs & Guest Houses",
    slug: "adus",
    eyebrow: "Accessory Dwellings",
    description:
      "Independent living spaces, backyard studios, and in-law suites designed with full kitchen, bath, and universal accessibility.",
    image: "/images/categories/adus.jpg",
    details: "Ranging from 280 sq. ft. studio layouts up to 800 sq. ft. two-story guest homes."
  },
  {
    title: "Barns & Workshops",
    slug: "barns-workshops",
    eyebrow: "Workspaces & Utility",
    description:
      "Durable, practical timber-frame structures with clear spans, integrated equipment sheds, and authentic New England character.",
    image: "/images/categories/barns.jpg",
    details: "Heavy timber posts and beams built to house heavy tools, creative studios, or multi-bay storage."
  },
  {
    title: "Event Spaces",
    slug: "event-spaces",
    eyebrow: "Gathering & Hospitality",
    description:
      "Expansive open timber frames with cathedral volumes, wrap-around covered porches, and dramatic timber trusses for community.",
    image: "/images/categories/events.jpg",
    details: "Wide 28' to 32' clear-span bents accommodating generous guest circulation and natural ventilation."
  },
  {
    title: "Outdoor Structures",
    slug: "outdoor-structures",
    eyebrow: "Pavilions & Pergolas",
    description:
      "Landscape centerpieces including heavy-timber pergolas with protective metal capping, Asian-inspired pagodas, and traditional gazebos.",
    image: "/images/categories/outdoor.jpg",
    details: "Hand-sawn Maine hemlock treated with heritage oils, built to withstand coastal storms and winter snow loads."
  }
];
