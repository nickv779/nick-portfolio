import Image from "next/image";
import { Experiences } from "./experiences.ts";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="px-8 py-20 md:px-16 lg:px-16 z-10">
        <div className="flex flex-col mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Experiences & Involvement
          </h1>
          <p className="space-y-4 text-muted leading-relaxed mb-8 max-w-3xl">
            Simply a listing of all the positions I've held with a bit more of a story than my resume could tell.
          </p>
          {Experiences.map(exp => (
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col mt-8 px-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {exp.title} @ {exp.company}
                </h1>
                <p className="text-xl md:text-2xl font-bold text-muted mb-4">
                  {exp.location} | {exp.dates}
                </p>
                {exp.tldr.map((item, index) => (
                  <p className="text-lg text-muted mb-2" key={index}>• {item}</p>
                ))}
                <p className="text-lg text-muted py-6">
                  {exp.desc}
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center relative mt-8">
                <div className="w-180 h-130 relative">
                  <Image
                    src={exp.imageURL}
                    alt="image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
