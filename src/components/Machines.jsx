export default function Machines(){
  return (
    <section id="machines">
      <h2>Machines We Deploy</h2>
      <p className="lead">Commercial‑grade equipment sized for offices, warehouses, schools, gyms, and more.</p>
      <div className="grid-3">
        <div className="card"><div className="pad">
          <h3>Snack Vending</h3>
          <p className="muted">High capacity trays, adjustable spirals, and product windows.</p>
          <ul className="list"><li>Cashless terminal + telemetry</li><li>Energy‑efficient LED lighting</li><li>ADA compliant</li></ul>
        </div></div>
        <div className="card"><div className="pad">
          <h3>Beverage Vending</h3>
          <p className="muted">Chilled cans & bottles with guaranteed vend sensors.</p>
          <ul className="list"><li>Multi‑price & promotions</li><li>Rapid‑cooling refrigeration</li><li>Remote planogram control</li></ul>
        </div></div>
        <div className="card"><div className="pad">
          <h3>Combo / Micro</h3>
          <p className="muted">Compact snack + drink or micro‑market kiosks for tight spaces.</p>
          <ul className="list"><li>Small footprint</li><li>Smart inventory tracking</li><li>Modular shelves</li></ul>
        </div></div>
      </div>
    </section>
  )
}

