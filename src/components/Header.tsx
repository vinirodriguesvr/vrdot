import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, useScroll, useTransform } from 'framer-motion'


const navLinks = [
  { label: 'Sobre', to: 'sobre' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Portfólio', to: 'portfolio' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
      }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          background: 'var(--vr-orange)',
          width: progressWidth,
          opacity: scrolled ? 1 : 0,
          transformOrigin: 'left',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
          className="header-nav"
        >
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={700}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--vr-muted)',
                cursor: 'pointer',
                textDecoration: 'none',
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
          ))}
        </nav>

      </div>
    </header>
  )
}
