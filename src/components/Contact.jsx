import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', product: '', message: '' });
  };

  return (
    <section id="contact" style={s.section}>
      <div className="contact-container" style={s.container}>

        {/* Left Info Panel */}
        <div style={s.infoPanel}>
          <div style={s.label}>GET IN TOUCH</div>
          <h2 style={s.h2}>
            Let's Start<br />
            <em style={s.italic}>Exporting Together</em>
          </h2>
          <p style={s.sub}>
            Reach out for bulk quotes, product inquiries, or partnership discussions. Our team is ready to serve you.
          </p>

          <div style={s.contactList}>
            <a href="tel:9621974646" style={s.contactItem}>
              <span style={s.contactIcon}>📞</span>
              <div>
                <div style={s.contactLabel}>Phone / WhatsApp</div>
                <div style={s.contactValue}>+91 96219 74646</div>
              </div>
            </a>

            <div style={s.contactItem}>
              <span style={s.contactIcon}>📍</span>
              <div>
                <div style={s.contactLabel}>Office Address</div>
                <div style={s.contactValue}>Mahangupur, Kaneli, Kaushambi,<br />Prayagraj, Uttar Pradesh – 212216, India</div>
              </div>
            </div>


            <div style={s.contactItem}>
              <span style={s.contactIcon}>🏢</span>
              <div>
                <div style={s.contactLabel}>Registration Date</div>
                <div style={s.contactValue}>04 November 2023</div>
              </div>
            </div>
          </div>

          {/* Decorative */}
          <div style={s.decorBox}>
            <span style={s.decorEmoji}>🚢</span>
            <div>
              <div style={s.decorTitle}>Export Ready</div>
              <div style={s.decorSub}>Shipping worldwide from India</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div style={s.formPanel} className="res-p-20">
          {submitted ? (
            <div style={s.successBox}>
              <span style={{fontSize:'60px'}}>✅</span>
              <h3 style={s.successTitle}>Message Sent!</h3>
              <p style={s.successSub}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={s.form}>
              <h3 style={s.formTitle}>Send an Inquiry</h3>

              <div className="contact-form-row" style={s.formRow}>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Full Name *</label>
                  <input
                    style={s.input}
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    onFocus={e => e.target.style.borderColor = 'var(--green-bright)'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Email Address *</label>
                  <input
                    style={s.input}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    onFocus={e => e.target.style.borderColor = 'var(--green-bright)'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
              </div>

              <div className="contact-form-row" style={s.formRow}>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Phone Number</label>
                  <input
                    style={s.input}
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={e => e.target.style.borderColor = 'var(--green-bright)'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Product of Interest</label>
                  <select
                    style={{...s.input, cursor:'pointer'}}
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="">Select product...</option>
                    <option>Fresh Vegetables (Mixed)</option>
                    <option>Broccoli</option>
                    <option>Carrots</option>
                    <option>Tomatoes</option>
                    <option>Onions</option>
                    <option>Green Chillies</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
              </div>

              <div style={s.formGroup}>
                <label style={s.formLabel}>Message / Requirements *</label>
                <textarea
                  style={{...s.input, height:'130px', resize:'vertical'}}
                  name="message"
                  placeholder="Tell us about your order requirements, quantity, destination country, etc."
                  value={form.message}
                  onChange={handleChange}
                  required
                  onFocus={e => e.target.style.borderColor = 'var(--green-bright)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <button
                type="submit"
                style={s.submitBtn}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--green-mid)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--green-deep)'}
              >
                Send Inquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginLeft:'8px'}}>
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>

              <p style={s.disclaimer}>
                By submitting, you agree to be contacted by our sales team.
              </p>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    background: 'var(--cream-dark)',
    padding: '100px 0',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.3fr',
    gap: '72px',
    alignItems: 'start',
  },
  infoPanel: {},
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
    marginBottom: '12px',
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(30px, 3.5vw, 46px)',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: 1.2,
    marginBottom: '16px',
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--green-mid)',
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    lineHeight: 1.8,
    color: 'var(--text-light)',
    fontWeight: '300',
    marginBottom: '36px',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '32px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    textDecoration: 'none',
    padding: '16px 20px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
    border: '1px solid rgba(76,175,80,0.1)',
    transition: 'border-color 0.2s',
    cursor: 'pointer',
  },
  contactIcon: {
    fontSize: '26px',
    marginTop: '2px',
  },
  contactLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--text-light)',
    marginBottom: '4px',
  },
  contactValue: {
    fontFamily: 'var(--font-body)',
    fontSize: '14.5px',
    fontWeight: '500',
    color: 'var(--green-deep)',
    lineHeight: 1.5,
  },
  decorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'var(--green-deep)',
    borderRadius: '10px',
    padding: '20px 24px',
  },
  decorEmoji: { fontSize: '36px' },
  decorTitle: {
    fontFamily: 'var(--font-body)',
    fontWeight: '700',
    color: 'white',
    fontSize: '15px',
  },
  decorSub: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.55)',
    marginTop: '3px',
  },
  formPanel: {
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
    border: '1px solid rgba(76,175,80,0.08)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '26px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '4px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  formLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    color: 'var(--text-mid)',
    textTransform: 'uppercase',
  },
  input: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'var(--text-dark)',
    background: '#fafafa',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
  },
  submitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'white',
    background: 'var(--green-deep)',
    border: 'none',
    borderRadius: '8px',
    padding: '16px 32px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    marginTop: '4px',
  },
  disclaimer: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: '#aaa',
    textAlign: 'center',
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '60px 20px',
    textAlign: 'center',
  },
  successTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '28px',
    fontWeight: '700',
    color: 'var(--green-deep)',
  },
  successSub: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-light)',
    lineHeight: 1.7,
  },
};
