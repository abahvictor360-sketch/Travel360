import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Parallax banner used at the top of inner pages.
export default function PageHero({ eyebrow, title, script, text, img }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="page-hero">
      <motion.img src={img} alt="" style={{ y }} className="page-hero__bg" />
      <div className="page-hero__shade" />
      <motion.div className="container page-hero__content" style={{ opacity: fade }}>
        <motion.span className="eyebrow eyebrow--light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>{eyebrow}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          {title} <span className="script">{script}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>{text}</motion.p>
      </motion.div>
    </section>
  )
}
