import React from 'react'
import Hero from './components/Hero'
import StickyNav from './components/StickyNav'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
      <main className='bg-black overflow-hidden'>
        <StickyNav />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
  )
}

export default App