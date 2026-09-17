import { testimonials } from "@/content/testimonials";
import { Quote } from "lucide-react";
import { TextLink } from "@/components/ui/text-link";

export function ClientStories() {
  const verified = testimonials.filter((t) => t.verified);

  if (verified.length === 0) return null;

  return (
    <section className="section bg-[#FAF8F2]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9D5CB]">
          <div>
            <p className="eyebrow">Verified Client Stories</p>
            <h2 className="heading-xl text-[#14241B]">
              Built around
              <span className="block italic font-normal">real lives.</span>
            </h2>
          </div>

          <TextLink href="/client-stories">
            Read All Client Reflections
          </TextLink>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {verified.slice(0, 3).map((story, index) => (
            <article
              key={`${story.clientName}-${index}`}
              className="bg-[#F4F1E9] border border-[#D9D5CB] p-8 flex flex-col justify-between hover:border-[#14241B] transition-colors"
            >
              <div>
                <Quote size={28} className="text-[#98704C]/40 mb-4" />
                <blockquote className="font-[var(--font-display)] text-xl sm:text-2xl leading-snug text-[#14241B]">
                  “{story.quote}”
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D9D5CB] text-xs leading-relaxed text-[#6D716A]">
                {story.clientName && (
                  <div className="font-bold text-[#14241B] text-sm">
                    {story.clientName}
                  </div>
                )}
                {story.projectName && (
                  <div className="text-[#98704C] font-semibold">
                    {story.projectName}
                  </div>
                )}
                {story.location && <div>{story.location}</div>}

                {story.source && (
                  <div className="mt-3 text-[0.68rem] uppercase tracking-[0.14em] text-[#6D716A]/80 font-mono">
                    Verified: {story.source}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
