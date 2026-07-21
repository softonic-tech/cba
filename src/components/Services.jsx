import { highlights } from '../data/features'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <h2>Discover how CBA supports every family</h2>
          <p>Real school life, kept clear for parents, teachers, and students.</p>
        </div>

        <div className="services-grid">
          {highlights.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
