import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5554991652093?text=Olá%2C+vi+seu+site+e+quero+conversar+sobre+um+projeto+de+vídeo.'

export default function CtaFinal() {
  return (
    <section
      style={{
        background: 'var(--vr-orange)',
        padding: 'clamp(56px, 6vw, 80px) 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
        opacity: 0.4,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      {/* Decorative large text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Bebas Neue, cursive',
        fontSize: 'clamp(160px, 25vw, 320px)',
        color: 'rgba(0,0,0,0.05)',
        letterSpacing: '0.01em',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        VAMOS
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.22em',
          color: 'rgba(8,8,8,0.5)',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>
          Próximo passo
        </span>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            letterSpacing: '0.015em',
            color: '#080808',
            margin: 0,
            lineHeight: 0.95,
          }}
        >
          Pronto para posicionar sua marca?
        </h2>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 19px)',
            color: 'rgba(8,8,8,0.6)',
            margin: 0,
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Me conta seu projeto. Respondo rápido.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#080808',
              color: '#fff',
              padding: '17px 44px',
              borderRadius: '2px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Falar no WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(8,8,8,0.4)',
            letterSpacing: '0.08em',
          }}>
            Sem compromisso. Só uma conversa.
          </span>
        </div>
      </motion.div>
    </section>
  )
}
