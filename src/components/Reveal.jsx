import { motion } from 'framer-motion'

const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -50 },
  right: { x: 50 },
  zoom: { scale: 0.92 },
}

// Fades/slides children in when they scroll into view.
export default function Reveal({ children, from = 'up', delay = 0, className, as = 'div', ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
