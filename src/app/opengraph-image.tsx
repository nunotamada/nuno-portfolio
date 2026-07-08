import { ImageResponse } from 'next/og';
import { translations } from '@/data/i18n';
import { site } from '@/data/site';

const t = translations.en;

export const alt = `${site.name} — ${t.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#070a12',
          color: '#eef2ff',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: '#5eead4',
            marginBottom: 16,
          }}
        >
          {t.role}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#8b95b0',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {t.heroTitle}
        </div>
      </div>
    ),
    { ...size },
  );
}
