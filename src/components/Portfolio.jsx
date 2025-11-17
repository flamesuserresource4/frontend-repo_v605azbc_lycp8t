import { motion } from 'framer-motion'

const gridParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
  const projects = [
    { name: 'Bill It Up', tag: 'Social campaign' },
    { name: 'Letslink', tag: 'Dutch ad campaign' },
    { name: 'Views', tag: 'Sustainability showcase' },
    { name: 'Bodystyling', tag: 'Coach introductions' },
    { name: 'TKS', tag: 'Brand awareness' },
    { name: 'Nimbus', tag: 'Product promo' },
  ]

  return (
    <section id="portfolio" className="bg-[#0b1020] py-20" aria-labelledby="portfolio-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="portfolio-title" className="text-3xl sm:text-4xl font-bold text-white">Our handpicked featured portfolio</h2>
          <p className="mt-3 text-slate-300">We deliver campaigns, social content, and ads for ambitious companies.</p>
        </div>
        <motion.div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/50 overflow-hidden hover:shadow-xl hover:shadow-blue-600/10"
            >
              <motion.div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" whileHover={{ backgroundPosition: '80% 20%' }} />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-slate-400 text-sm">{p.tag}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-10">
          <a href="#portfolio" className="inline-flex rounded-full bg-slate-800 hover:bg-slate-700 text-white px-5 py-3">See more projects</a>
        </div>
      </div>
    </section>
  )
}
