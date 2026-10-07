import { motion } from 'framer-motion'
import { MapPin, Star, Wifi, Coffee, Waves } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'
import { hotels } from '../data/destinations.js'

export default function Hotels() {
  return (
    <>
      <PageHero eyebrow="Hotels" title="Stay somewhere" script="unforgettable" text="Boutique riads, caldera suites and beachfront villas, all handpicked." img="/images/dubai-aerial.jpg" />
      <div className="container search-wrap"><Reveal><SearchBox initialTab="Hotels" /></Reveal></div>
      <section className="container section">
        <SectionHead title="Top Rated Stays" />
        <motion.div className="card-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {hotels.map((h) => (
            <motion.article key={h.name} className="card" variants={staggerChild} whileHover={{ y: -6 }}>
              <div className="card__img"><img src={h.img} alt={h.name} loading="lazy" /></div>
              <div className="card__body">
                <p className="card__meta"><MapPin size={14} /> {h.location}</p>
                <h3>{h.name}</h3>
                <div className="card__row">
                  <span><Wifi size={14} /> <Coffee size={14} /> <Waves size={14} /></span>
                  <span><Star size={14} className="star" /> {h.rating}</span>
                </div>
                <div className="card__foot">
                  <span><strong>${h.price}</strong> / night</span>
                  <button className="btn btn--primary btn--sm">Reserve</button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  )
}
