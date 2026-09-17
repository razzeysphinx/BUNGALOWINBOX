import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { FAQDirectory } from "@/components/faq/faq-directory";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Timber Frame Construction",
  description:
    "Get answers about Bungalow in a Box timber-frame homes, SIP panel construction, foundation requirements, design deposits, delivery, and crane raising in Maine.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-[#FAF8F2] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">Knowledge Base & FAQ</p>
          <h1 className="display-lg text-[#14241B]">
            Frequently Asked
            <span className="block italic font-normal text-[#98704C]">
              Questions.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            Direct answers on timber species, SIP thermal envelopes, delivery logistics, crane raising, and custom architectural design deposits.
          </p>
        </div>
      </section>

      {/* Searchable Directory */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container max-w-[960px]">
          <FAQDirectory items={faqItems} />
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 text-center">
        <div className="container max-w-[700px]">
          <p className="eyebrow">Personal Consultation</p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#14241B]">
            Have a question specific to your building site?
          </h2>
          <p className="mt-4 text-[#6D716A] text-sm sm:text-base leading-relaxed">
            We are glad to discuss site slopes, ledge conditions, municipal setbacks, and customized floor plans directly with you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/start-a-project" variant="dark">
              Ask Raoul & Vicki Directly
            </Button>
            <Button href="/process" variant="outline">
              Review Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
