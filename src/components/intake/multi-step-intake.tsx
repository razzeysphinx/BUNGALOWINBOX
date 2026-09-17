"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormData {
  projectType: string;
  city: string;
  state: string;
  siteCondition: string;
  approxSize: string;
  propertyStatus: string;
  timeline: string;
  vision: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

const structureOptions = [
  { label: "Primary Residence / Barn House", value: "home", desc: "Full-scale custom timber home" },
  { label: "Cottage or Lake Cabin", value: "cottage", desc: "Compact seasonal or four-season getaway" },
  { label: "ADU, Guest House, or Studio", value: "adu", desc: "Backyard living or independent in-law space" },
  { label: "Working Barn or Workshop", value: "barn", desc: "Woodworking, equipment, or vehicle storage" },
  { label: "Event Space or Gathering Hall", value: "event", desc: "Open clear-span structure for celebrations" },
  { label: "Pergola or Outdoor Pavilion", value: "outdoor", desc: "Timber landscape centerpiece or patio shelter" },
  { label: "Custom Addition to Existing Home", value: "addition", desc: "Great room, entry airlock, or master wing" },
  { label: "Other / Creative Exploration", value: "other", desc: "A unique design or special application" },
];

const timelineOptions = [
  "Immediately (Ready to design)",
  "Within 3–6 Months",
  "Within 6–12 Months",
  "1+ Year (Early planning)",
];

const propertyOptions = [
  "Yes, land is owned and surveyed",
  "Property under contract / closing soon",
  "Actively searching for property",
  "Building an addition / ADU on current home",
];

export function MultiStepIntake() {
  const searchParams = useSearchParams();
  const prefillType = searchParams.get("type") || "";
  const prefillFootprint = searchParams.get("footprint") || "";

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<FormData>({
    projectType: prefillType || "home",
    city: "",
    state: "Maine",
    siteCondition: "Woodland",
    approxSize: prefillFootprint ? `${prefillFootprint} footprint` : "",
    propertyStatus: propertyOptions[0],
    timeline: timelineOptions[1],
    vision: "",
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "Email",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.projectType) newErrors.projectType = "Please select a structure type.";
    }

    if (currentStep === 2) {
      if (!formData.city.trim()) newErrors.city = "Please enter the city or town.";
      if (!formData.state.trim()) newErrors.state = "Please enter the state.";
    }

    if (currentStep === 5) {
      if (!formData.fullName.trim()) newErrors.fullName = "Please enter your name.";
      if (!formData.email.trim() || !formData.email.includes("@")) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((curr) => Math.min(curr + 1, 5));
    }
  };

  const prevStep = () => {
    setStep((curr) => Math.max(curr - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(5)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#D9D5CB] p-8 sm:p-14 text-center max-w-[720px] mx-auto shadow-sm">
        <div className="size-16 rounded-full bg-[#14241B] text-white flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </div>

        <p className="eyebrow">Consultation Request Received</p>
        <h2 className="heading-xl text-[#14241B]">
          Thank you, {formData.fullName}.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#6D716A] leading-relaxed">
          Raoul and Vicki Hennin have received your preliminary project details for a{" "}
          <strong className="text-[#14241B]">
            {structureOptions.find((o) => o.value === formData.projectType)?.label || formData.projectType}
          </strong>{" "}
          in <strong className="text-[#14241B]">{formData.city}, {formData.state}</strong>.
        </p>

        <div className="mt-8 p-6 bg-[#FAF8F2] border border-[#D9D5CB] text-left text-xs sm:text-sm text-[#262724] space-y-2">
          <div className="font-bold text-xs uppercase tracking-wider text-[#98704C]">
            What Happens Next:
          </div>
          <p>
            1. Raoul or Vicki will personally review your site location, timeline, and footprint preferences within 1–2 business days.
          </p>
          <p>
            2. We will contact you via {formData.preferredContact.toLowerCase()} ({formData.preferredContact === "Phone" ? formData.phone : formData.email}) to schedule an introductory consultation.
          </p>
          <p>
            3. If you have immediate questions, you can always reach our shop directly at{" "}
            <a href="tel:+1-207-522-4590" className="text-[#98704C] font-semibold underline">
              (207) 522-4590
            </a>.
          </p>
        </div>

        <div className="mt-8 pt-4">
          <Button href="/projects" variant="primary" size="lg" arrow>
            Continue Exploring Our Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#D9D5CB] p-6 sm:p-10 lg:p-14 max-w-[840px] mx-auto shadow-sm">
      {/* Progress header */}
      <div className="pb-8 border-b border-[#D9D5CB] flex items-center justify-between">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#98704C]">
            Step {step} of 5
          </span>
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[#14241B] mt-1">
            {step === 1 && "What are you planning to build?"}
            {step === 2 && "Where is your building site?"}
            {step === 3 && "Approximate size & timeline"}
            {step === 4 && "Tell us about your architectural vision"}
            {step === 5 && "Your contact details"}
          </h2>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-[#6D716A]">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                s === step
                  ? "bg-[#98704C]"
                  : s < step
                  ? "bg-[#14241B]"
                  : "bg-[#D9D5CB]"
              )}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="pt-8">
        {/* Step 1: Building Type */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm text-[#6D716A] mb-4">
              Select the primary category that best describes your intended structure:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {structureOptions.map((opt) => {
                const selected = formData.projectType === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => updateField("projectType", opt.value)}
                    className={cn(
                      "p-4 text-left border transition-all flex flex-col justify-between rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#835A39] focus-visible:ring-offset-2",
                      selected
                        ? "bg-[#14241B] text-white border-[#14241B]"
                        : "bg-[#FAF8F2] text-[#262724] border-[#D9D5CB] hover:border-[#14241B]"
                    )}
                  >
                    <span className="font-[var(--font-display)] text-lg sm:text-xl font-medium">
                      {opt.label}
                    </span>
                    <span
                      className={cn(
                        "text-xs mt-1 leading-normal",
                        selected ? "text-white/70" : "text-[#6D716A]"
                      )}
                    >
                      {opt.desc}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.projectType && (
              <p className="text-xs text-red-600 mt-2">{errors.projectType}</p>
            )}
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-6">
            <p className="text-sm text-[#6D716A]">
              Our Fassi crane trucks deliver throughout New England and beyond. Where will this structure stand?
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                  City / Town *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="e.g. Camden, Woolwich, Bar Harbor..."
                  className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
                />
                {errors.city && (
                  <p className="text-xs text-red-600 mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                  State / Region *
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  placeholder="e.g. Maine, Vermont, New Hampshire..."
                  className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
                />
                {errors.state && (
                  <p className="text-xs text-red-600 mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                Site Environment & Access
              </label>
              <select
                value={formData.siteCondition}
                onChange={(e) => updateField("siteCondition", e.target.value)}
                className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] bg-white focus:outline-none focus:border-[#14241B]"
              >
                <option value="Coastal / Oceanfront">Coastal / Oceanfront</option>
                <option value="Island (Requires Ferry / Barge)">Island (Requires Ferry / Barge)</option>
                <option value="Wooded Lot / Forest Clearing">Wooded Lot / Forest Clearing</option>
                <option value="Open Field / Meadow">Open Field / Meadow</option>
                <option value="Lakeside / Waterfront">Lakeside / Waterfront</option>
                <option value="Suburban / Backyard ADU">Suburban / Backyard ADU</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Size & Timeline */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                Approximate Size or Footprint (Optional)
              </label>
              <input
                type="text"
                value={formData.approxSize}
                onChange={(e) => updateField("approxSize", e.target.value)}
                placeholder="e.g. 24'x36', ~1,200 sq ft, or 2 bedrooms"
                className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
              />
              <p className="text-xs text-[#6D716A] mt-1">
                Standard footprints range from 12&apos; up to 32&apos; wide.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                Property Status
              </label>
              <div className="space-y-2">
                {propertyOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#262724] cursor-pointer p-2 rounded hover:bg-[#FAF8F2]"
                  >
                    <input
                      type="radio"
                      name="propertyStatus"
                      value={opt}
                      checked={formData.propertyStatus === opt}
                      onChange={() => updateField("propertyStatus", opt)}
                      className="accent-[#14241B]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                Target Timeline
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={formData.timeline === opt}
                    onClick={() => updateField("timeline", opt)}
                    className={cn(
                      "p-3 text-left border text-xs sm:text-sm transition-colors rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#835A39] focus-visible:ring-offset-2",
                      formData.timeline === opt
                        ? "bg-[#14241B] text-white border-[#14241B]"
                        : "bg-[#FAF8F2] text-[#262724] border-[#D9D5CB] hover:border-[#14241B]"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Vision & Specifics */}
        {step === 4 && (
          <div className="space-y-6">
            <p className="text-sm text-[#6D716A]">
              Tell us about how you envision living or working in this structure:
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                Notes, Features, & Vision
              </label>
              <textarea
                rows={6}
                value={formData.vision}
                onChange={(e) => updateField("vision", e.target.value)}
                placeholder="Share any special thoughts: wrap-around porches, cathedral ceilings, wood stove hearths, lofts, window orientations, or questions about our $3,000 design deposit..."
                className="w-full p-4 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
              />
            </div>
          </div>
        )}

        {/* Step 5: Contact Details */}
        {step === 5 && (
          <div className="space-y-6">
            <p className="text-sm text-[#6D716A]">
              Where should Raoul and Vicki send your initial project thoughts and estimate?
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="name@example.com"
                    className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="(207) 555-0123"
                    className="w-full p-3 border border-[#D9D5CB] text-sm text-[#14241B] focus:outline-none focus:border-[#14241B]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#262724] mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {["Email", "Phone"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#262724] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={() => updateField("preferredContact", method)}
                        className="accent-[#14241B]"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Buttons */}
        <div className="mt-10 pt-6 border-t border-[#D9D5CB] flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={prevStep}
            disabled={step === 1}
          >
            Back
          </Button>

          {step < 5 ? (
            <Button
              type="button"
              size="lg"
              arrow
              onClick={nextStep}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              size="lg"
              arrow
            >
              Request My Consultation
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
