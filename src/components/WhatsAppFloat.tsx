import WhatsAppSvg from './WhatsAppSvg'

const WA_LINK = 'https://wa.me/5554991652093?text=Olá%2C+vi+seu+site+e+quero+conversar+sobre+um+projeto+de+vídeo.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="pulse-orange"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'var(--vr-orange)',
        color: '#fff',
        padding: '14px 20px',
        borderRadius: '50px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(184,98,42,0.35)',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '0.9'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <WhatsAppSvg size={18} />
      Orçamento rápido
    </a>
  )
}
