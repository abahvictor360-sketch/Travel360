import { Link } from 'react-router-dom'
import { ArrowRight, Plane } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function SectionHead({ title, script, link, linkLabel, center }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      <h2>
        {title} {script && <span className="script">{script}</span>}
        <span className="section-head__trail"><Plane size={16} /></span>
      </h2>
      {link && (
        <Link to={link} className="btn btn--outline">
          {linkLabel} <ArrowRight size={16} />
        </Link>
      )}
    </Reveal>
  )
}
