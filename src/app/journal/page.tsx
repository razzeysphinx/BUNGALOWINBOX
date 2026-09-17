import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { articles } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal & The Unboxing Blog | Bungalow in a Box",
  description:
    "Reflections on timber framing, wood finishing, SIP energy performance, loon carving, and four decades of building in Maine by Raoul and Vicki Hennin.",
};

export default function JournalPage() {
  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">The Unboxing Journal</p>
          <h1 className="display-lg text-[#14241B]">
            Lessons from the
            <span className="block italic font-normal text-[#98704C]">
              timber workshop.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            A place where we periodically share practical lessons learned about building, physics, wood joinery, design, and life along Montsweag Brook.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[1140px]">
          <div className="grid gap-10 sm:grid-cols-2">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-white border border-[#D9D5CB] flex flex-col justify-between hover:border-[#14241B] transition-colors group shadow-sm"
              >
                <div>
                  <Link href={`/journal/${art.slug}`} className="block">
                    <div className="arch-image relative aspect-[16/10] overflow-hidden border-b border-[#D9D5CB]">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs font-mono text-[#6D716A] mb-3">
                      <span className="text-[#98704C] font-semibold">{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] group-hover:text-[#98704C] transition-colors leading-snug">
                      <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="mt-4 text-sm text-[#6D716A] leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-transparent flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#14241B]">By {art.author}</span>
                  <Link
                    href={`/journal/${art.slug}`}
                    className="font-bold uppercase tracking-wider text-[#98704C] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Video Feature */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <p className="eyebrow">Workshop Videos</p>
            <h2 className="heading-xl text-[#14241B]">
              Watch Craft in Motion.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6D716A]">
              From hand-carving decorative loon figures on timber king-posts to assembling modular take-apart chalets.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white border border-[#D9D5CB] p-4 space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/xeiif2hTWuQ"
                  title="Carving a Loon in Wood"
                  className="absolute inset-0 size-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[#14241B]">
                Hand-Carving a Loon
              </h3>
              <p className="text-xs text-[#6D716A]">
                Traditional Maine timber detail carved in our Woolwich shop.
              </p>
            </div>

            <div className="bg-white border border-[#D9D5CB] p-4 space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/FqT2Gnk2-4o"
                  title="A Timber Frame for Santa"
                  className="absolute inset-0 size-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[#14241B]">
                A Timber Frame for Santa
              </h3>
              <p className="text-xs text-[#6D716A]">
                Designing a demountable annual holiday chalet in Las Vegas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
