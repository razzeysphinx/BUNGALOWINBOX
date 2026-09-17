import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ClientInvolvement() {
  return (
    <section className="section bg-[#FAF8F2] border-t border-[#D9D5CB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="eyebrow">The Raising Experience</p>

            <h2 className="heading-xl text-[#14241B]">
              You don&apos;t just wait for the building.
              <span className="block italic font-normal text-[#98704C]">
                You can watch it become one.
              </span>
            </h2>

            <p className="body-large text-[#6D716A]">
              In conventional construction, clients are kept behind contractor fences while weeks blur into months of noisy site framing. With Bungalow in a Box, raising day is an unforgettable family milestone.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#6D716A]">
              Because every bent and rafter was hand-cut and test-assembled in our Maine shop, on-site raising moves with deliberate, rhythmic choreography. Clients often stand on their land with lawn chairs and coffee, watching our nimble crew and crane hoist massive timber bents and drive oak pegs into mortises. By day&apos;s end, the majestic three-dimensional structure of their home is standing against the sky.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/process" variant="primary" size="md" arrow>
                See What Raising Day Looks Like
              </Button>
              <Button href="/client-stories" variant="secondary" size="md">
                Read Client Raising Accounts
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="arch-image relative aspect-[3/4] border border-[#D9D5CB]">
                <Image
                  src="/images/process/raising-woolwich.jpg"
                  alt="Timber frame raising day in Maine"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-[0.65rem] font-mono uppercase px-2.5 py-1 backdrop-blur-sm">
                  Pinning the Bents
                </div>
              </div>

              <div className="space-y-4">
                <div className="arch-image relative aspect-[4/3] border border-[#D9D5CB]">
                  <Image
                    src="/images/projects/casco-bay/bent-raising.jpg"
                    alt="Crane raising hemlock timber bent"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#14241B]/90 text-white text-[0.65rem] font-mono uppercase px-2.5 py-1 backdrop-blur-sm">
                    Crane Hoisting Bents
                  </div>
                </div>

                <div className="bg-[#F4F1E9] border border-[#D9D5CB] p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#98704C] mb-2">
                    Predictable Enclosure
                  </div>
                  <p className="text-xs leading-relaxed text-[#6D716A]">
                    &ldquo;Watching the timber frame go up in two days was the highlight of our build. We could see the craft in every timber.&rdquo;
                  </p>
                  <div className="mt-3 text-[0.7rem] font-semibold text-[#14241B]">
                    — Verified Island Client, Chebeague
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
