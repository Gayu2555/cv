import { useEffect, useRef, useState } from 'react'
import { cvs, ui, type CV, type CVContent, type Lang, type Section } from './data/cvs'
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

function ShareIcon() {
  return (
    <svg {...icon}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98" />
      <path d="m15.41 6.51-6.82 3.98" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg {...icon}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg {...icon}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg {...icon}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg {...icon}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function readStore(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStore(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage unavailable (private mode) — ignore
  }
}

function hashId(): string {
  const hash = window.location.hash.slice(1)
  return cvs.some((cv) => cv.id === hash) ? hash : cvs[0].id
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

function CvView({ cv, content }: { cv: CV; content: CVContent }) {
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
          <p className="role">{content.role}</p>
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
          <p className="summary">{content.summary}</p>
        </div>
      </header>
      <div className="grid">
        {content.sections.map((section) => (
          <SectionCard key={section.title} section={section} />
        ))}
      </div>
    </article>
  )
}

function App() {
  const [activeId, setActiveId] = useState(hashId)
  const [lang, setLang] = useState<Lang>(() => (readStore('ecv-lang') === 'en' ? 'en' : 'id'))
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = readStore('ecv-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [shareOpen, setShareOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)
  const shareRef = useRef<HTMLDivElement>(null)

  const active = cvs.find((cv) => cv.id === activeId) ?? cvs[0]
  const t = ui[lang]
  const content = active.content[lang]

  useEffect(() => {
    const onHash = () => setActiveId(hashId())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.title = `${active.name} — E-CV`
  }, [active])

  useEffect(() => {
    document.documentElement.lang = lang
    writeStore('ecv-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStore('ecv-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!shareOpen) return
    const onDown = (event: PointerEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShareOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShareOpen(false)
    }
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [shareOpen])

  const showToast = (message: string) => {
    setToast(message)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 2200)
  }

  const select = (id: string) => {
    setActiveId(id)
    window.location.hash = id
  }

  const shareUrl = () =>
    `${window.location.origin}${window.location.pathname}#${active.id}`

  const copyLink = async () => {
    const url = shareUrl()
    setShareOpen(false)
    try {
      await navigator.clipboard.writeText(url)
      showToast(t.copied)
    } catch {
      const area = document.createElement('textarea')
      area.value = url
      document.body.appendChild(area)
      area.select()
      const ok = document.execCommand('copy')
      area.remove()
      showToast(ok ? t.copied : t.copyFail)
    }
  }

  const shareWhatsApp = () => {
    const text = `${active.name} — ${shareUrl()}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setShareOpen(false)
  }

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
          <div className="tabs" role="tablist" aria-label={t.selectCv}>
            {cvs.map((cv) => (
              <button
                key={cv.id}
                type="button"
                role="tab"
                aria-selected={cv.id === activeId}
                className={`tab${cv.id === activeId ? ' active' : ''}`}
                onClick={() => select(cv.id)}
              >
                {cv.shortName}
              </button>
            ))}
          </div>
          <div className="actions">
            <div className="lang-switch" role="group" aria-label={t.langLabel}>
              {(['id', 'en'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={lang === code ? 'active' : ''}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title={theme === 'light' ? t.themeDark : t.themeLight}
              aria-label={theme === 'light' ? t.themeDark : t.themeLight}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="share-wrap" ref={shareRef}>
              <button
                type="button"
                className="icon-btn"
                aria-haspopup="menu"
                aria-expanded={shareOpen}
                title={t.share}
                aria-label={t.share}
                onClick={() => setShareOpen((open) => !open)}
              >
                <ShareIcon />
              </button>
              {shareOpen && (
                <div className="share-menu" role="menu">
                  <button type="button" role="menuitem" onClick={copyLink}>
                    <LinkIcon />
                    {t.copyLink}
                  </button>
                  <button type="button" role="menuitem" onClick={shareWhatsApp}>
                    <WhatsAppIcon />
                    WhatsApp
                  </button>
                </div>
              )}
            </div>
            <button
              type="button"
              className="print-btn"
              onClick={() => window.print()}
              title="PDF"
            >
              <PrinterIcon />
              <span>PDF</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="page">
        <CvView key={`${active.id}-${lang}`} cv={active} content={content} />
      </main>
      <footer className="footer">
        E-CV · Gayu · Afra · Desi — {new Date().getFullYear()}
      </footer>
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </div>
  )
}

export default App