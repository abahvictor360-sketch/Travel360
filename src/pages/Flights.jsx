import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import SearchBox from '../components/SearchBox.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'

const deals = [
  ['NYC', 'New York', 'BKK', 'Bangkok', '17h 40m', 1, 689, '/images/thailand-beach.jpg'],
  ['LAX', 'Los Angeles', 'CDG', 'Paris', '11h 05m', 0, 549, '/images/paris-cafe.jpg'],
  ['LHR', 'London', 'DXB', 'Dubai', '6h 55m', 0, 399, '/images/dubai-burj.jpg'],
  ['JFK', 'New York', 'JTR', 'Santorini', '13h 20m', 1, 729, '/images/santorini-hero.jpg'],
  ['SFO', 'San Francisco', 'SYD', 'Sydney', '14h 50m', 0, 989, '/images/sydney.jpg'],
  ['ORD', 'Chicago', 'VCE', 'Venice', '12h 15m', 1, 619, '/images/venice.jpg'],
]

export default function Flights() {
  return (
    <>
      <PageHero eyebrow="Flights" title="Fly further," script="pay less" text="Compare hundreds of airlines and grab the best fares in seconds." img="/images/sydney.jpg" />
      <div className="container search-wrap"><Reveal><SearchBox initialTab="Flights" /></Reveal></div>
      <section className="container section">
        <SectionHead title="Hot Flight Deals" />
        <motion.div className="flights" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {deals.map(([from, fromCity, to, toCity, dur, stops, price, img]) => (
            <motion.div key={from + to} className="flight" variants={staggerChild} whileHover={{ scale: 1.01 }}>
              <img src={img} alt={toCity} loading="lazy" />
              <div className="flight__route">
                <div><strong>{from}</strong><small>{fromCity}</small></div>
                <div className="flight__line">
                  <small>{dur}</small>
                  <span><Plane size={16} /></span>
                  <small>{stops ? `${stops} stop` : 'Direct'}</small>
                </div>
                <div><strong>{to}</strong><small>{toCity}</small></div>
              </div>
              <div className="flight__price">
                <small>Round trip from</small>
                <strong>${price}</strong>
                <button className="btn btn--primary btn--sm">Select</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
