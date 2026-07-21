import { Phone, Mail, Facebook, Youtube, Linkedin, MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'School',
    links: [
      { label: 'About CBA', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Features', href: '#features' },
      { label: 'Admissions', href: '#admissions' }
    ]
  },
  {
    title: 'For Families',
    links: [
      { label: 'Fees', href: '#features' },
      { label: 'Attendance Alerts', href: '#features' },
      { label: 'Parent Updates', href: '#features' },
      { label: 'School Store', href: '#features' }
    ]
  },
  {
    title: 'Visit',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Call the office', href: 'tel:+923114444412' },
      { label: 'Email us', href: 'mailto:hello@cba.edu.pk' },
      { label: 'Dushkhel campus', href: '#contact' }
    ]
  }
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' }
]

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container foot-top">
        <div className="foot-brand-block">
          <div className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-text">
              <strong>CBA</strong>
              <small>Hope of Dushkhel</small>
            </span>
          </div>
          <p>
            Confidence Building Academy. A school where students learn, grow,
            and find their voice — every day in Dushkhel.
          </p>
          <div className="foot-contact">
            <a href="tel:+923114444412"><Phone size={16} /> +92 311 4444 412</a>
            <a href="mailto:hello@cba.edu.pk"><Mail size={16} /> hello@cba.edu.pk</a>
          </div>
        </div>

        {columns.map((col) => (
          <div className="foot-col" key={col.title}>
            <h5>{col.title}</h5>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container foot-bottom">
        <div>© 2026 Confidence Building Academy · Dushkhel. All rights reserved.</div>
        <div className="socials">
          {socials.map(({ icon: Icon, label, href }) => (
            <a href={href} key={label} aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
