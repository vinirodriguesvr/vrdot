import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ServiceCard {
  num: string
  title: string
  description: string
  tags: string[]
}

const services: ServiceCard[] = [
  {
    num: '01',
    title: 'Vídeo Institucional',
    description: 'A história da sua empresa contada com estratégia e estética. Para marcas que querem ser lembradas.',
    tags: ['Captação', 'Edição', 'Tratamento de cor', 'Direção criativa'],
  },
  {
    num: '02',
    title: 'Reels e Conteúdo Social',
    description: 'Conteúdo que para o scroll. Captação, edição e direção criativa para Instagram e outras plataformas.',
    tags: ['Captação', 'Edição', 'Roteiro', 'Direção criativa'],
  },
  {
    num: '03',
    title: 'Cobertura de Eventos',
    description: 'Grandes momentos registrados com qualidade cinematográfica. Para você reviver e divulgar.',
    tags: ['Captação', 'Edição', 'Drone', 'Tratamento de cor'],
  },
  {
    num: '04',
    title: 'Vídeos Imobiliários',
    description: 'Imóveis vendidos com imagem. Captação aérea com drone, tour visual e edição premium.',
    tags: ['Captação', 'Drone', 'Edição', 'Tour visual'],
  },
]

function Card({ service, index }: { service: ServiceCard; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(184,98,42,0.03)' : 'var(--vr-dark)',
        border: `1px solid ${hovered ? 'rgba(184,98,42,0.4)' : 'var(--vr-gray)'}`,
        borderRadius: '2px',
        padding: '48px 36px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        transition: 'border-color 0.25s, background 0.25s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Number watermark */}
      <span className="font-display" style={{
        position: 'absolute',
        top: '12px',
        right: '20px',
        fontSize: '48px',
        color: hovered ? 'rgba(184,98,42,0.08)' : 'rgba(255,255,255,0.04)',
        letterSpacing: '0.02em',
        lineHeight: 1,
        transition: 'color 0.3s',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {service.num}
      </span>

      <h3
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '17px',
          fontWeight: 600,
          color: 'var(--vr-white)',
          margin: '0 0 14px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: 'var(--vr-muted)',
          lineHeight: 1.75,
          margin: '0 0 28px',
          flexGrow: 1,
          fontWeight: 300,
        }}
      >
        {service.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {service.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              color: hovered ? 'rgba(184,98,42,0.7)' : 'rgba(107,107,107,0.6)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              border: `1px solid ${hovered ? 'rgba(184,98,42,0.2)' : 'var(--vr-gray)'}`,
              borderRadius: '2px',
              transition: 'color 0.25s, border-color 0.25s',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '36px',
              right: '32px',
              color: 'var(--vr-orange)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="servicos"
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
        02 / Serviços
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          style={{ marginBottom: '72px' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(42px, 6.5vw, 80px)',
              letterSpacing: '0.015em',
              color: 'var(--vr-white)',
              margin: '0 0 18px',
              lineHeight: 0.95,
            }}
          >
            O que eu entrego
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: 'var(--vr-muted)',
              margin: 0,
              maxWidth: '480px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Projetos avulsos ou pacotes mensais, sem preço fixo,
            porque cada projeto tem sua necessidade.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--vr-gray)',
            border: '1px solid var(--vr-gray)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          {services.map((service, i) => (
            <Card key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
