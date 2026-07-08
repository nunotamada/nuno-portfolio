export type Locale = 'en' | 'id';

export const locales: Locale[] = ['en', 'id'];

export const translations = {
  en: {
    role: 'Mobile Developer',
    status: 'Available for work',
    heroTitle: 'Apps that feel native — on every screen.',
    tagline:
      'I design and ship cross-platform products with React Native, Expo, and Flutter. Clean UI, solid Firebase backends, offline-ready features.',
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      liveDemo: 'Live demo',
      sourceCode: 'Code',
      downloadCv: 'Download CV',
      linkedinProfile: 'LinkedIn',
      savePdf: 'Save as PDF',
      backToPortfolio: 'Back to portfolio',
      viewProjects: 'See projects',
      talk: "Let's talk",
    },
    about: {
      title: 'About me',
      subtitle: 'Builder of mobile products, not just screens.',
      paragraphs: [
        'I build end-to-end apps: UI, state, APIs, and deploy. Comfortable across web and mobile from one mindset.',
        'Recent work spans LearnQuest LMS + CoachingHub (web LMS + Flutter student app), PocketLedger (Expo finance), and Edu App (Flutter learning).',
      ],
    },
    projects: {
      title: 'Featured projects',
      subtitle: 'Recent work you can tap, clone, and explore.',
      items: {
        'learnquest-lms': {
          description:
            'Gamified LMS with admin & student dashboards, courses, timed quizzes, forums, XP levels, and real-time progress — Next.js, Prisma, and JWT auth.',
        },
        'coaching-hub': {
          description:
            'Flutter student app for coaching institutes: courses, lessons, announcements, XP/levels, and English + Hindi ready. Built to connect with LearnQuest API.',
        },
        'money-tracker': {
          description:
            'PocketLedger — personal finance for web and mobile. Budgets, recurring transactions, multi-currency, reports, and PIN lock with Expo + Firebase.',
        },
        'edu-app': {
          description:
            'Learning app with courses, exercises, streaks, and ID/EN support. Flutter + Firebase, including an in-app admin CMS.',
        },
      },
    },
    skills: {
      title: 'Toolkit',
      subtitle: 'What I use day to day.',
      categories: {
        mobile: 'Mobile',
        languages: 'Languages',
        backend: 'Backend',
        tooling: 'Tooling',
      },
    },
    contact: {
      title: 'Ready when you are',
      subtitle: 'Open to roles, freelance, and collabs. Email or LinkedIn works best.',
    },
    cv: {
      title: 'Curriculum Vitae',
      summary: 'Summary',
      summaryText:
        'Mobile developer focused on cross-platform apps with React Native, Expo, and Flutter. Experienced in Firebase backends, bilingual products, and shipping full features from UI to deployment.',
      skills: 'Skills',
      projects: 'Projects',
    },
  },
  id: {
    role: 'Pengembang Mobile',
    status: 'Tersedia untuk bekerja',
    heroTitle: 'Aplikasi yang terasa native — di setiap layar.',
    tagline:
      'Saya merancang dan merilis produk lintas platform dengan React Native, Expo, dan Flutter. UI bersih, backend Firebase solid, fitur siap offline.',
    nav: {
      about: 'Tentang',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak',
    },
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      liveDemo: 'Demo live',
      sourceCode: 'Kode',
      downloadCv: 'Unduh CV',
      linkedinProfile: 'LinkedIn',
      savePdf: 'Simpan sebagai PDF',
      backToPortfolio: 'Kembali ke portfolio',
      viewProjects: 'Lihat proyek',
      talk: 'Mari bicara',
    },
    about: {
      title: 'Tentang saya',
      subtitle: 'Membangun produk mobile, bukan sekadar tampilan.',
      paragraphs: [
        'Saya membangun aplikasi end-to-end: UI, state, API, dan deploy. Nyaman di web dan mobile dengan satu cara berpikir.',
        'Proyek terbaru mencakup LearnQuest LMS + CoachingHub (LMS web + app siswa Flutter), PocketLedger (keuangan Expo), dan Edu App (belajar Flutter).',
      ],
    },
    projects: {
      title: 'Proyek unggulan',
      subtitle: 'Karya terbaru yang bisa dicoba dan dijelajahi.',
      items: {
        'learnquest-lms': {
          description:
            'LMS gamifikasi dengan dashboard admin & siswa, kursus, kuis berwaktu, forum, XP/level, dan progress real-time — Next.js, Prisma, dan auth JWT.',
        },
        'coaching-hub': {
          description:
            'Aplikasi siswa Flutter untuk coaching institute: kursus, pelajaran, pengumuman, XP/level, siap English + Hindi. Dirancang terhubung ke API LearnQuest.',
        },
        'money-tracker': {
          description:
            'PocketLedger — keuangan pribadi untuk web dan mobile. Budget, transaksi berulang, multi-mata uang, laporan, dan kunci PIN dengan Expo + Firebase.',
        },
        'edu-app': {
          description:
            'Aplikasi belajar dengan kursus, latihan, streak, dan dukungan ID/EN. Flutter + Firebase, termasuk CMS admin di dalam aplikasi.',
        },
      },
    },
    skills: {
      title: 'Toolkit',
      subtitle: 'Yang saya pakai sehari-hari.',
      categories: {
        mobile: 'Mobile',
        languages: 'Bahasa',
        backend: 'Backend',
        tooling: 'Tooling',
      },
    },
    contact: {
      title: 'Siap saat kamu siap',
      subtitle: 'Terbuka untuk role, freelance, dan kolaborasi. Email atau LinkedIn paling cepat.',
    },
    cv: {
      title: 'Curriculum Vitae',
      summary: 'Ringkasan',
      summaryText:
        'Pengembang mobile yang fokus pada aplikasi lintas platform dengan React Native, Expo, dan Flutter. Berpengalaman di backend Firebase, produk bilingual, dan merilis fitur lengkap dari UI hingga deployment.',
      skills: 'Keahlian',
      projects: 'Proyek',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
