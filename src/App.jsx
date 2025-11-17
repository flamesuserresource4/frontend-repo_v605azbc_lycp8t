import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020]">
      <Navbar />
      <Hero />
      <Logos />
      <Portfolio />
      <Testimonials />
      <Process />
      <Services />
      <About />
      <FAQ />
      <Capabilities />
      <Contact />
      <footer className="bg-[#0b1020] text-center text-slate-500 py-10">© {new Date().getFullYear()} Futureflows. All rights reserved.</footer>
    </div>
  )
}

export default App
