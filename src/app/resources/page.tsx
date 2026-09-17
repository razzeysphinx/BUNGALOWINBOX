import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, DollarSign, Hammer, BookOpen, Quote, HelpCircle, Newspaper } from "lucide-react";
import { pressMentions } from "@/content/press";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Building Resources & Guides | Bungalow in a Box",
  description:
    "Comprehensive guides on timber-frame pricing, construction process, client raising reflections, press coverage, and technical FAQs from Bungalow in a Box.",
};

const resourceSections = [
  {
    title: "Pricing & Budget Guide",
    href: "/pricing",
    icon: DollarSign,
    eyebrow: "Financial Transparency",
    description:
      "Understand the key cost drivers of a custom timber frame: building footprint, clear spans, timber volume, roof complexity, and delivery logistics.",
    cta: "View Budget Breakdown",
  },
  {
    title: "The 7-Stage Process",
    href: "/process",
    icon: Hammer,
    eyebrow: "Shop to Site",
    description:
      "Follow the sequential journey from initial discovery conversation and CAD modeling to shop fabrication in Woolwich, crane delivery, and on-site raising.",
    cta: "Read Building Process",
  },
  {
    title: "The Build Journal",
    href: "/journal",
    icon: BookOpen,
    eyebrow: "Articles & Editorial",
    description:
      "Essays, unboxing reflections, and architectural commentary from Vicki Hennin exploring timber framing history, building science, and Maine living.",
    cta: "Browse Journal",
  },
  {
    title: "Verified Client Stories",
    href: "/client-stories",
    icon: Quote,
    eyebrow: "Owner Reflections",
    description:
      "Read firsthand accounts of what it is like to watch a massive timber frame raised on island and mainland sites across New England.",
    cta: "Read Client Accounts",
  },
  {
    title: "Frequently Asked Questions",
    href: "/faq",
    icon: HelpCircle,
    eyebrow: "Technical & Practical",
    description:
      "Answers to common questions regarding foundation coordination, SIP insulation values, snow load engineering, and contractor responsibilities.",
    cta: "Explore FAQ Directory",
  },
  {
    title: "Start Your Project",
    href: "/start-a-project",
    icon: ArrowUpRight,
    eyebrow: "Interactive Consultation",
    description:
      "Step through our 5-step project intake flow to share your site location, intended footprint, timeline, and architectural vision directly with our shop.",
    cta: "Begin Intake Flow",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#FAF8F2] pt-28 pb-24 md:pt-36">
      <div className="container">
        {/* Header */}
        <div className="max-w-[840px] pb-14 border-b border-[#D9D5CB]">
          <p className="eyebrow">Owner & Architect Knowledge Base</p>
          <h1 className="display-lg text-[#14241B]">
            Planning resources &
            <span className="block italic font-normal text-[#98704C]">
              building guidance.
            </span>
          </h1>
          <p className="mt-6 body-large text-[#6D716A]">
            Everything you need to evaluate, plan, and budget for an authentic timber-frame home or specialty structure in Maine or New England.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resourceSections.map((sec) => {
            const Icon = sec.icon;
            return (
              <Link
                key={sec.href}
                href={sec.href}
                className="group block"
              >
                <article className="h-full bg-[#F4F1E9] border border-[#D9D5CB] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#14241B] hover:shadow-sm">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#D9D5CB]">
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#98704C]">
                        {sec.eyebrow}
                      </span>
                      <Icon size={20} className="text-[#14241B] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] mt-5 group-hover:text-[#98704C] transition-colors">
                      {sec.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#6D716A]">
                      {sec.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D9D5CB] flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] group-hover:text-[#98704C] transition-colors">
                    <span>{sec.cta}</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Press & Media Features Archive */}
        <div className="mt-20 border-t border-[#D9D5CB] pt-16">
          <div className="flex items-baseline justify-between gap-4 pb-8 border-b border-[#D9D5CB]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98704C]">
                Critical Recognition
              </p>
              <h2 className="heading-xl text-[#14241B] mt-2">
                Press & Media Coverage
              </h2>
            </div>
            <Newspaper size={24} className="text-[#98704C]" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressMentions.map((press) => (
              <div
                key={press.publication}
                className="p-6 bg-white border border-[#D9D5CB]"
              >
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#98704C]">
                  {press.publication}
                </div>
                <h3 className="font-[var(--font-display)] text-xl text-[#14241B] mt-2">
                  {press.headline}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6D716A]">
                  &ldquo;{press.snippet}&rdquo;
                </p>
                {press.url && (
                  <div className="mt-4 pt-4 border-t border-[#D9D5CB]">
                    <a
                      href={press.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#14241B] hover:text-[#98704C] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#14241B] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[620px]">
            <h3 className="font-[var(--font-display)] text-3xl text-white">
              Have questions about your building site?
            </h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              We talk directly with clients, local contractors, and architects every week. Call our Woolwich shop or submit a consultation request.
            </p>
          </div>
          <Button href="/start-a-project" variant="light" size="lg" arrow>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
