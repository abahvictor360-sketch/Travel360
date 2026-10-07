import { Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="newsletter" from="zoom">
          <div className="newsletter__intro">
            <Send size={34} className="newsletter__icon" />
            <div>
              <h4>Subscribe to Our Newsletter</h4>
              <p>Get the latest travel deals and inspiration straight to your inbox.</p>
            </div>
          </div>
          <form className="newsletter__form" onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert('Thanks for subscribing!') }}>
            <input type="email" required placeholder="Enter your email" aria-label="Email" />
            <button className="btn btn--primary">Subscribe</button>
          </form>
          <div className="newsletter__social">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"><Icon size={18} /></a>
            ))}
          </div>
        </Reveal>

        <div className="footer__grid">
          <div>
            <Logo />
            <p className="muted">Handpicked tours, hotels and flights for travelers who want to see the world, all 360° of it.</p>
          </div>
          <div>
            <h5>Explore</h5>
            <Link to="/destinations">Destinations</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/flights">Flights</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#">Help Center</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="tel:+12345678900">+1 234 567 8900</a>
          </div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Travel360. All rights reserved.</p>
      </div>
    </footer>
  )
}
