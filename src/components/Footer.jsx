export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container footgrid">
        <div>
          <div className="brand" style={{marginBottom:'8px'}}>
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{width:24,height:24}}><rect x="10" y="6" width="44" height="52" rx="8" stroke="#22d3ee" strokeWidth="3"/><path d="M22 16h20M22 26h20M22 36h20M22 46h10" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round"/></svg>
            <strong>POTHUS VENDING</strong>
          </div>
          <p className="small">Cashless vending and breakroom coffee services. Custom product mixes, fast restocking, and friendly local support.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p className="small">Email: <a href="mailto:pothusllc@gmail.com">pothusllc@gmail.com</a><br/>Phone: (470) 687‑9775<br/>Service Area: Greater Atlanta</p>
        </div>
        <div>
          <strong>Info</strong>
          <p className="small"><a href="#services">Services</a><br/><a href="#machines">Machines</a><br/><a href="#brands">Brands</a><br/><a href="#coffee">Coffee</a><br/><a href="#pricing">Pricing</a></p>
          <p className="small">© <span id="year">{year}</span> POTHUS VENDING</p>
        </div>
      </div>
    </footer>
  )
}

