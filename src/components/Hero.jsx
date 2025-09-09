import vendingImg from '../assets/vending.svg'
import coffeeImg from '../assets/coffee.svg'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="kicker">Greater Atlanta • Modern • Cashless</span>
          <h1>Smart Vending & Coffee Services for Workplaces</h1>
          <p className="sub">Serving <strong>Greater Atlanta</strong> with crowd‑favorite <strong>sodas</strong> and <strong>snacks</strong> in the latest, contactless machines. Plus, barista‑level <strong>coffee services</strong> — including eco‑friendly pouch systems — tailored to your team.</p>
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
            <div className="hero-media" role="img" aria-label="Modern vending machine and espresso setup">
              <img className="hero-img" src={vendingImg} alt="Stylized vending machine" loading="eager" />
              <img className="hero-thumb" src={coffeeImg} alt="Stylized espresso machine" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
