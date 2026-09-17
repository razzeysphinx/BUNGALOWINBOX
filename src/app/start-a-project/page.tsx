import { Suspense } from "react";
import type { Metadata } from "next";
import { MultiStepIntake } from "@/components/intake/multi-step-intake";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Your Project | Free Timber Frame Consultation",
  description:
    "Tell us about your building site, desired footprint, and vision. Raoul and Vicki Hennin offer free introductory consultations for custom timber frame builds in Maine and New England.",
};

export default function StartProjectPage() {
  return (
    <div className="bg-[#FAF8F2] pb-24">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[#D9D5CB] bg-[#F4F1E9]">
        <div className="container max-w-[960px]">
          <p className="eyebrow">Project Consultation</p>
          <h1 className="display-lg text-[#14241B]">
            Start Your
            <span className="block italic font-normal text-[#98704C]">
              Timber Project.
            </span>
          </h1>
          <p className="mt-8 body-large text-[#6D716A]">
            Whether you already own surveyed land or are exploring ideas for a coastal retreat, guest ADU, or barn house, we look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Main Intake Flow */}
      <section className="py-16 lg:py-20 border-b border-[#D9D5CB]">
        <div className="container">
          <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-[#6D716A]">Loading Intake Form...</div>}>
            <MultiStepIntake />
          </Suspense>
        </div>
      </section>

      {/* Direct Contact Alternatives */}
      <section className="py-16 bg-[#F4F1E9]">
        <div className="container max-w-[840px]">
          <div className="text-center mb-10">
            <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B]">
              Prefer to Reach Us Directly?
            </h3>
            <p className="mt-2 text-sm text-[#6D716A]">
              We are easy to reach by phone or email during regular business hours and weekends:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div className="bg-white border border-[#D9D5CB] p-6 space-y-2">
              <Phone size={20} className="text-[#98704C] mx-auto" />
              <div className="font-bold text-xs uppercase tracking-wider text-[#14241B]">
                Direct Phone
              </div>
              <a href="tel:+1-207-522-4590" className="text-sm font-semibold text-[#14241B] hover:text-[#98704C] block">
                (207) 522-4590
              </a>
              <a href="tel:+1-207-443-5691" className="text-xs text-[#6D716A] block">
                (207) 443-5691
              </a>
            </div>

            <div className="bg-white border border-[#D9D5CB] p-6 space-y-2">
              <Mail size={20} className="text-[#98704C] mx-auto" />
              <div className="font-bold text-xs uppercase tracking-wider text-[#14241B]">
                Direct Email
              </div>
              <a href="mailto:info@bungalowinabox.com" className="text-sm text-[#98704C] hover:underline block truncate">
                info@bungalowinabox.com
              </a>
              <a href="mailto:raoul@bungalowinabox.com" className="text-xs text-[#6D716A] block truncate">
                raoul@bungalowinabox.com
              </a>
            </div>

            <div className="bg-white border border-[#D9D5CB] p-6 space-y-2">
              <MapPin size={20} className="text-[#98704C] mx-auto" />
              <div className="font-bold text-xs uppercase tracking-wider text-[#14241B]">
                Workshop Location
              </div>
              <div className="text-xs text-[#262724]">
                425 Montsweag Road<br />Woolwich, ME 04579
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
