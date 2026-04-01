import React, { useState, useEffect } from 'react';

const styles = {
  nav: () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '12px 0',
    background: 'rgba(13, 43, 16, 0.98)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(76,175,80,0.15)',
    transition: 'all 0.4s ease',
  }),
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  logoTop: {
    fontFamily: 'var(--font-display)',
    fontSize: '26px',
    letterSpacing: '4px',
    color: 'var(--white)',
    lineHeight: 1,
  },
  logoSub: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    letterSpacing: '3px',
    color: 'var(--green-lime)',
    textTransform: 'uppercase',
    marginTop: '2px',
  },
  links: {
    display: 'flex',
    gap: '36px',
    listStyle: 'none',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
    position: 'relative',
    padding: '4px 0',
  },
  ctaBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--green-deep)',
    background: 'var(--green-lime)',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  bar: {
    width: '24px',
    height: '2px',
    background: 'white',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  mobileMenu: (open) => ({
    display: open ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '0',
    padding: '16px 40px 24px',
    background: 'rgba(26, 58, 31, 0.98)',
    borderTop: '1px solid rgba(76,175,80,0.2)',
  }),
  mobileLink: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    padding: '14px 0',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    cursor: 'pointer',
  },
};

const navLinks = ['Home', 'About', 'Products', 'Why Us', 'Gallery', 'Contact'];

export default function Navbar({ setPage, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => {
    setPage(link);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav(scrolled)}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => handleNavClick('Home')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="/assets/logo.jpeg" 
              alt="Shivastak Traders Logo" 
              style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--green-lime)' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={styles.logoTop}>SHIVASTAK</span>
              <span style={styles.logoSub}>Traders · Est. 2023</span>
            </div>
          </div>
        </div>

        <ul style={{...styles.links, '@media(max-width:768px)': {display:'none'}}}>
          {navLinks.map(link => (
            <li key={link}>
              <a
                style={{
                  ...styles.link,
                  color: currentPage === link ? 'var(--green-lime)' : 'rgba(255,255,255,0.85)'
                }}
                onClick={() => handleNavClick(link)}
                onMouseEnter={e => e.target.style.color = 'var(--green-lime)'}
                onMouseLeave={e => e.target.style.color = currentPage === link ? 'var(--green-lime)' : 'rgba(255,255,255,0.85)'}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              style={styles.ctaBtn}
              onMouseEnter={e => { e.target.style.background='var(--amber)'; e.target.style.transform='translateY(-1px)'; }}
              onMouseLeave={e => { e.target.style.background='var(--green-lime)'; e.target.style.transform='translateY(0)'; }}
              onClick={() => handleNavClick('Contact')}
            >
              Get Quote
            </button>
          </li>
        </ul>

        <button style={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </button>
      </div>
      <div style={styles.mobileMenu(mobileOpen)}>
        {navLinks.map(link => (
          <a key={link} style={styles.mobileLink} onClick={() => handleNavClick(link)}>{link}</a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
