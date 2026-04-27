import { Link } from 'react-scroll'
import InstagramIcon from './InstagramIcon'
import WhatsAppSvg from './WhatsAppSvg'
import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/5554991652093?text=Olá%2C+vi+seu+site+e+quero+conversar+sobre+um+projeto+de+vídeo.'

const links = [
  { label: 'Sobre', to: 'sobre' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Portfólio', to: 'portfolio' },
  { label: 'Contato', to: 'inicio' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--vr-black)',
        borderTop: '1px solid var(--vr-gray)',
        padding: '80px 32px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background logo watermark */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Bebas Neue, cursive',
        fontSize: 'clamp(80px, 15vw, 180px)',
        color: 'rgba(255,255,255,0.02)',
        letterSpacing: '0.1em',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        VR.DOT
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display"
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            letterSpacing: '0.1em',
            color: 'var(--vr-white)',
          }}
        >
          VR.DOT
        </motion.span>

        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 36px', justifyContent: 'center' }}>
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                to={link.to}
                smooth
                duration={600}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'var(--vr-muted)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--vr-white)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--vr-muted)'
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: 'var(--vr-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--vr-white)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--vr-muted)')}
          >
            <InstagramIcon size={18} />
          </a>
          <div style={{ width: '1px', height: '16px', background: 'var(--vr-gray)' }} />
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{ color: 'var(--vr-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--vr-orange)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--vr-muted)')}
          >
            <WhatsAppSvg size={18} />
          </a>
        </div>

        <div style={{
          width: '100%',
          height: '1px',
          background: 'var(--vr-gray)',
        }} />

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(107,107,107,0.5)',
            margin: 0,
            letterSpacing: '0.08em',
          }}
        >
          © 2026 VR.DOT · Vinicius Rodrigues Videomaker
        </p>
      </div>
    </footer>
  )
}
