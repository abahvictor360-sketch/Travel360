import { Link } from 'react-router-dom'
import { Plane } from 'lucide-react'

export default function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Travel360 home">
      <span className="logo__mark"><Plane size={22} /></span>
      <span>
        <span className="logo__name">Travel360</span>
        <span className="logo__tag">Travel the world</span>
      </span>
    </Link>
  )
}
