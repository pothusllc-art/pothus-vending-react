import React, { useState } from 'react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <rect x="10" y="6" width="44" height="52" rx="8" stroke="url(#g1)" strokeWidth="4"/>
            <defs>
              <linearGradient id="g1" x1="0" x2="64" y1="0" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22d3ee"/><stop offset="1" stopColor="#0ea5e9"/>
              </linearGradient>
            </defs>
            <path d="M22 16h20M22 26h20M22 36h20M22 46h10" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span>POTHUS VENDING</span>
        </div>
        <div className="menu" role="navigation" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#machines">Machines</a>
          <a href="#brands">Brands</a>
          <a href="#coffee">Coffee</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="cta">Get a Quote</a>
        </div>
        <button className="hamb" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>☰</button>
      </div>
      <div id="mobileMenu" className={open ? '' : 'hidden'} style={{borderTop:'1px solid #1f2a44'}}>
        <div className="container" style={{padding:'12px 0',display:'grid',gap:'6px'}}>
          <a href="#services">Services</a>
          <a href="#machines">Machines</a>
          <a href="#brands">Brands</a>
          <a href="#coffee">Coffee</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="cta" style={{display:'inline-block',width:'max-content'}}>Get a Quote</a>
        </div>
      </div>
    </nav>
  )
}

