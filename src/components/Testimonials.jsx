import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Carine Bellefontaine',
    role: 'Franchise Owner, Bodystyling',
    text:
      'Working with Futureflows felt calm and effortless. They took our rough footage and turned it into a sequence that truly captured our tone — sharp edits, tasteful motion, and the right music. Our local campaign outperformed previous ones within a week.',
  },
  {
    name: 'Leandro Ketelslegers',
    role: 'Founder, Letslink',
    text:
      'Professional from start to finish. Communication was clear, revisions were quick, and the final videos gave our brand a serious lift. Engagement on socials has been consistently higher since we started partnering with them.',
  },
  {
    name: 'Nina van der Meer',
    role: 'Marketing Lead, Views',
    text:
      'Smooth, calm, and on-brief. The team added on-brand captions and subtle animations that made our story easier to grasp. The ads hit CTR targets within days and conversions improved month over month.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-[#0b1020] py-20" aria-labelledby="testimonials-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold text-white text-center">Our client chronicles: stories that make us smile</h2>
        <div className="mt-10 relative">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 ring-1 ring-white/10" />
                <p className="mt-6 text-slate-200 text-lg leading-relaxed max-w-3xl mx-auto">“{TESTIMONIALS[index].text}”</p>
                <p className="mt-5 text-slate-400">{TESTIMONIALS[index].name} — {TESTIMONIALS[index].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${index === i ? 'w-6 bg-blue-500' : 'w-2 bg-slate-600'}`} aria-label={`Go to testimonial ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
