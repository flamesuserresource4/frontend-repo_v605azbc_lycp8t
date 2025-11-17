import { PenTool, Scissors, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: PenTool,
    title: 'Creative Planning & Scripting',
    text: 'We turn your rough ideas into clear scripts and structures so the message truly lands with your audience.'
  },
  {
    icon: Scissors,
    title: 'Video Editing That Engages',
    text: 'Sharp cuts, smooth transitions, on-brand captions, motion graphics, music and custom branding tailored to your audience.'
  },
  {
    icon: Rocket,
    title: 'Post-Edit Strategy Support',
    text: 'After delivery, we advise where and how to use content across ads, socials, and internal channels so videos perform.'
  }
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function Process() {
  return (
    <section className="bg-[#0b1020] py-20" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="process-title" className="text-3xl sm:text-4xl font-bold text-white">From concept to completion: we’ve got you covered</h2>
          <p className="mt-3 text-slate-300">We guide you from first idea to final video and strategy.</p>
        </div>
        <motion.div className="mt-10 grid md:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {steps.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:shadow-lg hover:shadow-blue-600/10 transition-all">
              <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-300" whileHover={{ rotate: 5 }}>
                <Icon />
              </motion.div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{text}</p>
              <a href="#services" className="mt-4 inline-block text-blue-400 hover:text-blue-300">Learn more →</a>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10">
          <a href="#services" className="inline-flex rounded-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-3">Explore services</a>
        </div>
      </div>
    </section>
  )
}
