import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FamilyWorkshop() {
  return (
    <section className="section bg-[#F4F1E9] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="arch-image relative aspect-[4/5] border border-[#D9D5CB]">
                <Image
                  src="/images/team/founders.jpg"
                  alt="Raoul and Vicki Hennin, founders of Bungalow in a Box"
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-[0.65rem] font-mono uppercase px-2.5 py-1 backdrop-blur-sm">
                  Raoul & Vicki Hennin
                </div>
              </div>

              <div className="arch-image relative aspect-[4/5] border border-[#D9D5CB]">
                <Image
                  src="/images/team/cranes.jpg"
                  alt="Company-owned Fassi crane trucks in Woolwich, Maine"
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-[0.65rem] font-mono uppercase px-2.5 py-1 backdrop-blur-sm">
                  Woolwich Equipment Fleet
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <p className="eyebrow">The Hennin Family & Workshop</p>

            <h2 className="heading-xl text-[#14241B]">
              Built by people who know the structure
              <span className="block italic font-normal text-[#98704C]">
                from the drawing board to the crane.
              </span>
            </h2>

            <p className="body-large text-[#6D716A]">
              Bungalow in a Box is not an anonymous broker or a catalog reseller. When you speak with us, you are talking directly with the craftspeople who cut your joinery and operate the crane on your site.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#6D716A]">
              Founded in 1998 by Raoul Hennin (Harvard Physics &apos;82) and Vicki Hennin in Woolwich, Maine, our practice marries mathematical rigor with four decades of traditional timber joinery. Joined on-site by children Oscar (Mechanical Engineer) and Iris (Applied Math), our family designs, mills, delivers, and raises every project with personal accountability.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/about" variant="primary" size="md" arrow>
                Learn Our Family Story & Heritage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
