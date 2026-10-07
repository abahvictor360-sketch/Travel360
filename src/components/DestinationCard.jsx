import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { staggerChild } from './Reveal.jsx'

export default function DestinationCard({ d, tall }) {
  return (
    <motion.article variants={staggerChild} whileHover={{ y: -8 }} className={`dest ${tall ? 'dest--tall' : ''}`}>
      <img src={d.img} alt={`${d.name} — ${d.place}`} loading="lazy" />
      <span className="badge">{d.tag}</span>
      <div className="dest__info">
        <div>
          <h3>{d.name}</h3>
          <p><MapPin size={13} /> {d.place}</p>
        </div>
        <div className="dest__price">
          <small>From</small>
          <strong>${d.price}</strong>
        </div>
      </div>
    </motion.article>
  )
}
