export type Lang = 'id' | 'en'

export interface ContactInfo {
  phone: string
  email: string
  location: string
}

export interface Entry {
  title: string
  subtitle?: string
  bullets?: string[]
}

export interface Section {
  title: string
  entries?: Entry[]
  bullets?: string[]
}

export interface CVContent {
  role: string
  summary: string
  sections: Section[]
}

export interface CV {
  id: string
  name: string
  shortName: string
  initials: string
  photo?: string
  contact: ContactInfo
  content: Record<Lang, CVContent>
}

export const ui = {
  id: {
    selectCv: 'Pilih CV',
    langLabel: 'Bahasa',
    share: 'Bagikan',
    copyLink: 'Salin tautan',
    copied: 'Tautan disalin!',
    copyFail: 'Gagal menyalin tautan',
    themeDark: 'Ganti ke mode gelap',
    themeLight: 'Ganti ke mode terang',
  },
  en: {
    selectCv: 'Select CV',
    langLabel: 'Language',
    share: 'Share',
    copyLink: 'Copy link',
    copied: 'Link copied!',
    copyFail: 'Failed to copy link',
    themeDark: 'Switch to dark mode',
    themeLight: 'Switch to light mode',
  },
}

export const cvs: CV[] = [
  {
    id: 'gayu',
    name: 'Gayu Yunma Ramadhan',
    shortName: 'Gayu',
    initials: 'GY',
    contact: {
      phone: '0813 8789 5911',
      email: 'gayuyunmaramadhan@gmail.com',
      location: 'Cikarang Timur, Sertajaya 17530',
    },
    content: {
      id: {
        role: 'Full-Stack Web Developer',
        summary:
          'Freelancer Developer berpengalaman 2 tahun dalam pengembangan aplikasi web full-stack. Ahli backend (Bun, NodeJS, Golang) dan database MySQL & PostgreSQL. Mahir frontend dengan SvelteKit, NextJS, NuxtJS, Vue, React, serta Laravel. Menguasai Git, server Linux (Ubuntu, CentOS, RedHat), dan troubleshooting hardware, software, printer, serta CCTV.',
        sections: [
          {
            title: 'Pengalaman',
            entries: [
              {
                title: 'FullStack Web Development – Freelance',
                subtitle: 'Web Development · 2024',
                bullets: [
                  'Merancang dan membuat web portal berita yang optimal di berbagai browser dan platform',
                  'Mengoptimalkan metadata untuk SEO & SEM',
                  'Membuat dashboard penulisan artikel dan berita',
                  'Membuat web sesuai desain dengan tepat waktu',
                ],
              },
              {
                title: 'SEO & SEM – Freelance',
                subtitle: 'Urbaniana · 2024',
                bullets: [
                  'Mengelola web dan media sosial untuk meningkatkan visibilitas pencarian',
                  'Optimasi web dengan Moz dan metadata untuk ranking SEO',
                  'Analisis performa konten dengan SemRush',
                ],
              },
            ],
          },
          {
            title: 'Proyek',
            entries: [
              {
                title: 'Sistem Inventory Control',
                bullets: ['Aplikasi web untuk mengelola keluar-masuk barang gudang'],
              },
              {
                title: 'Sistem Kasir Terpadu',
                bullets: [
                  'Aplikasi kasir multi-cabang Fried Chicken yang terintegrasi dengan inventory control',
                ],
              },
              {
                title: 'Aplikasi SIM RS',
                bullets: [
                  'Aplikasi klinik berbasis Laravel untuk input pasien dan resep, terintegrasi dengan apotek',
                ],
              },
            ],
          },
          {
            title: 'Pendidikan',
            entries: [
              {
                title: 'SMA Negeri 2 Cikarang Utara – IPS',
                subtitle: '2020 - 2023',
              },
            ],
          },
          {
            title: 'Kursus',
            bullets: [
              'Web Development dengan VueJS – Programmer Zaman Now (2024)',
              'Database MySQL – Programmer Zaman Now (2024)',
              'Web Development – Web Programming Unpas (2024)',
            ],
          },
          {
            title: 'Keterampilan',
            bullets: [
              'Frontend: VueJS, React, NextJS, Laravel, NuxtJS, SvelteKit, TailwindCSS',
              'Backend: NodeJS & Bun, Go, Ajax & jQuery',
              'Server: Linux (Ubuntu, CentOS, RedHat), Windows Server',
              'Troubleshoot hardware, software & jaringan',
            ],
          },
        ],
      },
      en: {
        role: 'Full-Stack Web Developer',
        summary:
          'Freelance developer with 2 years of experience building full-stack web applications. Skilled in backend (Bun, NodeJS, Golang) and MySQL & PostgreSQL databases. Proficient in frontend with SvelteKit, NextJS, NuxtJS, Vue, React, and Laravel. Comfortable with Git, Linux servers (Ubuntu, CentOS, RedHat), and troubleshooting hardware, software, printers, and CCTV.',
        sections: [
          {
            title: 'Experience',
            entries: [
              {
                title: 'FullStack Web Development – Freelance',
                subtitle: 'Web Development · 2024',
                bullets: [
                  'Designed and built a news portal web app optimized across browsers and platforms',
                  'Optimized metadata for SEO & SEM',
                  'Built a dashboard for writing articles and news',
                  'Delivered web builds matching the designs on time',
                ],
              },
              {
                title: 'SEO & SEM – Freelance',
                subtitle: 'Urbaniana · 2024',
                bullets: [
                  'Managed the website and social media to increase search visibility',
                  'Optimized the web with Moz and metadata for SEO ranking',
                  'Analyzed content performance with SemRush',
                ],
              },
            ],
          },
          {
            title: 'Projects',
            entries: [
              {
                title: 'Inventory Control System',
                bullets: ['Web application to manage incoming and outgoing warehouse goods'],
              },
              {
                title: 'Integrated Cashier System',
                bullets: [
                  'Multi-branch Fried Chicken cashier app integrated with inventory control',
                ],
              },
              {
                title: 'Hospital SIM Application',
                bullets: [
                  'Laravel-based clinic app for patient and prescription entry, integrated with the pharmacy',
                ],
              },
            ],
          },
          {
            title: 'Education',
            entries: [
              {
                title: 'SMA Negeri 2 Cikarang Utara – Social Sciences',
                subtitle: '2020 - 2023',
              },
            ],
          },
          {
            title: 'Courses',
            bullets: [
              'Web Development with VueJS – Programmer Zaman Now (2024)',
              'MySQL Database – Programmer Zaman Now (2024)',
              'Web Development – Web Programming Unpas (2024)',
            ],
          },
          {
            title: 'Skills',
            bullets: [
              'Frontend: VueJS, React, NextJS, Laravel, NuxtJS, SvelteKit, TailwindCSS',
              'Backend: NodeJS & Bun, Go, Ajax & jQuery',
              'Server: Linux (Ubuntu, CentOS, RedHat), Windows Server',
              'Hardware, software & network troubleshooting',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'afra',
    name: 'Afra Nafilatul Husna',
    shortName: 'Afra',
    initials: 'AH',
    photo: '/afra.png',
    contact: {
      phone: '+62 859 2074 1916',
      email: 'afranafilatulhusna@gmail.com',
      location: 'Bekasi, Jawa Barat',
    },
    content: {
      id: {
        role: 'System Analyst | Data Analyst',
        summary:
          'Mahasiswa semester 7 Sistem Informasi Universitas Bina Sarana Informatika dengan IPK 3,88, tertarik pada System Analysis dan Data Analytics. Berpengalaman merancang arsitektur sistem informasi, mengolah data dengan machine learning, dan memimpin organisasi kemahasiswaan. Komunikatif, terstruktur, dan teruji dalam manajemen waktu sebagai tenaga pendidik.',
        sections: [
          {
            title: 'Pendidikan',
            entries: [
              {
                title: 'Universitas Bina Sarana Informatika',
                subtitle: '2023 - Sekarang',
                bullets: ['Program Studi Sistem Informasi (Semester 7) · IPK 3,88 / 4,00'],
              },
            ],
          },
          {
            title: 'Pengalaman Kerja & Organisasi',
            entries: [
              {
                title: 'Wali Kelas (Kelas 2 SD)',
                subtitle: 'SDIT Daarul Ilmi Cikarang · Juli 2025 - Sekarang',
              },
              {
                title: 'Ketua',
                subtitle: 'HIMSI · Februari 2025 - Desember 2025',
              },
              {
                title: 'Sekretaris 2',
                subtitle: 'HIMSI · Januari 2024 - Desember 2024',
              },
            ],
          },
          {
            title: 'Keterampilan',
            bullets: [
              'Hard skills: SQL, PHP, Python (Google Colab), Perancangan UML (Draw.io)',
              'Soft skills: Komunikasi interpersonal, problem solving, manajemen waktu, kepemimpinan, kerja sama tim',
            ],
          },
          {
            title: 'Sertifikasi',
            bullets: [
              'Junior Web Developer – BNSP (2025)',
              'Pemrograman (Micro Skill) – Digital Talent Scholarship, Komdigi (2025)',
              'Introduction to Cloud and AI Applications for Digital Business – DTS Komdigi (2024)',
            ],
          },
        ],
      },
      en: {
        role: 'System Analyst | Data Analyst',
        summary:
          '7th-semester Information Systems student at Universitas Bina Sarana Informatika with a GPA of 3.88, interested in System Analysis and Data Analytics. Experienced in designing information system architectures, processing data with machine learning, and leading student organizations. Communicative, structured, and proven in time management as an educator.',
        sections: [
          {
            title: 'Education',
            entries: [
              {
                title: 'Universitas Bina Sarana Informatika',
                subtitle: '2023 - Present',
                bullets: ['Information Systems (7th semester) · GPA 3.88 / 4.00'],
              },
            ],
          },
          {
            title: 'Work & Organizational Experience',
            entries: [
              {
                title: 'Homeroom Teacher (Grade 2)',
                subtitle: 'SDIT Daarul Ilmi Cikarang · July 2025 - Present',
              },
              {
                title: 'Chairperson',
                subtitle: 'HIMSI · February 2025 - December 2025',
              },
              {
                title: 'Secretary 2',
                subtitle: 'HIMSI · January 2024 - December 2024',
              },
            ],
          },
          {
            title: 'Skills',
            bullets: [
              'Hard skills: SQL, PHP, Python (Google Colab), UML design (Draw.io)',
              'Soft skills: Interpersonal communication, problem solving, time management, leadership, teamwork',
            ],
          },
          {
            title: 'Certifications',
            bullets: [
              'Junior Web Developer – BNSP (2025)',
              'Programming (Micro Skill) – Digital Talent Scholarship, Komdigi (2025)',
              'Introduction to Cloud and AI Applications for Digital Business – DTS Komdigi (2024)',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'desi',
    name: 'Desi Farida Sinaga',
    shortName: 'Desi',
    initials: 'DS',
    photo: '/desi.png',
    contact: {
      phone: '0852-7665-5270',
      email: 'sinagadesi937@gmail.com',
      location: 'Perumahan Mega Regency Blok E40 No.5',
    },
    content: {
      id: {
        role: 'Administrasi & Operasional',
        summary:
          'Mahasiswi semester 6 Sistem Informasi Universitas Bina Sarana Informatika (kelas karyawan) yang mencari kesempatan magang di bidang administrasi, operasional, dan distribusi. Teliti, bertanggung jawab, disiplin, cepat belajar, dan mudah beradaptasi dengan lingkungan kerja baru.',
        sections: [
          {
            title: 'Pendidikan',
            entries: [
              {
                title: 'S1 Sistem Informasi – Universitas Bina Sarana Informatika',
                subtitle: '2023 - Sekarang',
                bullets: ['Semester 6 · Kelas Karyawan · IPK terakhir 3,38'],
              },
              {
                title: 'SMA Swasta Methodist 6 Medan – IPA',
                subtitle: '2015 - 2017',
              },
            ],
          },
          {
            title: 'Pengalaman & Aktivitas',
            entries: [
              {
                title: 'Bendahara Organisasi',
                subtitle: 'SMA Swasta Methodist 6 Medan · Jan 2016 - Sep 2016',
                bullets: [
                  'Mengelola iuran, mencatat keuangan sederhana, dan mendukung penggunaan dana kegiatan',
                ],
              },
              {
                title: 'Peserta Paduan Suara',
                subtitle: 'SMA Swasta Methodist 6 Medan · Des 2016',
                bullets: ['Berpartisipasi dan bekerja sama dengan tim selama persiapan kegiatan'],
              },
            ],
          },
          {
            title: 'Keahlian',
            bullets: [
              'Microsoft Office dasar (Word, Excel, PowerPoint)',
              'Administrasi dan penginputan data',
              'Komunikasi dan kerja sama tim',
              'Teliti, disiplin, dan bertanggung jawab',
              'Manajemen waktu',
            ],
          },
        ],
      },
      en: {
        role: 'Administration & Operations',
        summary:
          '6th-semester Information Systems student at Universitas Bina Sarana Informatika (employee class) seeking internship opportunities in administration, operations, and distribution. Detail-oriented, responsible, disciplined, a fast learner, and quick to adapt to new work environments.',
        sections: [
          {
            title: 'Education',
            entries: [
              {
                title: 'B.Sc. Information Systems – Universitas Bina Sarana Informatika',
                subtitle: '2023 - Present',
                bullets: ['6th semester · Employee class · Latest GPA 3.38'],
              },
              {
                title: 'SMA Swasta Methodist 6 Medan – Science',
                subtitle: '2015 - 2017',
              },
            ],
          },
          {
            title: 'Experience & Activities',
            entries: [
              {
                title: 'Organization Treasurer',
                subtitle: 'SMA Swasta Methodist 6 Medan · Jan 2016 - Sep 2016',
                bullets: [
                  'Managed dues, kept simple financial records, and supported the use of activity funds',
                ],
              },
              {
                title: 'Choir Member',
                subtitle: 'SMA Swasta Methodist 6 Medan · Dec 2016',
                bullets: ['Participated and collaborated with the team during activity preparation'],
              },
            ],
          },
          {
            title: 'Skills',
            bullets: [
              'Basic Microsoft Office (Word, Excel, PowerPoint)',
              'Administration and data entry',
              'Communication and teamwork',
              'Detail-oriented, disciplined, and responsible',
              'Time management',
            ],
          },
        ],
      },
    },
  },
]