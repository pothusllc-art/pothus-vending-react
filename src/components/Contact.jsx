import React, { useState } from 'react'

export default function Contact(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const formEl = e.currentTarget
    const fd = new FormData(formEl)
    if(email) fd.set('_replyto', email)
    try{
      const res = await fetch('https://formsubmit.co/ajax/pothusllc@gmail.com', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if(res.ok && (data.success || data.message)){
        setStatus({ ok: true, msg: 'Thanks! Your request has been sent. We’ll be in touch within one business day.' })
        formEl.reset()
        setEmail('')
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch(err){
      setStatus({ ok: false, msg: 'Sorry, something went wrong. Please try again, or email pothusllc@gmail.com directly.' })
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact">
      <h2>Get a Quote</h2>
      <p className="lead">Tell us about your location and what you’d like to offer. We’ll get back within one business day.</p>
      <div className="card"><div className="pad">
        {status && (
          <div className={`notice ${status.ok ? 'success' : 'error'}`} style={{marginBottom:12}}>{status.msg}</div>
        )}
        <form id="contactForm" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Quote Request — POTHUS VENDING" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_replyto" value={email} />
          <input type="text" name="_honey" style={{display:'none'}} tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div>
            <label htmlFor="company">Company / Organization</label>
            <input id="company" name="company" placeholder="Acme Warehouse" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" placeholder="(555) 123‑4567" />
          </div>
          <div>
            <label htmlFor="location">Location / City</label>
            <input id="location" name="location" placeholder="City, State" />
          </div>
          <div>
            <label htmlFor="headcount">Approx. Headcount</label>
            <select id="headcount" name="headcount">
              <option value="<25">&lt; 25</option>
              <option value="25-50">25–50</option>
              <option value="50-100">50–100</option>
              <option value=">100">100+</option>
            </select>
          </div>
          <div className="full">
            <label>Interested In</label>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <label><input type="checkbox" name="services" value="Snack Vending"/> Snack Vending</label>
              <label><input type="checkbox" name="services" value="Beverage Vending"/> Beverage Vending</label>
              <label><input type="checkbox" name="services" value="Combo Vending"/> Combo</label>
              <label><input type="checkbox" name="services" value="Office Coffee"/> Office Coffee</label>
              <label><input type="checkbox" name="services" value="Eco Pouch Coffee"/> Eco Pouch Coffee</label>
            </div>
          </div>
          <div className="full">
            <label htmlFor="message">Anything we should know?</label>
            <textarea id="message" name="message" placeholder="Product preferences, machine locations, delivery timing…"></textarea>
          </div>
          <div className="full submit">
            <button className="btn primary" type="submit" style={{marginTop:'12px'}} disabled={loading}>{loading ? 'Sending…' : 'Send request'}</button>
            <p className="small muted">Your info stays on this page; you’ll see a success confirmation here.</p>
          </div>
        </form>
      </div></div>
    </section>
  )
}
