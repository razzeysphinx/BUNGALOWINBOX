import { ArrowUpRight } from "lucide-react";
import { pressMentions } from "@/content/press";
import { TextLink } from "@/components/ui/text-link";

export function PressStrip() {
  return (
    <section className="py-16 bg-[#FAF8F2] border-b border-[#D9D5CB]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#D9D5CB]">
          <div>
            <p className="eyebrow text-xs">Editorial Coverage & Honors</p>
            <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B]">
              As Featured In
            </h3>
          </div>

          <TextLink href="/about#press">
            Read All Press Coverage
          </TextLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {pressMentions.slice(0, 4).map((item) => (
            <a
              key={item.publication}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-[#F4F1E9] border border-[#D9D5CB] flex flex-col justify-between hover:border-[#14241B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#98704C]">
                    {item.publication}
                  </span>
                  <ArrowUpRight size={14} className="text-[#6D716A] group-hover:text-[#14241B]" />
                </div>
                <h4 className="font-[var(--font-display)] text-lg text-[#14241B] mt-3 group-hover:text-[#98704C] transition-colors line-clamp-2">
                  {item.headline}
                </h4>
              </div>

              {item.badge && (
                <div className="mt-4 pt-3 border-t border-[#D9D5CB] text-[0.7rem] uppercase tracking-wider text-[#6D716A]">
                  {item.badge}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
