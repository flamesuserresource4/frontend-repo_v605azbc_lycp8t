import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </a>
  )

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight text-white text-lg">
            <span className="lowercase">futureflows</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#showreel">Showreel</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#faqs">FAQs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="ml-2 inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 transition-colors">Yes, I need this now</motion.a>
            <a href="#showreel" className="ml-2 text-sm text-slate-300 hover:text-white">View showreel</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden pb-4 space-y-2 overflow-hidden">
              <div className="flex flex-col">
                <NavLink href="#showreel">Showreel</NavLink>
                <NavLink href="#portfolio">Portfolio</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#faqs">FAQs</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <div className="flex items-center gap-3">
                <motion.a href="#contact" whileHover={{ scale: 1.02 }} className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 transition-colors">Yes, I need this now</motion.a>
                <a href="#showreel" className="text-sm text-slate-300 hover:text-white">View showreel</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
