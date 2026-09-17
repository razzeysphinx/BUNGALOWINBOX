export const siteConfig = {
  name: "Bungalow in a Box",
  legalName: "Montsweag Brook Corporation",
  url: "https://bungalowinabox.com",
  ogImage: "https://bungalowinabox.com/images/projects/casco-bay/hero.jpg",
  description:
    "Custom timber-frame homes, cottages, ADUs, barns and small structures designed and prefabricated in Maine using traditional craftsmanship and modern building systems.",
  founder: "Raoul & Vicki Hennin",
  address: {
    streetAddress: "425 Montsweag Road",
    addressLocality: "Woolwich",
    addressRegion: "ME",
    postalCode: "04579",
    addressCountry: "US"
  },
  telephone: "+1-207-522-4590",
  secondaryPhone: "+1-207-443-5691",
  email: "info@bungalowinabox.com",
  socials: {
    instagram: "https://www.instagram.com/bungalowinabox",
    youtube: "https://www.youtube.com/bungalowinabox",
    facebook: "https://www.facebook.com/p/Bungalowinaboxcom-100070158588511/",
    pinterest: "https://www.pinterest.com/bungalowinabox"
  }
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    image: `${siteConfig.url}/images/projects/hero.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.9217,
      longitude: -69.8056
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00"
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
      siteConfig.socials.facebook,
      siteConfig.socials.pinterest
    ]
  };
}
