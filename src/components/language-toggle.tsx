'use client';

import type { Locale } from '@/data/i18n';

export function LanguageToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="flex rounded-xl border border-border bg-white/5 p-0.5 text-xs backdrop-blur">
      {(['en', 'id'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={
            locale === code
              ? 'rounded-lg bg-accent px-2.5 py-1 font-semibold text-slate-950'
              : 'rounded-lg px-2.5 py-1 text-muted transition hover:text-foreground'
          }
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
