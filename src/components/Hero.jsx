import React, { useEffect, useRef } from 'react';

const variables = ['🥦', '🥕', '🥔', '🧅', '🌶️', '🌽', '🥥', '🌾', '🧄', '🥣'];

export default function Hero({ setPage }) {
  const countRefs = useRef([]);

  useEffect(() => {
    const counters = [
      { el: countRefs.current[0], target: 15, suffix: '+' },
      { el: countRefs.current[1], target: 18, suffix: '+' },
      { el: countRefs.current[2], target: 100, suffix: '%' },
    ];
    counters.forEach(({ el, target, suffix }) => {
      if (!el) return;
      let count = 0;
      const step = Math.ceil(target / 50);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count + suffix;
        if (count >= target) clearInterval(timer);
      }, 40);
    });
  }, []);

  return (
    <section id="home" style={heroStyles.section}>
      {/* Background Image Overlay */}
      <div style={heroStyles.bgImage}></div>
      <div style={heroStyles.bgOverlayLine}></div>

      {/* Floating Veggie Icons */}
      {variables.map((v, i) => (
        <span key={i} style={{
          ...heroStyles.floatingVeg,
          left: `${8 + (i * 12)}%`,
          top: `${15 + (i % 3) * 20}%`,
          animationDelay: `${i * 0.5}s`,
          fontSize: `${24 + (i % 3) * 8}px`,
          opacity: 0.08 + (i % 4) * 0.03,
        }}>{v}</span>
      ))}

      <div style={heroStyles.container} className="res-container res-flex-col">
        <div style={heroStyles.leftContent}>
          <div style={heroStyles.tagline}>
            <span style={heroStyles.taglineDot}></span>
            From Indian Farms to Global Tables
          </div>

          <h1 style={heroStyles.h1}>
            <span style={heroStyles.h1Line1} className="res-hero-h1-1">FRESH</span>
            <span style={heroStyles.h1Line2} className="res-hero-h1-2">VEGETABLES</span>
            <span style={heroStyles.h1Line3} className="res-hero-h1-3">
              <em style={heroStyles.italic}>for the</em>
              <span style={heroStyles.worldText}> WORLD</span>
            </span>
          </h1>

          <p style={heroStyles.sub} className="res-hero-sub">
            <strong>SHIVASTAK TRADERS</strong> connects India's finest agricultural produce with<br />
            international markets — delivering freshness, quality & trust.
          </p>

          <div style={heroStyles.btnRow}>
            <button
              style={heroStyles.primaryBtn}
              onClick={() => setPage('Products')}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--green-bright)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--green-lime)'}
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginLeft:'8px'}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              style={heroStyles.secondaryBtn}
              onClick={() => setPage('Contact')}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div style={heroStyles.statsBar} className="res-stats-bar">
          <div style={heroStyles.stat}>
            <span ref={el => countRefs.current[0] = el} style={heroStyles.statNum}>15+</span>
            <span style={heroStyles.statLabel}>Countries Reached</span>
          </div>
          <div style={heroStyles.statDivider} className="res-stat-divider"></div>
          <div style={heroStyles.stat}>
            <span ref={el => countRefs.current[1] = el} style={heroStyles.statNum}>18+</span>
            <span style={heroStyles.statLabel}>Product Varieties</span>
          </div>
          <div style={heroStyles.statDivider} className="res-stat-divider"></div>
          <div style={heroStyles.stat}>
            <span ref={el => countRefs.current[2] = el} style={heroStyles.statNum}>100%</span>
            <span style={heroStyles.statLabel}>Farm Fresh Quality</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={heroStyles.scrollIndicator}>
        <div style={heroStyles.scrollLine}></div>
        <span style={heroStyles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}

const heroStyles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    background: '#0d2b10',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '120px 0 60px',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/assets/hero-bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.25,
    filter: 'grayscale(40%) contrast(110%)',
    zIndex: 0,
  },
  bgOverlayLine: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(13,43,16,0.95) 0%, rgba(13,43,16,0.7) 50%, rgba(13,43,16,0.5) 100%)',
    zIndex: 1,
  },
  floatingVeg: {
    position: 'absolute',
    animation: 'float 5s ease-in-out infinite',
    userSelect: 'none',
    pointerEvents: 'none',
    filter: 'blur(0.5px)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  leftContent: {
    maxWidth: '700px',
    textAlign: 'left',
  },
  tagline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--green-lime)',
    marginBottom: '24px',
    animation: 'fadeUp 0.6s ease 0.2s both',
  },
  taglineDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: 'var(--amber)',
    display: 'inline-block',
  },
  h1: {
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeUp 0.7s ease 0.3s both',
  },
  h1Line1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(70px, 12vw, 140px)',
    color: 'rgba(255,255,255,0.15)',
    lineHeight: 0.9,
    letterSpacing: '12px',
  },
  h1Line2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(70px, 12vw, 140px)',
    color: 'var(--white)',
    lineHeight: 0.9,
    letterSpacing: '8px',
    WebkitTextStroke: '0px',
  },
  h1Line3: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(40px, 7vw, 90px)',
    color: 'var(--white)',
    lineHeight: 1.1,
    letterSpacing: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '8px',
  },
  italic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '0.55em',
    fontWeight: '400',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '2px',
  },
  worldText: {
    background: 'linear-gradient(90deg, var(--green-lime), var(--amber))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.6)',
    marginTop: '28px',
    maxWidth: '540px',
    animation: 'fadeUp 0.8s ease 0.5s both',
  },
  btnRow: {
    display: 'flex',
    gap: '16px',
    marginTop: '40px',
    flexWrap: 'wrap',
    animation: 'fadeUp 0.8s ease 0.7s both',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--green-deep)',
    background: 'var(--green-lime)',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'all 0.25s',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.8)',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.25)',
    padding: '16px 32px',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'all 0.25s',
  },
  statsBar: {
    display: 'flex',
    gap: '0',
    marginTop: '64px',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '4px',
    padding: '24px 40px',
    maxWidth: '560px',
    animation: 'fadeUp 0.9s ease 0.9s both',
  },
  stat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  statNum: {
    fontFamily: 'var(--font-display)',
    fontSize: '42px',
    color: 'var(--green-lime)',
    lineHeight: 1,
    letterSpacing: '2px',
  },
  statLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    textAlign: 'center',
  },
  statDivider: {
    width: '1px',
    background: 'rgba(255,255,255,0.1)',
    margin: '0 8px',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    animation: 'fadeIn 1s ease 1.5s both',
  },
  scrollLine: {
    width: '1px',
    height: '60px',
    background: 'linear-gradient(to bottom, transparent, rgba(139,195,74,0.6))',
  },
  scrollText: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    writingMode: 'horizontal-tb',
  },
};
