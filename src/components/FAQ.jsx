import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QA = [
  { q: 'What services do you offer?', a: 'From strategy and scripting to editing, animation, and delivery across platforms. We shape content for ads, socials, campaigns, internal and events.' },
  { q: 'How much does an edit cost?', a: 'We price per scope. Most projects start from a flexible package that scales with deliverables and timeline. Get in touch for a quick quote.' },
  { q: 'How long does it take to produce a video?', a: 'Simple edits can be ready within a few days. Campaigns and multi-asset projects typically range from 1–4 weeks depending on complexity.' },
  { q: 'Can you help with scriptwriting and storyboarding?', a: 'Absolutely. We love shaping a clear message and structure before editing begins to make sure the video lands.' },
  { q: 'What is the production process like?', a: 'Kickoff → creative outline → asset handoff → editing sprints → feedback rounds → delivery. You’ll have a calm, structured flow throughout.' },
  { q: 'Do you provide video marketing support?', a: 'Yes. Post-edit, we advise placements, formats, and versions so your content actually performs.' },
  { q: 'Can you work with a specific budget?', a: 'Yes. Share your goals and constraints — we’ll suggest the best route to impact within your budget.' },
]

function Item({ q, a, open, onClick }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={onClick} className="w-full text-left px-5 py-4 bg-slate-900/60 text-white">
        {q}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-5 py-4 text-slate-300 bg-slate-900/40">
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faqs" className="bg-[#0b1020] py-20" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold text-white text-center">Curious? Check out the scoop! (FAQs)</h2>
        <div className="mt-10 space-y-3">
          {QA.map((item, i) => (
            <Item key={i} {...item} open={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
