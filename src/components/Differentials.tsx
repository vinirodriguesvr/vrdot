import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Block {
  num: string
  title: string
  text: string
}

const blocks: Block[] = [
  {
    num: '01',
    title: 'Visão Estratégica',
    text: 'Cada vídeo é pensado para gerar resultado. Não filmo por filmar: entendo o seu objetivo antes de ligar a câmera.',
  },
  {
    num: '02',
    title: 'Estética + Narrativa',
    text: 'Vídeos que combinam qualidade técnica com storytelling. Sua marca merece mais do que imagem bonita: merece história.',
  },
  {
    num: '03',
    title: 'Proximidade e Agilidade',
    text: 'Trabalho próximo ao cliente, do briefing à entrega. Sem burocracia, sem enrolação.',
  },
]

function CountUp({ target, inView }: { target: string; inView: boolean }) {
  const [displayed, setDisplayed] = useState('00')

  useEffect(() => {
    if (!inView) return
    const num = parseInt(target, 10)
    let current = 0
    const duration = 600
    const steps = num
    const interval = duration / steps
    const timer = setInterval(() => {
      current++
      setDisplayed(String(current).padStart(2, '0'))
      if (current >= num) clearInterval(timer)
    }, interval)
    const timeout = setTimeout(() => {}, 200)
    return () => { clearInterval(timer); clearTimeout(timeout) }
  }, [inView, target])

  return <>{displayed}</>
}

function DiffBlock({ block, index }: { block: Block; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      style={{
        flex: 1,
        minWidth: '240px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        padding: 'clamp(32px, 4vw, 56px)',
        position: 'relative',
        borderRight: index < blocks.length - 1 ? '1px solid var(--vr-gray)' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Watermark number */}
      <span className="font-display" style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-10px',
        fontSize: 'clamp(120px, 15vw, 180px)',
        color: 'rgba(184,98,42,0.04)',
        letterSpacing: '0.01em',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {block.num}
      </span>

      {/* Count-up */}
      <span className="font-display" style={{
        fontSize: 'clamp(56px, 7vw, 88px)',
        lineHeight: 1,
        color: 'var(--vr-orange)',
        letterSpacing: '0.02em',
        marginBottom: '24px',
        display: 'block',
      }}>
        <CountUp target={block.num} inView={inView} />
      </span>

      {/* Divider */}
      <div style={{
        width: '32px',
        height: '1px',
        background: 'var(--vr-orange)',
        marginBottom: '20px',
        opacity: 0.5,
      }} />

      <h3
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(17px, 2vw, 21px)',
          fontWeight: 600,
          color: 'var(--vr-white)',
          margin: '0 0 16px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {block.title}
      </h3>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: 'var(--vr-muted)',
          lineHeight: 1.8,
          margin: 0,
          fontWeight: 300,
          maxWidth: '320px',
        }}
      >
        {block.text}
      </p>
    </motion.div>
  )
}

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      style={{
        background: 'var(--vr-dark)',
        padding: 'clamp(100px, 12vw, 160px) 0',
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
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'rgba(107,107,107,0.5)',
          textTransform: 'uppercase',
        }}
      >
        03 / Diferenciais
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(42px, 6.5vw, 80px)',
              letterSpacing: '0.015em',
              color: 'var(--vr-white)',
              margin: 0,
              lineHeight: 0.95,
            }}
          >
            Por que o videomaker{' '}
            <span style={{ color: 'var(--vr-orange)' }}>Vinícius Rodrigues</span>
          </h2>
        </motion.div>
      </div>

      {/* Blocks — full width with inner borders */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: '1px solid var(--vr-gray)',
        borderBottom: '1px solid var(--vr-gray)',
        padding: '0 32px',
      }}>
        {blocks.map((block, i) => (
          <DiffBlock key={block.num} block={block} index={i} />
        ))}
      </div>
    </section>
  )
}
