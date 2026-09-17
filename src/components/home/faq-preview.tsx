"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqItems } from "@/content/faq";
import { cn } from "@/lib/utils";

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section className="section bg-[#F4F1E9] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow">Common Inquiries</p>
            <h2 className="heading-xl text-[#14241B]">
              Frequently Asked
              <span className="block italic font-normal">Questions.</span>
            </h2>
            <p className="mt-6 text-[#6D716A] text-base leading-relaxed">
              Have questions about building in Maine, timber framing joinery, foundation compatibility, or project budgeting? Here are direct answers from our shop.
            </p>

            <div className="mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#14241B] hover:text-[#98704C] transition-colors"
              >
                <span>Browse Complete FAQ Directory</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#D9D5CB] border-t border-b border-[#D9D5CB]">
            {faqItems.slice(0, 6).map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#14241B]"
                  >
                    <span className="font-[var(--font-display)] text-xl sm:text-2xl text-[#14241B] group-hover:text-[#98704C] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "text-[#98704C] transition-transform duration-300 shrink-0",
                        isOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-8 text-sm sm:text-base text-[#6D716A] leading-relaxed animate-in fade-in duration-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
