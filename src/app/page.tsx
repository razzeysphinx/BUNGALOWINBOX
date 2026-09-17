import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ThreeStages } from "@/components/home/three-stages";
import { BuildCategories } from "@/components/home/build-categories";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { FindYourBungalow } from "@/components/home/find-your-bungalow";
import { BungalowDifference } from "@/components/home/bungalow-difference";
import { ShopToSite } from "@/components/home/shop-to-site";
import { FeaturedCaseStudy } from "@/components/home/featured-case-study";
import { ClientInvolvement } from "@/components/home/client-involvement";
import { FamilyWorkshop } from "@/components/home/family-workshop";
import { ProcessPreview } from "@/components/home/process-preview";
import { PricingBudget } from "@/components/home/pricing-budget";
import { PressStrip } from "@/components/home/press-strip";
import { ClientStories } from "@/components/home/client-stories";
import { FAQPreview } from "@/components/home/faq-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      {/* 01 Hero */}
      <Hero />

      {/* 02 Trust Strip */}
      <TrustStrip />

      {/* 03 What Bungalow Actually Does (Three Stages) */}
      <ThreeStages />

      {/* 04 What Are You Building? (Visual Categories) */}
      <BuildCategories />

      {/* 05 Featured Projects (Editorial Layouts) */}
      <FeaturedProjects />

      {/* 06 Find Your Bungalow (Interactive Guided Project Discovery) */}
      <FindYourBungalow />

      {/* 07 Bungalow Building System (Timber Frame + Panels + Envelope) */}
      <BungalowDifference />

      {/* 08 Shop to Site (10-Step Construction Documentary Timeline) */}
      <ShopToSite />

      {/* 09 Featured Case Study (Casco Bay Barn House Deep Dive) */}
      <FeaturedCaseStudy />

      {/* 10 Client Involvement (The Raising Experience) */}
      <ClientInvolvement />

      {/* 11 Family + Workshop (Hennin Family Heritage) */}
      <FamilyWorkshop />

      {/* Press Proof Strip */}
      <PressStrip />

      {/* 12 Process (7-Stage Journey) */}
      <ProcessPreview />

      {/* 13 Pricing / Budget (Cost Factors & Deposit Structure) */}
      <PricingBudget />

      {/* 14 Verified Client Stories (Verified Accounts Only) */}
      <ClientStories />

      {/* 15 FAQ (Key Homeowner Questions) */}
      <FAQPreview />

      {/* 16 Final CTA (Closing Action) */}
      <FinalCTA />
    </>
  );
}
