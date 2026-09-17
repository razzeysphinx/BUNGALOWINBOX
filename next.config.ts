import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Core pages
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/portfolio.html", destination: "/projects", permanent: true },
      { source: "/projects.html", destination: "/projects", permanent: true },
      { source: "/design.html", destination: "/process", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/start-a-project", permanent: true },
      { source: "/pricing.html", destination: "/pricing", permanent: true },
      { source: "/news.html", destination: "/about#press", permanent: true },
      { source: "/unboxing.html", destination: "/journal", permanent: true },

      // Legacy project pages
      { source: "/cascobay.html", destination: "/projects/casco-bay-barn-house", permanent: true },
      { source: "/cumberland.html", destination: "/projects/cumberland-event-barn", permanent: true },
      { source: "/middlebury.html", destination: "/projects/middlebury-cottage", permanent: true },
      { source: "/lily.html", destination: "/projects/lily-house", permanent: true },
      { source: "/montsweag.html", destination: "/projects/montsweag-house", permanent: true },
      { source: "/newenglandbarn.html", destination: "/projects/teachers-barn", permanent: true },
      { source: "/island.html", destination: "/projects/island-cottage", permanent: true },
      { source: "/joy.html", destination: "/projects/ode-to-joy-addition", permanent: true },
      { source: "/lakehouse.html", destination: "/projects/lake-house", permanent: true },
      { source: "/phippsburg.html", destination: "/projects/phippsburg-cottage", permanent: true },
      { source: "/cottage.html", destination: "/projects/cottage-cape", permanent: true },
      { source: "/madison.html", destination: "/projects/madison", permanent: true },
      { source: "/pocono.html", destination: "/projects/pocono", permanent: true },
      { source: "/waterford.html", destination: "/projects/waterford", permanent: true },
      { source: "/gotham.html", destination: "/projects/gotham", permanent: true },
      { source: "/writerscabin.html", destination: "/projects/writers-cabin", permanent: true },
      { source: "/pergola.html", destination: "/projects/timber-frame-pergola", permanent: true },
      { source: "/pagoda.html", destination: "/projects/pagoda", permanent: true },
      { source: "/gazebo.html", destination: "/projects/gazebo", permanent: true },
      { source: "/santachalet.html", destination: "/projects/santa-chalet", permanent: true },
      { source: "/dresden.html", destination: "/projects/dresden-great-room", permanent: true },
      { source: "/guest.html", destination: "/projects/midcoast-guest-addition", permanent: true },
      { source: "/entry.html", destination: "/projects/bath-preschool-entry", permanent: true },
      { source: "/sturbridge.html", destination: "/projects/sturbridge-barn-house", permanent: true },
      { source: "/brigadoon.html", destination: "/projects/madison", permanent: true },

      // High-intent SEO alias redirects
      { source: "/timber-frame-homes", destination: "/projects?category=homes", permanent: true },
      { source: "/timber-frame-cabins", destination: "/projects?category=cottages-cabins", permanent: true },
      { source: "/timber-frame-adus", destination: "/projects?category=adus", permanent: true },
      { source: "/timber-frame-barns", destination: "/projects?category=barns-workshops", permanent: true },
      { source: "/timber-frame-homes-maine", destination: "/projects?category=homes", permanent: true },
      { source: "/prefab-homes-maine", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
