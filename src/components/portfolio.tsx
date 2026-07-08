'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getTranslations, type Locale } from '@/data/i18n';
import { projects, site, skillCategories } from '@/data/site';
import { LanguageToggle } from './language-toggle';

const LOCALE_KEY = 'portfolio-locale';

const navLinks = [
  { href: '#about', key: 'about' as const },
  { href: '#projects', key: 'projects' as const },
  { href: '#skills', key: 'skills' as const },
  { href: '#contact', key: 'contact' as const },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({
  children,
  className = '',
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}) {
  const ref = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === 'primary'
          ? 'btn-glow inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110'
          : 'inline-flex items-center justify-center rounded-2xl border border-border bg-white/5 px-5 py-2.5 text-sm text-foreground transition hover:border-accent hover:text-accent'
      }
    >
      {children}
    </a>
  );
}

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>('en');
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslations(locale);

  useEffect(() => {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (saved === 'en' || saved === 'id') setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-scene" aria-hidden>
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-16 pt-4 sm:px-8">
        <nav
          className={`sticky top-3 z-30 mb-8 flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent'
          }`}
        >
          <a href="#" className="text-sm font-semibold tracking-tight">
            {site.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-xl px-3 py-1.5 transition hover:bg-white/5 hover:text-foreground"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageToggle locale={locale} onChange={setLocale} />
          </div>
        </nav>

        <header className="grid items-center gap-10 pb-20 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <div className="hero-enter hero-enter-1 mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.status}
              <span className="opacity-40">·</span>
              {t.role}
            </div>

            <h1 className="hero-enter hero-enter-2 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle.split('—')[0]}
              <span className="text-gradient">—{t.heroTitle.split('—')[1]}</span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {t.tagline}
            </p>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-glow inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                {t.links.viewProjects}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-white/5 px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                {t.links.talk}
              </a>
              <ExternalLink href={site.cvPdf} variant="ghost">
                {t.links.downloadCv}
              </ExternalLink>
            </div>
          </div>

          <div className="hero-enter hero-enter-3 relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <div className="float-soft absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-2/20 to-transparent opacity-70 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[1.75rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={site.photo}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 380px"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1 pb-1">
                <div>
                  <p className="text-sm font-semibold">{site.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border px-2.5 py-1 text-xs text-muted transition hover:text-accent"
                  >
                    GH
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border px-2.5 py-1 text-xs text-muted transition hover:text-accent"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-24">
          <section id="about" className="scroll-mt-28">
            <Reveal>
              <p className="text-sm font-medium text-accent">{t.about.title}</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                {t.about.subtitle}
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={(index + 1) as 1 | 2}>
                  <div className="glass h-full rounded-3xl p-6 text-sm leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-28">
            <Reveal>
              <p className="text-sm font-medium text-accent">{t.projects.title}</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                {t.projects.subtitle}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                  <article className="project-card glass overflow-hidden rounded-3xl">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          className="project-media object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          unoptimized
                        />
                      ) : (
                        <div
                          className="project-media flex h-full w-full items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${project.accent}33, #0c1220 55%, ${project.accent}14)`,
                          }}
                        >
                          <span
                            className="text-6xl font-extrabold tracking-tight opacity-40"
                            style={{ color: project.accent }}
                          >
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs backdrop-blur">
                        {project.kind[locale]} · {project.year}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {t.projects.items[project.id].description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.demo ? (
                          <ExternalLink href={project.demo}>{t.links.liveDemo}</ExternalLink>
                        ) : null}
                        {project.github ? (
                          <ExternalLink href={project.github} variant="ghost">
                            {t.links.sourceCode}
                          </ExternalLink>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-28">
            <Reveal>
              <p className="text-sm font-medium text-accent">{t.skills.title}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.skills.subtitle}
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category, index) => (
                <Reveal key={category.key} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="glass h-full rounded-3xl p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.skills.categories[category.key]}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <li
                          key={skill}
                          className="skill-chip rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <Reveal>
              <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-accent-2/20 blur-3xl" />

                <p className="relative text-sm font-medium text-accent">{t.contact.title}</p>
                <h2 className="relative mt-2 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.contact.subtitle}
                </h2>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <ExternalLink href={`mailto:${site.email}`}>{site.email}</ExternalLink>
                  <ExternalLink href={site.linkedin} variant="ghost">
                    {t.links.linkedinProfile}
                  </ExternalLink>
                  <ExternalLink href={site.github} variant="ghost">
                    {t.links.github}
                  </ExternalLink>
                  <ExternalLink href={site.cvPdf} variant="ghost">
                    {t.links.downloadCv}
                  </ExternalLink>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="mt-16 border-t border-border pt-8 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </footer>
      </div>
    </>
  );
}
