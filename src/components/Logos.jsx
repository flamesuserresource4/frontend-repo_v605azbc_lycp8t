import { motion } from 'framer-motion'

export default function Logos() {
  const brands = ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five', 'Client Six']
  return (
    <section className="bg-[#0b1020] py-14" aria-labelledby="logos-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="logos-title" className="text-slate-300 text-center text-sm tracking-wide uppercase">Standing tall with our brand partners</h2>
        <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {brands.map((b) => (
            <motion.div key={b} whileHover={{ y: -4 }} className="group h-16 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center">
              <span className="text-slate-500 group-hover:text-white transition-colors">{b}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
