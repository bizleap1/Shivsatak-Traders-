import React from 'react';

const features = [
  {
    icon: '🌾',
    title: 'Direct Farm Sourcing',
    desc: 'Our procurement team works on-ground in the fertile belts of Uttar Pradesh, sourcing directly from farmers to ensure 100% traceability and the absolute lowest time-to-export.',
  },
  {
    icon: '❄️',
    title: 'Advanced Cold Chain',
    desc: 'From specialized reefer trucks to temperature-monitored pre-cooling units, we maintain a strict unbroken cold chain to stop the clock on freshness.',
  },
  {
    icon: '📋',
    title: 'Global Compliance',
    desc: 'Fully compliant with APEDA, FSSAI, and international phytosanitary standards. We manage all customs, inspections, and global trade compliance so you don\'t have to.',
  },
  {
    icon: '🔬',
    title: 'Multi-Stage QA',
    desc: 'Every consignment undergoes a three-stage quality check: at harvest, during sorting, and final inspection before container loading to ensure zero compromises.',
  },
  {
    icon: '⚡',
    title: 'Agile Logistics',
    desc: 'Strategically located near major transport hubs in North India, we offer rapid transit to ports, significantly reducing the "Farm to Fork" duration.',
  },
  {
    icon: '🤝',
    title: 'Transparent Trading',
    desc: 'We believe in long-term horizontal integration. Our buyers receive real-time updates, fair transparent pricing, and dedicated account management.',
  },
];

const process = [
  { num: '01', title: 'Need Analysis', desc: 'Detailed consultation on your variety, size, and shelf-life requirements.' },
  { num: '02', title: 'Procurement', desc: 'Direct harvesting from selected farms based on your order specs.' },
  { num: '03', title: 'Sorting & Grading', desc: 'Produce is graded by size, color, and maturity at our facility.' },
  { num: '04', title: 'Pre-Cooling', desc: 'Removal of field heat to stabilize the produce for long-distance transit.' },
  { num: '05', title: 'Packing & Loading', desc: 'Hygienic export packing followed by climate-controlled loading.' },
  { num: '06', title: 'Global Delivery', desc: 'End-to-end tracking until the fresh produce reaches your shores.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={s.section}>
      <div style={s.container} className="res-container">

        {/* Header */}
        <div style={s.header}>
          <div style={s.label}>WHY CHOOSE US</div>
          <h2 style={s.h2}>
            The <em style={s.italic}>SHIVASTAK</em> Advantage
          </h2>
        </div>

        {/* Features Grid */}
        <div style={s.featureGrid}>
          {features.map((f, i) => (
            <div key={f.title} style={s.featureCard}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-deep)'; e.currentTarget.querySelector('.ft').style.color = 'white'; e.currentTarget.querySelector('.fd').style.color = 'rgba(255,255,255,0.65)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelector('.ft').style.color = 'var(--green-deep)'; e.currentTarget.querySelector('.fd').style.color = '#6b8067'; }}
            >
              <span style={s.featureIcon}>{f.icon}</span>
              <div className="ft" style={s.featureTitle}>{f.title}</div>
              <p className="fd" style={s.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={s.processSection}>
          <div style={s.processHeader}>
            <div style={s.label}>HOW IT WORKS</div>
            <h3 style={s.processH3}>Our Export Process</h3>
          </div>
          <div style={s.processGrid}>
            {process.map((p, i) => (
              <div key={p.num} style={s.processStep}>
                <div style={s.processNum}>{p.num}</div>
                <div style={s.connector}></div>
                <div style={s.processContent}>
                  <div style={s.processTitle}>{p.title}</div>
                  <div style={s.processDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach Info */}
        <div style={s.reachSection} className="res-grid-1 res-grid-gap res-p-20">
          <div style={s.reachText}>
            <div style={s.label}>GLOBAL REACH</div>
            <h3 style={s.reachH3}>Feeding the World from India</h3>
            <p style={s.reachPara}>
              From our logistics base in Uttar Pradesh, we have established direct shipping lines to major distribution hubs. Our produce reaches tables across the <strong>Middle East (Dubai, Kuwait, Qatar)</strong>, <strong>European Union</strong>, and <strong>Southeast Asian</strong> markets within the shortest possible transit windows.
            </p>
          </div>
          <div style={s.reachGrid}>
            {[
              { l: 'Dubai', d: 'Air & Sea' },
              { l: 'Kuwait', d: 'Direct Sea' },
              { l: 'Germany', d: 'Air Freight' },
              { l: 'Qatar', d: 'Express Sea' },
            ].map(r => (
              <div key={r.l} style={s.reachItem}>
                <div style={s.reachLoc}>{r.l}</div>
                <div style={s.reachDet}>{r.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* India Map Banner */}
        <div style={s.banner} className="res-flex-col-center res-p-20">
          <div style={s.bannerLeft} className="res-flex-col-center">
            <div style={s.bannerBig}>🇮🇳</div>
            <div>
              <div style={s.bannerTitle}>Proudly Made in India</div>
              <div style={s.bannerSub}>Uttar Pradesh · India's Agricultural Heartland</div>
            </div>
          </div>
          <div style={s.bannerStats} className="res-banner-stats">
            {[
              { v: 'APEDA', l: 'Export Certified' },
              { v: '2023', l: 'Year Founded' },
              { v: 'FSSAI', l: 'Compliance Ready' },
            ].map(({ v, l }) => (
              <div key={l} style={s.bannerStat}>
                <span style={s.bannerStatV}>{v}</span>
                <span style={s.bannerStatL}>{l}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const s = {
  section: {
    background: 'var(--cream)',
    padding: '100px 0',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
  },
  header: {
    marginBottom: '52px',
  },
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
    fontSize: 'clamp(32px, 4vw, 52px)',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: 1.2,
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--green-mid)',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '70px',
  },
  featureCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '32px 28px',
    cursor: 'pointer',
    transition: 'background 0.3s',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
  },
  featureIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '16px',
  },
  featureTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '10px',
    transition: 'color 0.3s',
  },
  featureDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    lineHeight: 1.7,
    color: '#6b8067',
    fontWeight: '300',
    transition: 'color 0.3s',
  },
  processSection: {
    marginBottom: '60px',
  },
  processHeader: {
    marginBottom: '36px',
  },
  processH3: {
    fontFamily: 'var(--font-serif)',
    fontSize: '28px',
    fontWeight: '700',
    color: 'var(--green-deep)',
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '24px',
  },
  processStep: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  processNum: {
    fontFamily: 'var(--font-display)',
    fontSize: '48px',
    color: 'rgba(45,106,53,0.15)',
    lineHeight: 1,
    marginBottom: '4px',
  },
  connector: {
    width: '32px',
    height: '2px',
    background: 'var(--amber)',
    marginBottom: '12px',
  },
  processContent: {},
  processTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '6px',
  },
  processDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'var(--text-light)',
    lineHeight: 1.5,
  },
  reachSection: {
    padding: '60px',
    background: 'white',
    borderRadius: '24px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '80px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
  },
  reachText: {},
  reachH3: {
    fontFamily: 'var(--font-serif)',
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '20px',
  },
  reachPara: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    lineHeight: 1.8,
    color: 'var(--text-light)',
  },
  reachGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  reachItem: {
    padding: '24px',
    background: 'var(--cream)',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid rgba(0,0,0,0.03)',
  },
  reachLoc: {
    fontFamily: 'var(--font-serif)',
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '4px',
  },
  reachDet: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
  },
  banner: {
    background: 'linear-gradient(135deg, var(--green-deep), #2d5c2a)',
    borderRadius: '16px',
    padding: '40px 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
  },
  bannerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  bannerBig: {
    fontSize: '56px',
  },
  bannerTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
  },
  bannerSub: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.55)',
    marginTop: '5px',
    letterSpacing: '0.5px',
  },
  bannerStats: {
    display: 'flex',
    gap: '48px',
    flexWrap: 'wrap',
  },
  bannerStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  bannerStatV: {
    fontFamily: 'var(--font-display)',
    fontSize: '32px',
    color: 'var(--green-lime)',
    letterSpacing: '2px',
  },
  bannerStatL: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
};
