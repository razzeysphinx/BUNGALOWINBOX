import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#14241B] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/projects/final-cta.jpg"
          alt="Bungalow in a Box timber frame house in Maine"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A14] via-[#14241B]/60 to-[#14241B]/80" />
      </div>

      <div className="container relative z-10 flex min-h-[620px] md:min-h-[720px] items-center py-20">
        <div className="max-w-[840px]">
          <p className="eyebrow text-[#B18A63]">Begin a Conversation</p>

          <h2 className="font-[var(--font-display)] text-[clamp(3.5rem,6.5vw,7.2rem)] leading-[0.9] tracking-[-0.045em] text-[#FAF8F2]">
            Have a place
            <span className="block italic font-normal text-white">
              in mind? Let&apos;s build for it.
            </span>
          </h2>

          <p className="mt-8 max-w-[620px] text-base md:text-lg text-white/80 leading-relaxed">
            Whether you envision a remote woodland cabin, an island cape, a spacious backyard ADU, or an open event barn, we are ready to listen, collaborate, and craft an enduring timber frame for your site.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/start-a-project" variant="light">
              Start Your Project
            </Button>

            <Button
              href="/projects"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-[#14241B]"
            >
              Explore All Projects
            </Button>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 text-xs text-white/60">
            Montsweag Brook Corporation • Woolwich, Maine • Call <a href="tel:+1-207-522-4590" className="text-[#B18A63] font-semibold hover:underline">(207) 522-4590</a>
          </div>
        </div>
      </div>
    </section>
  );
}
