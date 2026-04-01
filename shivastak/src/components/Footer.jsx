import React from 'react';

export default function Footer({ setPage }) {
  const handleNavClick = (link) => {
    setPage(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={s.footer}>
      <div style={s.container} className="res-container">
        <div style={s.top} className="res-grid-1 res-grid-gap">
          {/* Brand */}
          <div style={s.brand}>
            <div style={s.logoText}>SHIVASTAK</div>
            <div style={s.logoSub}>TRADERS</div>
            <p style={s.brandDesc}>
              Connecting India's finest fresh vegetables and agricultural products to global markets with quality, trust, and dedication.
            </p>
            <div style={s.phone}>
              <span>📞</span>
              <a href="tel:9621974646" style={s.phoneLink}>+91 96219 74646</a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={s.col}>
            <div style={s.colTitle}>Quick Links</div>
            {[
              ['Home', 'Home'],
              ['About', 'About Us'],
              ['Products', 'Products'],
              ['Why Us', 'Why Choose Us'],
              ['Gallery', 'Gallery'],
              ['Contact', 'Contact'],
            ].map(([page, label]) => (
              <div key={page} style={s.linkItem} onClick={() => handleNavClick(page)}
                onMouseEnter={e => e.target.style.color = 'var(--green-lime)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                → {label}
              </div>
            ))}
          </div>

          {/* Products */}
          <div style={s.col}>
            <div style={s.colTitle}>Our Products</div>
            {['Fresh Vegetables', 'Carrots & Root Veg', 'Leafy Greens', 'Spice Vegetables', 'Onions & Garlic', 'Seasonal Produce'].map(p => (
              <div key={p} style={s.colItem}>{p}</div>
            ))}
          </div>

          {/* Address */}
          <div style={s.col}>
            <div style={s.colTitle}>Address</div>
            <p style={s.address}>
              Mahangupur, Kaneli,<br />
              Kaushambi, Prayagraj,<br />
              Uttar Pradesh – 212216,<br />
              India 🇮🇳
            </p>
            <div style={s.reg}>Reg. Date: 04 November 2023</div>
          </div>
        </div>

        {/* Bottom */}
        <div style={s.bottom} className="res-flex-col-center res-text-center">
          <div style={s.bottomLeft}>
            © 2024 SHIVASTAK TRADERS. All Rights Reserved.
          </div>
          <div style={s.bottomRight} className="res-text-center">
            Owner: Mr. Anoop Singh &nbsp;|&nbsp; CEO: Mr. Ankit Singh
          </div>
        </div>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    background: '#0d2110',
    borderTop: '1px solid rgba(76,175,80,0.1)',
    padding: '60px 0 0',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
    gap: '48px',
    paddingBottom: '48px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  brand: {},
  logoText: {
    fontFamily: 'var(--font-display)',
    fontSize: '36px',
    color: 'white',
    letterSpacing: '6px',
    lineHeight: 1,
  },
  logoSub: {
    fontFamily: 'var(--font-display)',
    fontSize: '18px',
    color: 'var(--green-lime)',
    letterSpacing: '8px',
    marginBottom: '16px',
  },
  brandDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '13.5px',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.45)',
    fontWeight: '300',
    maxWidth: '260px',
    marginBottom: '20px',
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  phoneLink: {
    fontFamily: 'var(--font-body)',
    fontWeight: '600',
    color: 'var(--green-lime)',
    textDecoration: 'none',
    letterSpacing: '0.5px',
  },
  col: {},
  colTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: '20px',
  },
  linkItem: {
    fontFamily: 'var(--font-body)',
    fontSize: '13.5px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  colItem: {
    fontFamily: 'var(--font-body)',
    fontSize: '13.5px',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '10px',
  },
  address: {
    fontFamily: 'var(--font-body)',
    fontSize: '13.5px',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: 1.8,
    fontWeight: '300',
    marginBottom: '16px',
  },
  webLink: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'var(--green-lime)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
  },
  reg: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
    fontStyle: 'italic',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    flexWrap: 'wrap',
    gap: '12px',
  },
  bottomLeft: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.5px',
  },
  bottomRight: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.5px',
  },
};
