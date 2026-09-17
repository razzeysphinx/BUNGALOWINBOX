import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { ProjectGalleryModal } from "@/components/projects/project-gallery-modal";
import { formatDimensions, formatSquareFeet } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Timber Frame in ${project.location || "Maine"}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | Bungalow in a Box`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 800,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || Math.abs(p.width - project.width) <= 4))
    .slice(0, 3);

  // Combine gallery and construction images for modal
  const allImages = [
    { src: project.heroImage, title: "Completed Exterior", caption: `${project.name} - Finished structure` },
    ...project.gallery
      .filter((img) => img !== project.heroImage)
      .map((img, i) => ({ src: img, title: `Interior / Exterior ${i + 1}`, caption: `${project.name} view` })),
    ...(project.constructionImages || []).map((img, i) => ({
      src: img,
      title: `Construction ${i + 1}`,
      caption: `On-site raising / fabrication for ${project.name}`,
    })),
  ];

  return (
    <article className="bg-[#FAF8F2] pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-[#D9D5CB] bg-[#F4F1E9] pt-24 md:pt-28 pb-3 text-xs">
        <div className="container flex items-center gap-2 text-[#6D716A]">
          <Link href="/" className="hover:text-[#14241B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#14241B] transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#14241B] font-semibold">{project.name}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 lg:py-16 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="max-w-[920px]">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#98704C] mb-4">
              <span>{project.categoryLabel}</span>
              {project.location && (
                <>
                  <span>•</span>
                  <span>{project.location}</span>
                </>
              )}
            </div>

            <h1 className="heading-xl text-[#14241B] leading-tight">
              {project.name}
            </h1>

            <p className="mt-6 body-large text-[#6D716A]">
              {project.shortDescription}
            </p>
          </div>

          {/* Large Hero Architectural View */}
          <div className="arch-image relative aspect-[16/9] mt-10 border border-[#D9D5CB]">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specifications & Fast Facts Bar */}
      <section className="border-b border-[#D9D5CB] bg-[#F4F1E9] py-8">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 font-mono text-xs">
            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Dimensions</span>
              <span className="text-sm font-bold text-[#14241B]">
                {formatDimensions(project.width, project.length)}
              </span>
            </div>

            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Floor Area</span>
              <span className="text-sm font-bold text-[#14241B]">
                {project.squareFeet ? formatSquareFeet(project.squareFeet) : `${project.width}' Gable`}
              </span>
            </div>

            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Stories</span>
              <span className="text-sm font-bold text-[#14241B]">
                {project.stories ? `${project.stories} Story` : "1.5 Story"}
              </span>
            </div>

            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Timber Frame</span>
              <span className="text-sm font-bold text-[#14241B] truncate block">
                {project.timberSpecies ? project.timberSpecies.split("(")[0] : "Maine Hemlock"}
              </span>
            </div>

            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Building Envelope</span>
              <span className="text-sm font-bold text-[#14241B] truncate block">
                {project.enclosureType ? "SIPs + Metal" : "Super-Insulated SIPs"}
              </span>
            </div>

            <div>
              <span className="text-[#6D716A] uppercase block text-[0.65rem] mb-1">Fabricated</span>
              <span className="text-sm font-bold text-[#14241B]">Woolwich, ME</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Features Grid */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div>
                <p className="eyebrow">Project Story & Craft</p>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
                  Design Intent & Craftsmanship
                </h2>
                <div className="mt-6 text-base sm:text-lg leading-relaxed text-[#262724]/85 space-y-4">
                  <p>{project.story}</p>
                </div>
              </div>

              {project.designResponse && (
                <div className="p-8 bg-[#F4F1E9] border-l-4 border-[#98704C] space-y-3">
                  <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                    The Engineering Response
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#6D716A]">
                    {project.designResponse}
                  </p>
                </div>
              )}

              {/* Video if present */}
              {project.videoUrl && (
                <div className="pt-6">
                  <h3 className="font-[var(--font-display)] text-2xl text-[#14241B] mb-4">
                    Raising & Project Tour Video
                  </h3>
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#D9D5CB]">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.name} Video`}
                      className="absolute inset-0 size-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specifications & Features */}
            <div className="lg:col-span-4 bg-[#F4F1E9] border border-[#D9D5CB] p-6 sm:p-8 space-y-6">
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                Key Highlights
              </h3>

              <ul className="space-y-3">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#262724]">
                    <CheckCircle2 size={16} className="text-[#98704C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {project.pressUrl && (
                <div className="pt-4 border-t border-[#D9D5CB]">
                  <span className="eyebrow text-xs block mb-2">Featured In Press</span>
                  <TextLink
                    href={project.pressUrl}
                    external
                    direction="upRight"
                  >
                    Read Magazine Article
                  </TextLink>
                </div>
              )}

              <div className="pt-6 border-t border-[#D9D5CB]">
                <Button
                  href={`/start-a-project?footprint=${project.width}x${project.length}&type=${project.category}`}
                  variant="primary"
                  size="md"
                  arrow
                  className="w-full text-center"
                >
                  Inquire About This Model
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Drawings & Floor Plans */}
      {project.floorPlans && project.floorPlans.length > 0 && (
        <section className="py-16 border-b border-[#D9D5CB] bg-[#F4F1E9]">
          <div className="container">
            <div className="max-w-[700px] mb-8">
              <p className="eyebrow">Architectural Documents</p>
              <h2 className="heading-xl text-[#14241B]">
                Floor Plans & Elevations
              </h2>
              <p className="mt-3 text-sm text-[#6D716A]">
                Click any drawing to view in high resolution.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.floorPlans.map((fp, i) => (
                <div
                  key={fp + i}
                  className="bg-white border border-[#D9D5CB] p-4 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={fp}
                      alt={`${project.name} Floor Plan`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D9D5CB] text-xs font-mono text-[#6D716A] text-center">
                    Dimensioned Floor Plan ({formatDimensions(project.width, project.length)})
                  </div>
                </div>
              ))}

              {project.elevations &&
                project.elevations.map((elev, i) => (
                  <div
                    key={elev + i}
                    className="bg-white border border-[#D9D5CB] p-4 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={elev}
                        alt={`${project.name} Elevation / 3D Render`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#D9D5CB] text-xs font-mono text-[#6D716A] text-center">
                      Scale Elevation & 3D Spatial Rendering
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Complete Project Photo Gallery & Lightbox */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow">Visual Archive</p>
              <h2 className="heading-xl text-[#14241B]">
                Completed & Construction Gallery
              </h2>
            </div>
            <p className="text-xs font-mono text-[#6D716A]">
              Showing {allImages.length} authentic photos
            </p>
          </div>

          <ProjectGalleryModal images={allImages} title={project.name} />
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
          <div className="container">
            <p className="eyebrow">Explore Similar Frames</p>
            <h2 className="heading-xl text-[#14241B] mb-10">
              Related Projects
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((rel) => (
                <article
                  key={rel.slug}
                  className="bg-white border border-[#D9D5CB] p-4 flex flex-col justify-between group hover:border-[#14241B] transition-colors"
                >
                  <Link href={`/projects/${rel.slug}`} className="block">
                    <div className="arch-image relative aspect-[4/3] overflow-hidden border border-[#D9D5CB]">
                      <Image
                        src={rel.heroImage}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[#98704C]">
                        {rel.categoryLabel} • {formatDimensions(rel.width, rel.length)}
                      </div>
                      <h3 className="font-[var(--font-display)] text-xl text-[#14241B] mt-1 group-hover:text-[#98704C] transition-colors">
                        <Link href={`/projects/${rel.slug}`}>{rel.name}</Link>
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#D9D5CB] flex justify-between items-center text-xs">
                      <span className="text-[#6D716A]">{rel.location}</span>
                      <span className="font-bold text-[#14241B] group-hover:text-[#98704C] transition-colors">
                        View →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Project Inquiry CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow text-xs">Custom Fabrication</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Interested in building a {formatDimensions(project.width, project.length)} timber frame?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6D716A] leading-relaxed">
            Contact Raoul and Vicki Hennin for a free introductory consultation to review your property, timelines, and tailored price estimates.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href={`/start-a-project?footprint=${project.width}x${project.length}&type=${project.category}`}
              variant="primary"
              size="lg"
              arrow
            >
              Start Your Project Inquiry
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              Back to Project Archive
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
