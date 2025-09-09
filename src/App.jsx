import React, { useMemo } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Machines from './components/Machines.jsx'
import Brands from './components/Brands.jsx'
import Coffee from './components/Coffee.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  // Smooth scroll enhancement for internal anchors
  useMemo(() => {
    const handler = e => {
      const a = e.target.closest('a[href^="#"]')
      if(!a) return
      const id = a.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}) }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Nav />
      <main id="main" className="container">
        <Hero />
        <Services />
        <Machines />
        <Brands />
        <Coffee />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

