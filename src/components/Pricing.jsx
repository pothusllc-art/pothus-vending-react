export default function Pricing(){
  return (
    <section id="pricing">
      <h2>Flexible Programs</h2>
      <p className="lead">Choose what fits your workplace. No long‑term lock‑ins.</p>
      <div className="grid-3">
        <div className="card"><div className="pad">
          <h3>Pay‑Per‑Sale</h3>
          <p className="muted">Standard vending—employees pay at the machine.</p>
          <div className="price">$0 setup</div>
          <ul className="list"><li>Revenue share available</li><li>We stock & service</li><li>Best for 50+ staff</li></ul>
        </div></div>
        <div className="card"><div className="pad">
          <h3>Subsidized</h3>
          <p className="muted">You cover part of the price; staff pays the rest.</p>
          <div className="price">Custom</div>
          <ul className="list"><li>Boosts morale & adoption</li><li>Monthly usage report</li><li>Great for HQ sites</li></ul>
        </div></div>
        <div className="card"><div className="pad">
          <h3>Office Coffee</h3>
          <p className="muted">All‑inclusive coffee supplies & service.</p>
          <div className="price">From $$/mo</div>
          <ul className="list"><li>Equipment included</li><li>Scheduled deliveries</li><li>Eco option available</li></ul>
        </div></div>
      </div>
    </section>
  )
}

