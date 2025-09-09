export default function Brands(){
  return (
    <section id="brands">
      <h2>Brands We Deploy</h2>
      <p className="lead">We install and service current‑generation machines from leading manufacturers. Below are common choices—ask about others.</p>
      <div className="grid-2">
        <div className="card"><div className="pad">
          <h3>Vending Manufacturers</h3>
          <ul className="list">
            <li>Crane (Azkoyen / National / BevMax series)</li>
            <li>Royal Vendors (RV series for bottles & cans)</li>
            <li>Vendo (V21, V40 beverage)</li>
            <li>AMS (Snack, Glass‑front combo)</li>
            <li>USI / Wittern</li>
            <li>Seaga</li>
            <li>Dixie‑Narco</li>
            <li>Fastcorp (frozen)</li>
          </ul>
          <p className="muted">All machines support cashless payments and remote monitoring.</p>
        </div></div>
        <div className="card"><div className="pad">
          <h3>Coffee Systems</h3>
          <ul className="list">
            <li>Bean‑to‑cup: Franke, Schaerer, WMF, de Jong DUKE</li>
            <li>Single‑cup: Keurig Commercial, Nespresso Professional</li>
            <li>Pouch systems: Lavazza/Flavia (biodegradable‑friendly options)</li>
            <li>Brewers & water: Bunn, Fetco, filtered hot/cold towers</li>
          </ul>
          <p className="muted">Ask about eco‑friendly pouch coffee for waste reduction.</p>
        </div></div>
      </div>
      <p className="small muted">Manufacturers and model names listed for reference; availability varies. We can source alternative brands by request.</p>
    </section>
  )
}

