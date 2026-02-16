import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="px-8 py-20 md:px-16 lg:px-16 z-10">
        <div className="flex flex-col mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Educational Background
          </h1>
          <p className="space-y-4 text-muted leading-relaxed mb-8 max-w-3xl">
            Beyond just saying that I studied computer science, I wanted to highlight particular memories and courses since
            they tell a much better story of who I am.
          </p>
          <div className="flex-1 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                University of Florida
              </h1>
              <p className="text-xl md:text-2xl font-bold text-muted mb-2">
                Bachelor's of Science in Computer Science | Minor in Digital Arts & Sciences
             </p>
              <p className="text-1xl font-bold text-muted mb-2">
                June 2022 -- May 2026 | Gainesville, FL
             </p>
              <p className="text-lg text-muted mb-4">
                I was never too sure of what I wanted to do as a career, but I always loved playing games and using my
                computer so I figured, "Why not just do computer science?" My older brother also did computer science 
                and is currently working as a software engineer, so that probably influenced me somewhat.

                As for why UF... I liked the location being far enough away from home but still close. I did a sort of
                triangulating the area and thought Gainesville was conveniently close to all the major spots besides
                Miami. 
              </p>
              <p className="text-lg text-muted">
                While at UF, I was fortunate enough to engage with a lot of opportunities. I enrolled into the STEPUP
                program for my first 6 weeks of college. I became involved with the Open Source Club and stuck with
                the organization for all my 4 years in college. I've also hung around other organizations, like the
                gaming and anime clubs and other computer science related ones on occassion.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center relative mt-8">
              <div className="w-200 h-130 relative">
                <Image
                  src="/headshot.jpg"
                  alt="Nick"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
