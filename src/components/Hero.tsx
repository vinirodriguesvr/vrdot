import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const WA_LINK = 'https://wa.me/5554991652093?text=Olá%2C+vi+seu+site+e+quero+conversar+sobre+um+projeto+de+vídeo.'

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  const words1 = 'Sua marca não precisa de mais um vídeo.'.split(' ')
  const words2 = 'Precisa de um vídeo que posicione.'.split(' ')

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.055, delayChildren: 0.3 } },
  }

  const wordIn = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28, filter: 'blur(4px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  }

  const fadeUp = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  }

  return (
    <section
      ref={ref}
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--vr-black)',
      }}
    >
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 100% 70% at 50% -10%, rgba(184,98,42,0.09) 0%, transparent 55%)`,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 80% 80%, rgba(184,98,42,0.04) 0%, transparent 50%)`,
        }} />
        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
          opacity: 0.5,
        }} />
      </div>

      {/* Film frame corners */}
      {[
        { top: 32, left: 32 },
        { top: 32, right: 32 },
        { bottom: 32, left: 32 },
        { bottom: 32, right: 32 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          style={{
            position: 'absolute',
            ...pos,
            width: '24px',
            height: '24px',
            borderTop: i < 2 ? '1px solid rgba(184,98,42,0.3)' : 'none',
            borderBottom: i >= 2 ? '1px solid rgba(184,98,42,0.3)' : 'none',
            borderLeft: i % 2 === 0 ? '1px solid rgba(184,98,42,0.3)' : 'none',
            borderRight: i % 2 === 1 ? '1px solid rgba(184,98,42,0.3)' : 'none',
            zIndex: 3,
          }}
        />
      ))}

      {/* Reel counter top-left */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          top: '34px',
          left: '68px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'rgba(184,98,42,0.5)',
          textTransform: 'uppercase',
          zIndex: 3,
        }}
      >
        VR.DOT · REEL 2026
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '32px',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.22em',
          color: 'var(--vr-orange)',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>
          Videomaker Estratégico
        </span>
      </motion.div>

      {/* Headlines */}
      <motion.div
        style={{ position: 'relative', zIndex: 2, maxWidth: '1080px', width: '100%' }}
        ref={null}
      >
        <motion.div style={{ y: reduced ? 0 : y }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(42px, 8.5vw, 104px)',
              lineHeight: 0.95,
              letterSpacing: '0.015em',
              color: 'var(--vr-white)',
              marginBottom: '4px',
            }}
          >
            {words1.map((word, i) => (
              <motion.span
                key={i}
                variants={wordIn}
                style={{ display: 'inline-block', marginRight: '0.22em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(42px, 8.5vw, 104px)',
              lineHeight: 0.95,
              letterSpacing: '0.015em',
              marginBottom: '52px',
            }}
          >
            {words2.map((word, i) => (
              <motion.span
                key={i}
                variants={wordIn}
                style={{
                  display: 'inline-block',
                  marginRight: '0.22em',
                  color: i === words2.length - 1 ? 'var(--vr-orange)' : 'var(--vr-white)',
                  fontStyle: i === words2.length - 1 ? 'italic' : 'normal',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'var(--vr-muted)',
            maxWidth: '540px',
            margin: '0 auto 52px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Vídeos institucionais, comerciais e conteúdo para redes sociais
          com estratégia, estética e direção criativa.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--vr-orange)',
              color: '#fff',
              padding: '17px 40px',
              borderRadius: '2px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 40px rgba(184,98,42,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(184,98,42,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(184,98,42,0.2)'
            }}
          >
            Vamos conversar sobre seu projeto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(107,107,107,0.6)',
            letterSpacing: '0.1em',
          }}>
            Sem compromisso · Resposta em até 24h
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.25em',
          color: 'rgba(107,107,107,0.5)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <div style={{ width: '1px', height: '48px', background: 'var(--vr-gray)', overflow: 'hidden', position: 'relative' }}>
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'linear', delay: 2.6 }}
            style={{ width: '100%', height: '50%', background: 'var(--vr-orange)' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
