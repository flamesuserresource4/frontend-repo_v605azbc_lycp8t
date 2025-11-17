import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-[#0b1020] py-20" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-white">About Futureflows</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Futureflows started by helping talented friends turn ideas into scroll-stopping content. Today, we’re a boutique team of 10+ editors working with clients worldwide. Our founder, Niels Jansen, brings a love for marketing and spotted a gap in Belgium for editing-first agencies — so we built one.
          </p>
          <a href="#about" className="mt-6 inline-flex rounded-full bg-slate-800 hover:bg-slate-700 text-white px-5 py-3">Know more about us</a>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '4+ Years of experience' },
            { label: '30+ Repeat clients' },
            { label: '350+ Completed projects' },
            { label: '99% Happy clients' },
          ].map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-white">
              <p className="font-semibold">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
