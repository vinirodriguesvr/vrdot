import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

const stats = [
  { value: '5+', label: 'Anos de experiência' },
  { value: '80+', label: 'Projetos entregues' },
  { value: '100%', label: 'Foco no resultado' },
]

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        background: 'var(--vr-dark)',
        padding: 'clamp(100px, 12vw, 160px) 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '40px',
          left: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'rgba(107,107,107,0.5)',
          textTransform: 'uppercase',
        }}>01 / Sobre</span>
      </motion.div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
          gap: 'clamp(48px, 6vw, 96px)',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{
              width: '2px',
              background: 'linear-gradient(to bottom, var(--vr-orange), transparent)',
              flexShrink: 0,
              alignSelf: 'stretch',
              minHeight: '120px',
            }} />

            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(38px, 5vw, 64px)',
                  lineHeight: 0.95,
                  letterSpacing: '0.015em',
                  color: 'var(--vr-white)',
                  margin: '0 0 28px',
                }}
              >
                Não vendo vídeo.{' '}
                <br />
                <span style={{ color: 'var(--vr-orange)', fontStyle: 'italic' }}>
                  Vendo posicionamento.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(15px, 1.6vw, 17px)',
                  color: 'var(--vr-muted)',
                  lineHeight: 1.85,
                  margin: '0 0 48px',
                  fontWeight: 300,
                  maxWidth: '520px',
                }}
              >
                Sou Vinicius Rodrigues, videomaker com visão de marketing.
                Cada projeto é pensado para gerar conexão, aumentar percepção de
                valor e destacar a sua marca no mercado.
                <br /><br />
                Trabalho com empresas e marcas que levam imagem a sério.
              </p>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0',
                borderTop: '1px solid var(--vr-gray)',
                paddingTop: '32px',
              }}>
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    style={{
                      padding: '0 24px 0 0',
                      borderRight: i < stats.length - 1 ? '1px solid var(--vr-gray)' : 'none',
                      marginRight: i < stats.length - 1 ? '24px' : '0',
                    }}
                  >
                    <span className="font-display" style={{
                      fontSize: 'clamp(28px, 3.5vw, 40px)',
                      color: 'var(--vr-white)',
                      letterSpacing: '0.02em',
                      display: 'block',
                      lineHeight: 1,
                    }}>
                      {stat.value}
                    </span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: 'var(--vr-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '6px',
                      display: 'block',
                    }}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Foto real */}
            <img
              src="/vinicius2.jpg"
              alt="Vinicius Rodrigues com câmera DJI Ronin em evento"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Cinematic overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, transparent 25%, transparent 65%, rgba(8,8,8,0.7) 100%)`,
            }} />
            {/* Letterbox bars */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '28px', background: 'rgba(8,8,8,0.55)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28px', background: 'rgba(8,8,8,0.55)', zIndex: 1 }} />
            {/* Grain */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: '128px',
              opacity: 0.5,
              mixBlendMode: 'overlay',
              zIndex: 2,
            }} />
            {/* Corner markers */}
            {[
              { top: 36, left: 12 },
              { top: 36, right: 12 },
              { bottom: 36, left: 12 },
              { bottom: 36, right: 12 },
            ].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...pos,
                width: '16px',
                height: '16px',
                borderTop: i < 2 ? '1px solid rgba(184,98,42,0.35)' : 'none',
                borderBottom: i >= 2 ? '1px solid rgba(184,98,42,0.35)' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid rgba(184,98,42,0.35)' : 'none',
                borderRight: i % 2 === 1 ? '1px solid rgba(184,98,42,0.35)' : 'none',
                zIndex: 3,
              }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
