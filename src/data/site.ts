export const site = {
  name: 'Nuno Tamada',
  email: 'nunotamada12@gmail.com',
  github: 'https://github.com/EvosROAR',
  linkedin: 'https://www.linkedin.com/in/nuno-tamada-a69624254',
  photo: '/profile.png',
  cvPdf: '/api/cv',
  location: {
    en: 'Indonesia',
    id: 'Indonesia',
  },
} as const;

export type ProjectId = 'money-tracker' | 'edu-app' | 'learnquest-lms' | 'coaching-hub';

export type Project = {
  id: ProjectId;
  title: string;
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
  accent: string;
  year: string;
  kind: {
    en: string;
    id: string;
  };
};

export const projects: Project[] = [
  {
    id: 'learnquest-lms',
    title: 'LearnQuest LMS',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/EvosROAR/learnquest-lms',
    demo: 'https://learnquest-lms-59vf.vercel.app',
    accent: '#a78bfa',
    year: '2026',
    kind: { en: 'Web LMS', id: 'LMS Web' },
  },
  {
    id: 'coaching-hub',
    title: 'CoachingHub',
    stack: ['Flutter', 'Dart', 'Provider', 'i18n'],
    accent: '#f472b6',
    year: '2026',
    kind: { en: 'Student App', id: 'Aplikasi Siswa' },
  },
  {
    id: 'money-tracker',
    title: 'PocketLedger',
    stack: ['Expo', 'TypeScript', 'Firebase', 'React Native'],
    github: 'https://github.com/EvosROAR/money-tracker',
    demo: 'https://money-tracker-pearl-eight.vercel.app',
    image:
      'https://raw.githubusercontent.com/EvosROAR/money-tracker/main/docs/screenshots/dashboard.png',
    accent: '#5eead4',
    year: '2025',
    kind: { en: 'Finance App', id: 'Aplikasi Keuangan' },
  },
  {
    id: 'edu-app',
    title: 'Edu App',
    stack: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/EvosROAR/edu-app',
    demo: 'https://edu-app-ec176.web.app',
    image: 'https://raw.githubusercontent.com/EvosROAR/edu-app/main/docs/screenshots/home.png',
    accent: '#818cf8',
    year: '2025',
    kind: { en: 'Learning App', id: 'Aplikasi Belajar' },
  },
];

export const skillCategories = [
  { key: 'mobile' as const, items: ['React Native', 'Expo', 'Flutter'] },
  { key: 'languages' as const, items: ['TypeScript', 'Dart', 'JavaScript'] },
  { key: 'backend' as const, items: ['Firebase', 'Prisma', 'Next.js API'] },
  { key: 'tooling' as const, items: ['Git', 'Vercel', 'GitHub Actions'] },
] as const;
