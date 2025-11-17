import { Sparkles, PencilLine, Scissors, Cpu, Palette, Orbit } from 'lucide-react'
import { motion } from 'framer-motion'

const caps = [
  { icon: Sparkles, label: 'AI VFX' },
  { icon: PencilLine, label: 'Scriptwriting' },
  { icon: Scissors, label: 'Video editing' },
  { icon: Cpu, label: 'AI video creation' },
  { icon: Palette, label: 'Color grading' },
  { icon: Orbit, label: 'Motion graphics' },
]

export default function Capabilities() {
  return (
    <section className="bg-[#0b1020] py-10" aria-label="Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="flex flex-wrap gap-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          {caps.map(({ icon: Icon, label }) => (
            <motion.span key={label} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-slate-200 text-sm">
              <Icon size={16} className="text-sky-300" />
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
