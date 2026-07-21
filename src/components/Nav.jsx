import { useEffect, useState } from 'react'
import { ArrowUpRight, Phone } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="topbar">
        Hope of Dushkhel · Confidence Building Academy
      </div>

      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="brand" aria-label="CBA home">
            <span className="brand-mark">C</span>
            <span className="brand-text">
              <strong>CBA</strong>
              <small>Hope of Dushkhel</small>
            </span>
          </a>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <a href="#admissions" className="btn btn-accent nav-cta">Apply Now</a>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="nav-toggle-box" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p className="mobile-menu-label">Navigate</p>
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ '--i': i }}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  <span className="mobile-link-text">{l.label}</span>
                  <ArrowUpRight size={18} className="mobile-link-icon" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-actions">
            <a href="#admissions" className="btn btn-accent" onClick={() => setOpen(false)}>
              Apply Now <ArrowUpRight size={16} />
            </a>
            <a href="tel:+923114444412" className="mobile-call" onClick={() => setOpen(false)}>
              <Phone size={16} /> +92 311 4444 412
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
