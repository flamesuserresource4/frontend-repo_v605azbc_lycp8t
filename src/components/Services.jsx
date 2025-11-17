import { Building2, Megaphone, Film, Sparkles, Clapperboard, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Building2,
    title: 'Corporate Videos',
    text: 'Promos, explainers, training, and events — edited to feel premium and engaging for teams and stakeholders.'
  },
  {
    icon: Megaphone,
    title: 'Commercials & Advertisements',
    text: 'Short, punchy spots built for paid ads and performance-driven campaigns.'
  },
  {
    icon: Film,
    title: 'Shorts & Reels',
    text: 'Vertical, high-energy social clips crafted for TikTok, Instagram, and YouTube Shorts.'
  },
  {
    icon: Sparkles,
    title: 'Animation & VFX',
    text: 'AI VFX, motion graphics, and visual effects to make content unmissable.'
  },
  {
    icon: Clapperboard,
    title: 'Documentaries',
    text: 'Long-form, story-driven pieces that inform and inspire audiences.'
  },
  {
    icon: Layers,
    title: 'Post-Production Suites',
    text: 'Color grading, sound design, captioning, versioning, and delivery at scale.'
  },
]

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const tile = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } } }

export default function Services() {
  return (
    <section id="services" className="bg-[#0b1020] py-20" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="services-title" className="text-3xl sm:text-4xl font-bold text-white">We’re editing pros in many industries</h2>
          <p className="mt-3 text-slate-300">Whatever the format or sector, we build videos that move people and growth metrics.</p>
        </div>
        <motion.div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={parent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={tile} whileHover={{ y: -4 }} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:shadow-lg hover:shadow-blue-600/10">
              <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-300" whileHover={{ rotate: -6 }}>
                <Icon />
              </motion.div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{text}</p>
              <a href="#" className="mt-3 inline-block text-blue-400 group-hover:text-blue-300">Learn more →</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
