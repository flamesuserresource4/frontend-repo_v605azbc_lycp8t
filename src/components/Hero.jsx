import Spline from '@splinetool/react-spline'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1020]" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-[#0b1020]/70 to-[#0b1020] pointer-events-none" />
      </div>

      {/* floating glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ y: [0, -10, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 -bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ y: [0, 12, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="text-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" variants={fadeUp}>
              <span className="block">Ready to scale your company</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">with powerful video editing?</span>
            </motion.h1>
            <motion.p className="mt-5 text-lg text-slate-300 max-w-xl" variants={fadeUp} transition={{ delay: 0.1 }}>
              Futureflows helps brands attract their dream customers through high-performance video content for ads, social, and campaigns.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={fadeUp} transition={{ delay: 0.2 }}>
              <motion.a
                href="#contact"
                className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-lg shadow-blue-600/30"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(37,99,235,0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                Yes, I need this now
              </motion.a>
              <motion.a href="#showreel" className="inline-flex items-center gap-2 text-slate-200 hover:text-white" whileHover={{ x: 2 }}>
                <Play size={18} className="fill-current" />
                Watch our showreel
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="relative" id="showreel" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div
              className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-2 shadow-2xl"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              <motion.div className="w-full h-full rounded-xl bg-slate-900/60 flex items-center justify-center relative overflow-hidden"
                whileHover={{ boxShadow: '0 20px 60px rgba(56,189,248,0.15)' }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.12),transparent_40%)]" />
                <motion.button className="relative inline-flex items-center gap-3 text-white/90 hover:text-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600/90 shadow-lg shadow-blue-600/40">
                    <Play />
                  </span>
                  <span className="font-medium">Play Showreel</span>
                </motion.button>
              </motion.div>
            </motion.div>
            <p className="text-slate-400 text-sm mt-3">Showreel</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
