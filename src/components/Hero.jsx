import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const lines = [
  'Empower Your Child with CBA',
  'Hope of Dushkhel starts here',
  'Learn with care. Grow with confidence.'
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = lines[lineIndex]
    const typingSpeed = deleting ? 36 : 70
    const pauseAtEnd = 1800
    const pauseAtStart = 400

    if (!deleting && display === full) {
      const t = setTimeout(() => setDeleting(true), pauseAtEnd)
      return () => clearTimeout(t)
    }

    if (deleting && display === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setLineIndex((i) => (i + 1) % lines.length)
      }, pauseAtStart)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplay((prev) =>
        deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(t)
  }, [display, deleting, lineIndex])

  return (
    <section className="hero" id="about">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Pakistan&apos;s community school in Dushkhel</p>
          <h1 className="hero-type">
            <span className="hero-type-text">{display}</span>
            <span className="hero-caret" aria-hidden="true" />
          </h1>
          <p className="hero-lede">
            Confidence Building Academy — a school where students learn with care,
            families stay informed, and every child grows in character and confidence.
          </p>
          <div className="hero-actions">
            <a href="#admissions" className="btn btn-accent">
              Apply for admission <ArrowUpRight size={18} />
            </a>
            <a href="#features" className="btn btn-light">
              Explore more
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/header-bg-4.png"
            alt="Students and school life at Confidence Building Academy"
          />
        </div>
      </div>
    </section>
  )
}
