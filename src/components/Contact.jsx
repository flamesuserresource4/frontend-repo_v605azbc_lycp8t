import { Phone, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b1020] py-20" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-white">Contact us</h2>
          <p className="mt-2 text-slate-300">Questions? Send us a WhatsApp.</p>
          <div className="mt-6 space-y-3 text-slate-200">
            <p className="flex items-center gap-2"><MessageCircle className="text-green-400" size={18} /> +32 485 66 53 21</p>
            <p className="flex items-center gap-2"><Mail className="text-sky-300" size={18} /> contact@futureflows.net</p>
            <p className="text-slate-400 text-sm">24/7 available</p>
          </div>
          <a href="https://wa.me/32485665321" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-green-600 hover:bg-green-500 text-white px-6 py-3">Send a WhatsApp directly</a>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-4">
          <div>
            <label className="block text-slate-300 text-sm mb-1">Name</label>
            <input className="w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">Email</label>
            <input type="email" className="w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">Company</label>
            <input className="w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="Company name" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">Message</label>
            <textarea rows="4" className="w-full bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="Tell us about your project" />
          </div>
          <button type="button" className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 text-white py-2">Send message</button>
        </motion.form>
      </div>
    </section>
  )
}
