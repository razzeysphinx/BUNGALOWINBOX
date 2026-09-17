import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildCategories } from "@/content/build-categories";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return buildCategories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = buildCategories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Structure Not Found",
    };
  }

  return {
    title: `Timber-Frame ${category.title} | Bungalow in a Box`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = buildCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Find all projects that match this category
  const matchingProjects = projects.filter((p) => {
    if (p.category === slug) return true;
    if (slug === "outdoor-structures" && p.category === "outdoor") return true;
    return false;
  });

  return (
    <div className="bg-[#FAF8F2] pt-28 pb-24 md:pt-36">
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-6 text-xs text-[#6D716A] flex items-center gap-2">
          <Link href="/" className="hover:text-[#14241B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-[#14241B] transition-colors">
            Explore
          </Link>
          <span>/</span>
          <span className="text-[#14241B] font-semibold">{category.title}</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid gap-10 lg:grid-cols-12 items-center pb-16 border-b border-[#D9D5CB]">
          <div className="lg:col-span-6 space-y-6">
            <p className="eyebrow">{category.eyebrow}</p>
            <h1 className="display-lg text-[#14241B]">
              Timber-Frame
              <span className="block italic font-normal text-[#98704C]">
                {category.title}.
              </span>
            </h1>
            <p className="body-large text-[#6D716A]">
              {category.description}
            </p>
            <div className="p-4 bg-[#F4F1E9] border border-[#D9D5CB] text-xs font-mono text-[#262724]">
              <span className="font-semibold block text-[#98704C] uppercase mb-1">
                Typical Footprints & Engineering:
              </span>
              {category.details}
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/start-a-project" variant="primary" size="md" arrow>
                Start a {category.title} Inquiry
              </Button>
              <Button href="/projects" variant="secondary" size="md">
                Browse All 25 Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="arch-image relative aspect-[16/10] overflow-hidden border border-[#D9D5CB]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Completed Real Projects in this Category */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#D9D5CB]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98704C]">
                Completed Builds
              </p>
              <h2 className="heading-xl text-[#14241B] mt-2">
                Real {category.title} Built in Maine
              </h2>
            </div>
            <div className="text-xs font-mono text-[#6D716A]">
              Showing {matchingProjects.length} verified {matchingProjects.length === 1 ? "structure" : "structures"}
            </div>
          </div>

          {matchingProjects.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {matchingProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-10 p-12 text-center bg-[#F4F1E9] border border-[#D9D5CB]">
              <p className="text-[#6D716A] text-base">
                We design custom {category.title} around individual sites. Explore our full portfolio or contact us to see past construction archives for this typology.
              </p>
              <div className="mt-6">
                <Button href="/projects" variant="secondary" size="md">
                  View Full Project Archive
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Next Step / Consultation */}
        <div className="mt-20 p-8 sm:p-12 bg-[#F4F1E9] border border-[#D9D5CB] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[620px]">
            <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B]">
              Ready to shape your {category.title.toLowerCase()} around your land?
            </h3>
            <p className="mt-3 text-sm text-[#6D716A] leading-relaxed">
              We collaborate on initial sketches, calculate structural timber spans, and build precision models before fabrication begins in Maine.
            </p>
          </div>
          <Button href="/start-a-project" variant="primary" size="lg" arrow>
            Request a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
