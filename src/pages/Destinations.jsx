import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { staggerParent } from '../components/Reveal.jsx'
import { destinations } from '../data/destinations.js'

const filters = ['All', 'Bestseller', 'Popular', 'Trending', 'Romantic', 'Hidden Gem']

export default function Destinations() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? destinations : destinations.filter((d) => d.tag === filter)

  return (
    <>
      <PageHero eyebrow="Destinations" title="Where will you" script="go next?" text="From Aegean sunsets to Andaman beaches, explore our most loved places." img="/images/santorini-village.jpg" />
      <section className="container section">
        <SectionHead title="All Destinations" />
        <div className="chips">
          {filters.map((f) => (
            <button key={f} className={`chip ${filter === f ? 'chip--active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <motion.div key={filter} className="dest-grid" variants={staggerParent} initial="hidden" animate="show">
          {list.map((d) => <DestinationCard key={d.name} d={d} tall />)}
        </motion.div>
      </section>
    </>
  )
}
