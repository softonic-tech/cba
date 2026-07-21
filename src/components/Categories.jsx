import { features } from '../data/features'

export default function Categories() {
  return (
    <section className="features-page" id="features">
      <div className="container features-intro">
        <span className="features-pill">Features</span>
        <h2>Everything your school needs, in one place</h2>
        <p className="features-lead">
          A clear, modern toolkit for academics, attendance, fees, and family updates —
          designed for Confidence Building Academy.
        </p>
      </div>

      <div className="container features-wrap">
        <div className="features-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-media">
                <div className="feature-media-frame">
                  <img src={f.image} alt="" loading="lazy" />
                </div>
              </div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
