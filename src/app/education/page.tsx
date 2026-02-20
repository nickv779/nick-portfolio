import Image from "next/image";

export default function Home() {

  const semesters: Record<string, string[]> = {
    "Summer 2022": ["Introduction to Research"],
    "Fall 2022": ["Programming Fundamentals I", "Calculus II", "Engineering Design & Society", "Beginning Fiction Writing"],
    "Spring 2023": ["Programming Fundamentals II", "Calculus III", "Applications of Discrete Structures", "The Horror, The Horror"],
    "Summer 2023": ["US Since 1877", "Professional Communications for Engineers", "Creating Mobile Games"],
    "Fall 2023": ["Data Structures & Algorithms", "Introduction to Computer Organization", "Physics with Calculus I", "Engineering Statistics"],
    "Spring 2024": ["Introduction to Software Engineering", "Physics with Calculus II", "Computational Linear Algebra", "Principles of Digital Visualization"],
    "Summer 2024": ["Introduction to Cryptology", "Introduction to Machine Learning", "Elementary Differential Equations"],
    "Fall 2024": ["Operating Systems", "Applied Machine Learning", "Information and Database Systems I", "Programming Language Concepts"],
    "Spring 2025": ["Malware Reverse Engineering", "Network Fundamentals", "Project Methodologies"],
    "Summer 2025": [],
    "Fall 2025": ["Algorithm Abstraction & Design", "Linear Algebra for Data Science", "Astrophotography", "Engineering Ethics", "Game Content Production I"],
    "Spring 2026": ["Senior Project", "Penetration Testing: Ethical Hacking", "Game Engine Development", "Age of Dinosaurs"]
  };

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
            <div className="flex-1 flex flex-col mt-8 px-4">
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
                gaming and anime clubs and other computer science related ones.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center relative mt-8">
              <div className="w-180 h-130 relative">
                <Image
                  src="/uf.png"
                  alt="Nick"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
              Courses Taken
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(semesters).map(([heading, items]) => (
                <div
                  key={heading}
                  className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {heading}
                  </h3>

                  <div className="space-y-2 text-muted text-sm leading-relaxed">
                    {items.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
