const items = [
  'Confidence Building Academy',
  'Hope of Dushkhel',
  'Admissions Open',
  'Learn with Care',
  'Grow with Confidence',
  'Families Stay Connected',
  'CBA'
]

export default function BrandBar() {
  const track = [...items, ...items]

  return (
    <div className="brand-bar" aria-hidden="true">
      <div className="brand-bar-track">
        {track.map((item, i) => (
          <span className="brand-bar-item" key={`${item}-${i}`}>
            <span className="brand-bar-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
