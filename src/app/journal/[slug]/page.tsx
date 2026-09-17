import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/content/journal";
import { TextLink } from "@/components/ui/text-link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | The Unboxing Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="bg-[#FAF8F2] pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-[#D9D5CB] bg-[#F4F1E9] pt-24 md:pt-28 pb-3 text-xs">
        <div className="container flex items-center gap-2 text-[#6D716A]">
          <Link href="/" className="hover:text-[#14241B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/journal" className="hover:text-[#14241B] transition-colors">
            Journal
          </Link>
          <span>/</span>
          <span className="text-[#14241B] font-semibold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-16 md:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[820px]">
          <div className="flex items-center gap-4 text-xs font-mono text-[#98704C] mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>

          <h1 className="heading-xl text-[#14241B] leading-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-[#6D716A] font-[var(--font-display)] italic">
              {article.subtitle}
            </p>
          )}
        </div>

        {/* Hero image */}
        <div className="container max-w-[960px] mt-10">
          <div className="arch-image relative aspect-[16/9] border border-[#D9D5CB]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Article Body */}
      <section className="py-16 border-b border-[#D9D5CB]">
        <div className="container max-w-[720px] space-y-6 text-base sm:text-lg leading-[1.8] text-[#262724]/90">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {article.videoUrl && (
            <div className="pt-8 space-y-3">
              <h3 className="font-[var(--font-display)] text-2xl text-[#14241B]">
                Accompanying Video
              </h3>
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#D9D5CB]">
                <iframe
                  src={article.videoUrl.replace("youtu.be/", "www.youtube.com/embed/")}
                  title={article.title}
                  className="absolute inset-0 size-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Author Bio Box */}
      <section className="py-12 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[720px] flex items-center gap-6">
          <div className="size-16 rounded-full overflow-hidden relative shrink-0 border border-[#D9D5CB]">
            <Image
              src={article.author.includes("Vicki") ? "/images/team/vicki.jpg" : "/images/team/raoul.jpg"}
              alt={article.author}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-[var(--font-display)] text-xl text-[#14241B]">
              Written by {article.author}
            </h4>
            <p className="text-xs text-[#6D716A] leading-relaxed">
              Sharing craft reflections from Montsweag Brook Corporation & Bungalow in a Box in Woolwich, Maine.
            </p>
          </div>
        </div>
      </section>

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16">
          <div className="container max-w-[960px]">
            <p className="eyebrow">Continue Reading</p>
            <h2 className="font-[var(--font-display)] text-3xl text-[#14241B] mb-8">
              More from The Unboxing Journal
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherArticles.map((other) => (
                <div
                  key={other.slug}
                  className="bg-white border border-[#D9D5CB] p-6 flex flex-col justify-between group hover:border-[#14241B] transition-colors"
                >
                  <div>
                    <div className="text-xs font-mono text-[#98704C] mb-2">
                      {other.date}
                    </div>
                    <h3 className="font-[var(--font-display)] text-xl text-[#14241B] group-hover:text-[#98704C] transition-colors">
                      <Link href={`/journal/${other.slug}`}>{other.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs text-[#6D716A] line-clamp-2 leading-relaxed">
                      {other.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F4F1E9]">
                    <TextLink href={`/journal/${other.slug}`}>
                      Read Story
                    </TextLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
