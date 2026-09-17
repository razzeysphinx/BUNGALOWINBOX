import type { Metadata } from "next";
import { Quote, ShieldCheck } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Client Stories & Verified Reviews | Bungalow in a Box",
  description:
    "Read genuine, verified client reflections, homeowner experiences, and published magazine accounts of building with Bungalow in a Box in Maine.",
};

export default function ClientStoriesPage() {
  const verified = testimonials.filter((t) => t.verified);

  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">Homeowner Experiences</p>
          <h1 className="display-lg text-[#14241B]">
            Built around
            <span className="block italic font-normal text-[#98704C]">
              real lives.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            At Bungalow in a Box, we never fabricate reviews, star ratings, or testimonials. Every story below is documented from verified client correspondence, school building committees, and published architectural features.
          </p>
        </div>
      </section>

      {/* Stories Archive */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[1040px] space-y-12">
          {verified.map((story, idx) => {
            // Find matched project if possible
            const matchedProject = projects.find(
              (p) => p.name.toLowerCase() === story.projectName?.toLowerCase() || story.projectName?.toLowerCase().includes(p.name.toLowerCase())
            );

            return (
              <article
                key={`${story.clientName}-${idx}`}
                className="bg-white border border-[#D9D5CB] p-8 sm:p-12 hover:border-[#14241B] transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D9D5CB]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#98704C] uppercase tracking-wider">
                    <ShieldCheck size={16} />
                    <span>Verified Project Record</span>
                  </div>
                  {story.source && (
                    <span className="text-xs text-[#6D716A] font-mono">
                      Source: {story.source}
                    </span>
                  )}
                </div>

                <div className="py-8">
                  <Quote size={36} className="text-[#98704C]/35 mb-4" />
                  <blockquote className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] leading-snug">
                    “{story.quote}”
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-[#F4F1E9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                  <div>
                    {story.clientName && (
                      <span className="font-bold text-[#14241B] block">
                        {story.clientName}
                      </span>
                    )}
                    <span className="text-[#6D716A]">
                      {story.projectName} {story.location ? `• ${story.location}` : ""}
                    </span>
                  </div>

                  {matchedProject && (
                    <TextLink href={`/projects/${matchedProject.slug}`}>
                      View Case Study ({matchedProject.name})
                    </TextLink>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow">Your Story Next</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Ready to write your own build story?
          </h2>
          <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
            Begin with a free introductory conversation with Raoul and Vicki.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/start-a-project" variant="primary" size="lg" arrow>
              Start Your Project Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
