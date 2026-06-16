import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Download, MapPin, ArrowRight } from "lucide-react";
import { profile, about, projects, skillGroups, education, certifications } from "@/content/portfolio";
import { useReveal } from "@/hooks/use-reveal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--gradient-accent)] text-primary-foreground text-xs font-bold">
              MM
            </span>
            <span className="text-foreground">Mithil<span className="text-primary">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--gradient-accent)] px-3.5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Resume <Download className="h-3.5 w-3.5" />
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong p-3 animate-[fade-in_0.2s_ease-out]">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-1 block text-center rounded-lg bg-[var(--gradient-accent)] px-3 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground animate-[fade-up_0.6s_ease-out_both]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to internships · Summer 2026
        </div>
        <h1
          className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-[fade-up_0.7s_ease-out_0.08s_both]"
        >
          Hi, I'm <span className="text-gradient">Mithil</span>.<br />
          I build clean, practical software.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-[fade-up_0.7s_ease-out_0.18s_both]">
          {profile.tagline}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 animate-[fade-up_0.7s_ease-out_0.28s_both]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_165/0.5)] hover:shadow-[0_15px_40px_-10px_oklch(0.78_0.16_165/0.7)] transition-all"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-1 ml-1">
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-2 text-xs font-mono text-muted-foreground animate-[fade-in_1s_ease-out_0.6s_both]">
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
          <span className="mx-2 text-border-strong">/</span>
          <span>B.Tech CS · 3rd year</span>
          <span className="mx-2 text-border-strong">/</span>
          <span>CGPA 8.3</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{tag}</div>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader tag="01 / About" title="A student engineer who likes shipping small, sharp things." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 reveal space-y-5 text-lg text-muted-foreground leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-2 reveal">
            <div className="glass rounded-2xl p-2 grid grid-cols-2 gap-2">
              {about.highlights.map((h) => (
                <div key={h.label} className="rounded-xl bg-white/[0.02] p-5 border border-border">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{h.label}</div>
                  <div className="mt-2 font-display text-lg font-semibold text-foreground">{h.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          tag="02 / Projects"
          title="Selected work."
          subtitle="Small projects I built, broke, and rebuilt — each one taught me something I now use."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="reveal hover-lift group glass rounded-2xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">{p.tag}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{p.name}</h3>
                </div>
                <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub repository"
                      className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{p.summary}</p>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Problem</div>
                  <p className="mt-1 text-foreground/90">{p.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Highlights</div>
                  <ul className="mt-1.5 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-foreground/90">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-none" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">What I learned</div>
                  <p className="mt-1 text-foreground/90">{p.outcome}</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/[0.04] border border-border px-2 py-1 text-[11px] font-mono text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-8 text-sm text-muted-foreground">
          More on{" "}
          <a className="text-primary hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          tag="03 / Skills"
          title="Tools I work with."
          subtitle="Solid in the basics, actively leveling up everything else."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="reveal glass rounded-2xl p-6 hover-lift">
              <div className="font-display text-base font-semibold text-foreground">{g.title}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/[0.03] border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader tag="04 / Education" title="Where I've studied." />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {education.map((e) => (
              <div
                key={e.degree}
                className="reveal glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover-lift"
              >
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">{e.degree}</div>
                  <div className="text-muted-foreground text-sm mt-0.5">{e.school}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{e.period}</div>
                  <div className="mt-1 text-primary font-medium text-sm">{e.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal glass rounded-2xl p-6">
            <div className="font-display text-base font-semibold text-foreground">Certifications</div>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-lg p-2 -mx-2 hover:bg-white/[0.03]"
                  >
                    <div>
                      <div className="text-sm text-foreground">{c.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <div className="reveal glass-strong rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-full bg-[var(--gradient-accent)] opacity-20 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">05 / Contact</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Let's build something.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              I'm actively looking for software internships and entry-level roles. If you have an opening or a project I can help with, I'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} {profile.name}. Built with care.</div>
        <div className="font-mono text-xs">Designed & coded in Hyderabad.</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
