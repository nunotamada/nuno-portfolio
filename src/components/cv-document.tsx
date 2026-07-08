"use client";

import { useEffect, useState } from "react";
import { getTranslations, type Locale } from "@/data/i18n";
import { projects, site, skillCategories } from "@/data/site";
import { LanguageToggle } from "./language-toggle";
import Link from "next/link";

export function CvDocument({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = getTranslations(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const allSkills = skillCategories.flatMap((category) => category.items);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link href="/" className="text-sm text-muted transition hover:text-accent">
          ← {t.links.backToPortfolio}
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} onChange={setLocale} />
          <a
            href={site.cvPdf}
            className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
          >
            {t.links.downloadCv}
          </a>
          <button type="button" onClick={() => window.print()} className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition hover:brightness-110">
            {t.links.savePdf}
          </button>
        </div>
      </div>

      <article className="rounded-2xl border border-border bg-card p-8 print:border-0 print:bg-white print:p-0 print:text-black">
        <header className="border-b border-border pb-6 print:border-gray-300">
          <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-lg text-accent print:text-gray-700">{t.role}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted print:text-gray-600">
            <li>{site.email}</li>
            <li>
              <a href={site.github} className="hover:text-accent print:text-gray-600">
                github.com/EvosROAR
              </a>
            </li>
            <li>
              <a href={site.linkedin} className="hover:text-accent print:text-gray-600">
                linkedin.com/in/nuno-tamada-a69624254
              </a>
            </li>
          </ul>
        </header>

        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent print:text-gray-800">{t.cv.summary}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted print:text-gray-700">{t.cv.summaryText}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent print:text-gray-800">{t.cv.skills}</h2>
          <p className="mt-2 text-sm text-muted print:text-gray-700">{allSkills.join(" · ")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent print:text-gray-800">{t.cv.projects}</h2>
          <ul className="mt-3 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted print:text-gray-500">{project.stack.join(", ")}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted print:text-gray-700">{t.projects.items[project.id].description}</p>
                <p className="mt-1 text-xs text-muted print:text-gray-500">
                  {[project.demo, project.github].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
