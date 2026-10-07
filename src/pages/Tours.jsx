import { motion } from 'framer-motion'
import { Clock, MapPin, Star } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'
import { tours } from '../data/destinations.js'

export default function Tours() {
  return (
    <>
      <PageHero eyebrow="Tours" title="Guided tours" script="worth the trip" text="Small groups, local guides and experiences you won’t find in a guidebook." img="/images/thailand-boat.jpg" />
      <div className="container search-wrap"><Reveal><SearchBox initialTab="Tours" /></Reveal></div>
      <section className="container section">
        <SectionHead title="Featured Tours" />
        <motion.div className="card-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {tours.map((t) => (
            <motion.article key={t.title} className="card" variants={staggerChild} whileHover={{ y: -6 }}>
              <div className="card__img"><img src={t.img} alt={t.title} loading="lazy" /></div>
              <div className="card__body">
                <p className="card__meta"><MapPin size={14} /> {t.location}</p>
                <h3>{t.title}</h3>
                <div className="card__row">
                  <span><Clock size={14} /> {t.days} {t.days > 1 ? 'days' : 'day'}</span>
                  <span><Star size={14} className="star" /> {t.rating} ({t.reviews})</span>
                </div>
                <div className="card__foot">
                  <span>From <strong>${t.price}</strong></span>
                  <button className="btn btn--primary btn--sm">Book Now</button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  )
}
