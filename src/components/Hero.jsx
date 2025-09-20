import React, { useState } from 'react'
import vendingFallback from '../assets/vending.svg'
import coffeeFallback from '../assets/coffee.svg'

export default function Hero(){
  // Try local photo assets from public/media first; fall back to SVGs
  const [vSrc, setVSrc] = useState('/media/vending.png')
  const [cSrc, setCSrc] = useState('/media/coffee.png')
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="kicker">Greater Atlanta • Modern • Cashless</span>
          <h1>Smart Vending & Coffee Services for Workplaces</h1>
          <p className="sub">Serving <strong>Greater Atlanta</strong> as a <strong>local, owner‑operated</strong> provider with crowd‑favorite <strong>sodas</strong> and <strong>snacks</strong> in the latest, contactless machines. Plus, barista‑level <strong>coffee services</strong> — including eco‑friendly pouch systems — tailored to your team with <strong>fair, employee‑friendly pricing</strong>.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Request a machine</a>
            <a className="btn" href="#machines">See our machines</a>
          </div>
          <div className="badges" aria-label="Capabilities">
            <span className="badge"> Pay • Google Pay</span>
            <span className="badge">24/7 Monitoring</span>
            <span className="badge">Fast Restocking</span>
            <span className="badge">Eco Pouch Coffee</span>
          </div>
        </div>
        <div className="card">
          <div className="pad">
            <div className="hero-media" aria-label="Modern vending and coffee machines">
              <div className="hero-row">
                <img
                  className="hero-photo"
                  src={vSrc}
                  onError={() => setVSrc(vendingFallback)}
                  alt="Latest vending machine at a workplace"
                  loading="eager"
                />
                <img
                  className="hero-photo"
                  src={cSrc}
                  onError={() => setCSrc(coffeeFallback)}
                  alt="Modern espresso machine pouring coffee"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
