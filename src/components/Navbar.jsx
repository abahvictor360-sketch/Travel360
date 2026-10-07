import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, User, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/tours', 'Tours'],
  ['/flights', 'Flights'],
  ['/hotels', 'Hotels'],
  ['/blog', 'Blog'],
  ['/about', 'About Us'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__right">
          <a href="tel:+12345678900" className="nav__help">
            <span className="icon-circle"><Phone size={16} /></span>
            <span>
              <small>Need Help?</small>
              <strong>+1 234 567 8900</strong>
            </span>
          </a>
          <button className="icon-circle icon-circle--white" aria-label="Account"><User size={18} /></button>
          <button className="nav__toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
