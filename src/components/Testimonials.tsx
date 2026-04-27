interface Testimonial {
  name: string
  company: string
  text: string
  photo?: string
  logo?: string
}

const testimonials: Testimonial[] = []

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section
      id="depoimentos"
      style={{
        background: 'var(--vr-dark)',
        padding: 'clamp(80px, 10vw, 140px) 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '0.02em',
            color: 'var(--vr-white)',
            margin: '0 0 64px',
          }}
        >
          Quem já confiou
        </h2>
      </div>
    </section>
  )
}
