import { useEffect, useState } from 'react'
import { cvs, type CV, type Section } from './data/cvs'
import './App.css'

const icon = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

function PhoneIcon() {
  return (
    <svg {...icon}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg {...icon}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg {...icon}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PrinterIcon() {
  return (
    <svg {...icon}>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function SectionCard({ section }: { section: Section }) {
  return (
    <section className="card">
      <h2 className="card-title">{section.title}</h2>
      {section.entries?.map((entry) => (
        <div className="entry" key={entry.title}>
          <h3 className="entry-title">{entry.title}</h3>
          {entry.subtitle && <p className="entry-sub">{entry.subtitle}</p>}
          {entry.bullets && <Bullets items={entry.bullets} />}
        </div>
      ))}
      {section.bullets && <Bullets items={section.bullets} />}
    </section>
  )
}

function CvView({ cv }: { cv: CV }) {
  return (
    <article className="cv">
      <header className="cv-header">
        {cv.photo ? (
          <img className="avatar photo" src={cv.photo} alt={`Foto ${cv.name}`} />
        ) : (
          <div className="avatar initials" aria-hidden="true">
            {cv.initials}
          </div>
        )}
        <div className="cv-head-body">
          <h1>{cv.name}</h1>
          <p className="role">{cv.role}</p>
          <ul className="contacts">
            <li>
              <PhoneIcon />
              <span>{cv.contact.phone}</span>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
            </li>
            <li>
              <PinIcon />
              <span>{cv.contact.location}</span>
            </li>
          </ul>
          <p className="summary">{cv.summary}</p>
        </div>
      </header>
      <div className="grid">
        {cv.sections.map((section) => (
          <SectionCard key={section.title} section={section} />
        ))}
      </div>
    </article>
  )
}

function App() {
  const [activeId, setActiveId] = useState(cvs[0].id)
  const active = cvs.find((cv) => cv.id === activeId) ?? cvs[0]

  useEffect(() => {
    document.title = `${active.name} — E-CV`
  }, [active])

  return (
    <div className="site">
      <nav className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark">E</span>
            <span className="brand-text">
              E-CV
              <span className="brand-sub">Curriculum Vitae</span>
            </span>
          </div>
          <div className="tabs" role="tablist" aria-label="Pilih CV">
            {cvs.map((cv) => (
              <button
                key={cv.id}
                type="button"
                role="tab"
                aria-selected={cv.id === activeId}
                className={`tab${cv.id === activeId ? ' active' : ''}`}
                onClick={() => setActiveId(cv.id)}
              >
                {cv.shortName}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="print-btn"
            onClick={() => window.print()}
            title="Cetak atau simpan sebagai PDF"
          >
            <PrinterIcon />
            <span>PDF</span>
          </button>
        </div>
      </nav>
      <main className="page">
        <CvView key={active.id} cv={active} />
      </main>
      <footer className="footer">
        E-CV · Gayu · Afra · Desi — {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App