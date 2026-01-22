import { useState } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FavoriteMusic from './components/FavoriteMusic'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Idol from './components/Idol'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          {/* Noise Overlay for texture */}
          <div className="noise-overlay"></div>

          {/* Gradient Orbs for ambient lighting */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <FavoriteMusic />
            <Services />
            <TechStack />
            <Idol />
            <Projects />
            <FAQ />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  )
}

export default App
