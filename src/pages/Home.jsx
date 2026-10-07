import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Plane, ArrowRight, Tag, Headphones, ShieldCheck, Award,
  Globe, ThumbsUp, Wallet, BadgePercent,
} from 'lucide-react'
import SearchBox from '../components/SearchBox.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal.jsx'
import { destinations } from '../data/destinations.js'

const features = [
  [Tag, 'Best Price Guarantee', 'We ensure you get the best deals always.'],
  [Headphones, '24/7 Customer Support', 'We’re here to help you anytime, anywhere.'],
  [ShieldCheck, 'Secure Bookings', 'Your data and payments are 100% safe with us.'],
  [Award, 'Handpicked Experiences', 'Curated tours and hotels for unforgettable trips.'],
]

const reasons = [
  [Globe, 'Wide Range of Choices', 'Choose from thousands of flights, hotels and tours worldwide.'],
  [ThumbsUp, 'Trusted by Travelers', 'Join millions of happy travelers around the world.'],
  [Wallet, 'Flexible & Easy Booking', 'Book with ease and adjust your plans if needed.'],
  [BadgePercent, 'Exclusive Deals', 'Get access to exclusive discounts and special offers.'],
]

const gallery = [
  '/images/santorini-village.jpg',
  '/images/venice.jpg',
  '/images/chefchaouen.jpg',
  '/images/sydney.jpg',
  '/images/paris-aerial.jpg',
  '/images/dubai-aerial.jpg',
  '/images/thailand-beach.jpg',
  '/images/dubai-burj.jpg',
]

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero__img" style={{ y: imgY, scale: imgScale }}>
        <img src="/images/santorini-hero.jpg" alt="Blue domes of Santorini overlooking the Aegean Sea" />
      </motion.div>
      <div className="hero__fade" />
      <motion.div className="container hero__content" style={{ y: textY, opacity: textOpacity }}>
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Plane size={13} /> Explore. Dream. Discover.
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          Discover Amazing
          <span className="script hero__script">Places with Us</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          Find the best tours, hotels and flights: everything you need for the perfect trip.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Link to="/destinations" className="btn btn--primary btn--pill">
            Explore Now <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Gallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['5%', '-25%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-25%', '5%'])

  return (
    <section ref={ref} className="gallery">
      <motion.div className="gallery__row" style={{ x: x1 }}>
        {[...gallery, ...gallery].map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
      </motion.div>
      <motion.div className="gallery__row" style={{ x: x2 }}>
        {[...gallery.slice(3), ...gallery.slice(0, 3), ...gallery.slice(3), ...gallery.slice(0, 3)].map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container search-wrap">
        <Reveal delay={0.5}>
          <SearchBox />
        </Reveal>
      </div>

      <section className="container">
        <motion.div className="features" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {features.map(([Icon, title, text]) => (
            <motion.div key={title} className="feature" variants={staggerChild}>
              <span className="icon-circle icon-circle--lg"><Icon size={22} /></span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container section">
        <SectionHead title="Popular Destinations" link="/destinations" linkLabel="View All Destinations" />
        <motion.div className="dest-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {destinations.slice(0, 4).map((d) => <DestinationCard key={d.name} d={d} />)}
        </motion.div>
      </section>

      <section className="container section why">
        <div>
          <Reveal as="h2" className="why__title">
            Why Choose <span className="script">Travel360?</span>
          </Reveal>
          <Reveal className="underline" delay={0.1} />
          <motion.div className="why__grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {reasons.map(([Icon, title, text]) => (
              <motion.div key={title} className="reason" variants={staggerChild}>
                <span className="icon-circle"><Icon size={18} /></span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Reveal from="right" className="adventure">
          <img src="/images/thailand-boat.jpg" alt="Longtail boat in turquoise water between limestone cliffs" loading="lazy" />
          <div className="adventure__content">
            <small>Let’s go!</small>
            <h3>Your Next Adventure Awaits!</h3>
            <p>Discover breathtaking places and create unforgettable memories.</p>
            <Link to="/tours" className="btn btn--white">Plan Your Trip <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Moments from" script="Around the World" center />
        </div>
        <Gallery />
      </section>

      <section className="container section stats">
        {[['12K+', 'Happy travelers'], ['150+', 'Destinations'], ['4.9', 'Average rating'], ['24/7', 'Support']].map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.1} from="zoom" className="stat">
            <strong>{n}</strong>
            <span>{l}</span>
          </Reveal>
        ))}
      </section>
    </>
  )
}
