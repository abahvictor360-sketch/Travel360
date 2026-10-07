import { motion } from 'framer-motion'
import { Compass, Heart, Leaf } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'

const values = [
  [Compass, 'Curiosity first', 'We scout every destination ourselves so you get the real thing.'],
  [Heart, 'Traveler obsessed', 'Real humans on call 24/7, before, during and after your trip.'],
  [Leaf, 'Travel responsibly', 'We partner with local guides and eco-conscious stays.'],
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="See the world," script="all 360°" text="We’re a team of travelers building the easiest way to plan an unforgettable trip." img="/images/paris-aerial.jpg" />
      <section className="container section about">
        <Reveal from="left" className="about__imgs">
          <img src="/images/venice.jpg" alt="Gondolas on the Grand Canal in Venice" />
          <img src="/images/raja-ampat.jpg" alt="Sailboat among the islands of Raja Ampat" />
        </Reveal>
        <Reveal from="right">
          <h2>Our <span className="script">Story</span></h2>
          <p className="muted">Travel360 started with a simple idea: planning a trip should feel as exciting as taking one. Today we help thousands of travelers find flights, hotels and handpicked tours in more than 150 destinations.</p>
          <p className="muted">Whether it’s your first passport stamp or your fiftieth, we’re here to make every journey effortless, from search to suitcase.</p>
        </Reveal>
      </section>
      <section className="container section">
        <SectionHead title="What we" script="believe in" center />
        <motion.div className="values" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {values.map(([Icon, title, text]) => (
            <motion.div key={title} className="value" variants={staggerChild}>
              <span className="icon-circle icon-circle--lg"><Icon size={22} /></span>
              <h4>{title}</h4>
              <p className="muted">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
