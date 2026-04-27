import { motion } from 'framer-motion'
import { useState } from 'react'
import InstagramIcon from './InstagramIcon'
import WhatsAppSvg from './WhatsAppSvg'

const WA_LINK = 'https://wa.me/5554991652093?text=Olá%2C+vi+seu+site+e+quero+conversar+sobre+um+projeto+de+vídeo.'

const filters = ['Todos', 'Eventos', 'Imobiliário', 'Carros', 'Casamentos', 'Chá Revelação', 'Futevôlei']

interface PortfolioItem {
  category: string
  title: string
  instagramUrl?: string
}

const items: PortfolioItem[] = [
  {
    category: 'Eventos',
    title: 'Hype Boutique',
  },
  {
    category: 'Eventos',
    title: 'Selezione',
    instagramUrl: 'https://www.instagram.com/reels/DWPTm1UjyqA/',
  },
  {
    category: 'Imobiliário',
    title: 'Imobiliária Destak',
    instagramUrl: 'https://www.instagram.com/reel/DXhE9xgjb2h/',
  },
  {
    category: 'Imobiliário',
    title: 'Imobiliária Destak',
    instagramUrl: 'https://www.instagram.com/reels/DXhE9xgjb2h/',
  },
  {
    category: 'Chá Revelação',
    title: 'Bem-vinda, Sofia',
    instagramUrl: 'https://www.instagram.com/reels/DXAdv_1juLs/',
  },
  {
    category: 'Futevôlei',
    title: 'Bayer Pietro',
    instagramUrl: 'https://www.instagram.com/reel/DUgf3SBE62b/',
  },
  {
    category: 'Futevôlei',
    title: 'Isoton',
    instagramUrl: 'https://www.instagram.com/reels/DU1pw4CD6jL/',
  },
  {
    category: 'Casamentos',
    title: 'Ander e Camila',
    instagramUrl: 'https://www.instagram.com/reels/DWOcXGujsZa/',
  },
  {
    category: 'Carros',
    title: 'Audi',
    instagramUrl: 'https://www.instagram.com/reels/DWkXELckZLF/',
  },
  {
    category: 'Carros',
    title: 'Sportage',
    instagramUrl: 'https://www.instagram.com/reel/DWHV9r1kc3T/',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? items
    : items.filter(item => item.category === activeFilter)

  const isEmpty = filtered.length === 0

  return (
    <section
      id="portfolio"
      style={{
        background: 'var(--vr-black)',
        padding: 'clamp(100px, 12vw, 160px) 32px',
        position: 'relative',
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
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'rgba(107,107,107,0.5)',
          textTransform: 'uppercase',
        }}
      >
        04 / Portfólio
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(42px, 6.5vw, 80px)',
              letterSpacing: '0.015em',
              color: 'var(--vr-white)',
              margin: '0 0 36px',
              lineHeight: 0.95,
            }}
          >
            Trabalhos
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {filters.map((f) => {
              const isActive = activeFilter === f
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    padding: '8px 18px',
                    borderRadius: '2px',
                    border: `1px solid ${isActive ? 'rgba(184,98,42,0.4)' : 'var(--vr-gray)'}`,
                    background: isActive ? 'rgba(184,98,42,0.08)' : 'transparent',
                    color: isActive ? 'var(--vr-orange)' : 'var(--vr-muted)',
                    cursor: 'pointer',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'border-color 0.2s, background 0.2s, color 0.2s',
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </motion.div>

        {!isEmpty ? (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1px',
              background: 'var(--vr-gray)',
              border: '1px solid var(--vr-gray)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            {filtered.map((item, i) => (
              <div
                key={item.title + i}
                style={{
                  background: 'var(--vr-dark)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--vr-orange)',
                }}>
                  {item.category}
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'var(--vr-white)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </span>
                {item.instagramUrl ? (
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--vr-muted)',
                      textDecoration: 'none',
                      border: '1px solid var(--vr-gray)',
                      padding: '6px 14px',
                      borderRadius: '2px',
                      alignSelf: 'flex-start',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--vr-white)'
                      e.currentTarget.style.borderColor = 'var(--vr-muted)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--vr-muted)'
                      e.currentTarget.style.borderColor = 'var(--vr-gray)'
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                    Ver no Instagram
                  </a>
                ) : (
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(107,107,107,0.4)',
                    letterSpacing: '0.08em',
                  }}>
                    Em breve
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeFilter + '_empty'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(60px, 8vw, 100px) 32px',
              textAlign: 'center',
              gap: '36px',
              border: '1px solid var(--vr-gray)',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(184,98,42,0.03) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'var(--vr-orange)',
                margin: '0 auto 28px',
                opacity: 0.6,
              }} />
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                color: 'var(--vr-white)',
                margin: '0 0 14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
              }}>
                Portfólio sendo atualizado.
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'var(--vr-muted)',
                margin: 0,
                maxWidth: '400px',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                Conheça o trabalho pelo Instagram ou me chame para conversar.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--vr-orange)',
                  color: '#fff',
                  padding: '13px 28px',
                  borderRadius: '2px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.85'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <WhatsAppSvg size={15} />
                Falar no WhatsApp
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid var(--vr-gray)',
                  color: 'var(--vr-muted)',
                  padding: '13px 28px',
                  borderRadius: '2px',
                  fontSize: '12px',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--vr-muted)'
                  e.currentTarget.style.color = 'var(--vr-white)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--vr-gray)'
                  e.currentTarget.style.color = 'var(--vr-muted)'
                }}
              >
                <InstagramIcon size={15} />
                Ver no Instagram
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
