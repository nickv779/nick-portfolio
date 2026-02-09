import { Mail, Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Left column: Hero + About */}
        <div className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="px-8 py-20 md:px-16 lg:px-24 z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Hi, I'm <span className="text-accent">Nick</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted mb-8">
                Experienced Thinkpad Enthusiast
              </p>
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Born and raised in South Florida, I grew up playing a lot of games. Maybe it was some type of exposure therapy or stockholm,
                    but it made me want to study computer science at the University of Florida. From software engineering to penetration testing, 
                    I found myself liking too many things in computer science to the point where I can't decide. I guarantee, however, that I love 
                    my Arch Linux (btw) Thinkpad T440p from 2013 that I bought off of eBay for $60.
                  </p>
                  <p>
                    Feel free to browse around this home page for a quick overview of my main skills as well as some ways to contact me below.
                    I have a projects page too where I show off all the fun things I've built either alone or with friends, so check that out!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Right column: Image */}
        <div className="flex-1 flex justify-center items-center relative mt-8">
          <div className="w-150 h-130 relative">
            <Image
              src="/headshot.jpg"
              alt="Nick"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <section className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Git",
              "Linux",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-border rounded-lg 
                text-sm text-muted hover:text-accent hover:border-accent/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-8 md:px-16 lg:px-24 bg-surface flex justify-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Contact
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:nicolasvaliente779@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg 
              text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/nickv779"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg 
              text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nicolasvaliente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
