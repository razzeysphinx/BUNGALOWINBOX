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
        <div className="max-w-[880px]">
          <p className="eyebrow text-[#B18A63]">Start Your Journey</p>

          <h2 className="display-lg max-w-[880px] text-[#FAF8F2]">
            Have a place in mind?
            <span className="block italic font-normal text-white">
              Let&apos;s design what belongs there.
            </span>
          </h2>

          <p className="mt-8 max-w-[640px] text-base md:text-lg text-white/80 leading-relaxed">
            Whether you envision a remote woodland retreat, an island cape, a spacious backyard guest house, or an open timber barn, we are ready to listen, collaborate, and craft an enduring structural system for your land.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="/start-a-project"
              variant="inverse"
              size="lg"
              arrow
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>

            <Button
              href="/projects"
              variant="inverseOutline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Projects
            </Button>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 text-xs text-white/60">
            Montsweag Brook Corporation • Woolwich, Maine • Call{" "}
            <a
              href="tel:+1-207-522-4590"
              className="text-[#B18A63] font-semibold hover:underline"
            >
              (207) 522-4590
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
