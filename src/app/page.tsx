import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hi, I&apos;m <span className="text-accent">Nick</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8">
            Software Developer
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Welcome to my portfolio. I build software, tinker with hardware,
            and occasionally make games. Take a look around to see what I&apos;ve been working on.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a developer passionate about building things that matter.
              My interests span across software development, game development,
              and hardware projects.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or working on personal projects.
            </p>
          </div>
        </div>
      </section>

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
                className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-muted hover:text-accent hover:border-accent/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted mb-8">
            Feel free to reach out if you want to collaborate or just say hi!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-elevated border border-border rounded-lg text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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

      {/* Footer */}
      <footer className="px-8 py-8 md:px-16 lg:px-24 border-t border-border">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Nick. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
