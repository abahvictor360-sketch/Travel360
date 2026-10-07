import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'
import { posts } from '../data/destinations.js'

export default function Blog() {
  const [lead, ...rest] = posts
  return (
    <>
      <PageHero eyebrow="Blog" title="Stories &" script="travel guides" text="Tips, itineraries and inspiration from the Travel360 team." img="/images/chefchaouen.jpg" />
      <section className="container section">
        <Reveal className="post-lead">
          <img src={lead.img} alt={lead.title} />
          <div>
            <span className="badge badge--static">{lead.cat}</span>
            <h2>{lead.title}</h2>
            <p className="muted">{lead.excerpt}</p>
            <small className="muted">{lead.date}</small>
            <div><a href="#" className="btn btn--primary">Read Article <ArrowRight size={16} /></a></div>
          </div>
        </Reveal>
        <SectionHead title="Latest Posts" />
        <motion.div className="card-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {rest.map((p) => (
            <motion.article key={p.title} className="card" variants={staggerChild} whileHover={{ y: -6 }}>
              <div className="card__img"><img src={p.img} alt={p.title} loading="lazy" /></div>
              <div className="card__body">
                <p className="card__meta">{p.cat} · {p.date}</p>
                <h3>{p.title}</h3>
                <p className="muted">{p.excerpt}</p>
                <a href="#" className="link">Read more <ArrowRight size={14} /></a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  )
}
