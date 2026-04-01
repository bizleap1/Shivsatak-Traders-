import React, { useState } from 'react';

const products = [
  {
    emoji: '🥦',
    name: 'Broccoli',
    category: 'Green Vegetables',
    desc: 'Farm-fresh broccoli packed with nutrients, exported with careful cold-chain management to preserve quality.',
    tag: 'Best Seller',
    color: '#2d6a35',
    specs: { origin: 'UP, India', grade: 'A / Export', packing: 'Crates / Vacuum', temp: '0-2°C' }
  },
  {
    emoji: '🥕',
    name: 'Carrots',
    category: 'Root Vegetables',
    desc: 'Crisp, sweet carrots sourced from fertile Indian fields. Available in bulk for international buyers.',
    tag: 'High Demand',
    color: '#e07b2a',
    specs: { origin: 'UP, India', grade: 'Premium', packing: 'Mesh Bags / Bags', temp: '1-4°C' }
  },
  {
    emoji: '🍅',
    name: 'Tomatoes',
    category: 'Fruit Vegetables',
    desc: 'Premium quality tomatoes with vibrant color and taste. Suitable for fresh consumption and processing.',
    tag: 'Premium',
    color: '#c0392b',
    specs: { origin: 'UP, India', grade: 'Grade 1', packing: 'Plastic Crates', temp: '8-12°C' }
  },
  {
    emoji: '🌶️',
    name: 'Green Chillies',
    category: 'Spice Vegetables',
    desc: 'India\'s finest green chillies known for their aroma and heat. A key ingredient in global cuisines.',
    tag: 'Popular',
    color: '#27ae60',
    specs: { origin: 'UP, India', grade: 'High Pungency', packing: 'Gunny Bags', temp: '7-10°C' }
  },
  {
    emoji: '🥬',
    name: 'Leafy Greens',
    category: 'Leafy Vegetables',
    desc: 'Fresh spinach, fenugreek, and more. Hygienically packed and temperature-controlled for long transit.',
    tag: 'Fresh Daily',
    color: '#1e8449',
    specs: { origin: 'UP, India', grade: 'Farm Fresh', packing: 'Corrugated Boxes', temp: '2-5°C' }
  },
  {
    emoji: '🧅',
    name: 'Onions',
    category: 'Bulb Vegetables',
    desc: 'India is among the world\'s top onion producers. We export high-grade varieties in every size grade.',
    tag: 'Top Export',
    color: '#9b59b6',
    specs: { origin: 'UP, India', grade: 'Export Quality', packing: 'Mesh / Gunny', temp: 'Ambient' }
  },
  {
    emoji: '🥒',
    name: 'Cucumbers',
    category: 'Gourd Vegetables',
    desc: 'Crisp cucumbers with extended shelf life, ideal for both fresh markets and pickling industries.',
    tag: 'Seasonal',
    color: '#58d68d',
    specs: { origin: 'UP, India', grade: 'Prime', packing: 'Crates', temp: '10-12°C' }
  },
  {
    emoji: '🌽',
    name: 'Sweet Corn',
    category: 'Cereal Vegetables',
    desc: 'Golden sweet corn full of natural sweetness. Available fresh or frozen for international markets.',
    tag: 'New',
    color: '#f1c40f',
    specs: { origin: 'UP, India', grade: 'Yellow F1', packing: 'Shrink Wrap', temp: '0-4°C' }
  },
];

const tagColors = {
  'Best Seller': '#2d6a35',
  'High Demand': '#e07b2a',
  'Premium': '#c0392b',
  'Popular': '#27ae60',
  'Fresh Daily': '#1e8449',
  'Top Export': '#8e44ad',
  'Seasonal': '#16a085',
  'New': '#2980b9',
};

const productPhotos = [
  '/assets/WhatsApp Image 2026-04-01 at 12.45.09 PM.jpeg',
  '/assets/WhatsApp Image 2026-04-01 at 12.45.10 PM.jpeg',
  '/assets/WhatsApp Image 2026-04-01 at 12.45.18 PM.jpeg',
  '/assets/WhatsApp Image 2026-04-01 at 12.45.20 PM.jpeg',
  '/assets/WhatsApp Image 2026-04-01 at 12.45.22 PM.jpeg',
  '/assets/WhatsApp Image 2026-04-01 at 12.45.23 PM.jpeg',
];

export default function Products() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="products" style={s.section}>
      {/* Background */}
      <div style={s.bg}></div>

      <div style={s.container} className="res-container">
        <div style={s.header}>
          <div style={s.label}>OUR PRODUCTS</div>
          <h2 style={s.h2}>
            Nature's Finest,<br />
            <em style={s.italic}>Exported Fresh</em>
          </h2>
          <p style={s.sub}>
            Quality-assured produce from the heart of India, handled with professional care.
          </p>
        </div>

        <div style={s.grid}>
          {products.map((p, i) => (
            <div
              key={p.name}
              style={{
                ...s.card,
                transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === i
                  ? `0 24px 60px rgba(0,0,0,0.15), 0 0 0 2px ${p.color}30`
                  : '0 4px 20px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tag */}
              <div style={{...s.tag, background: tagColors[p.tag] || '#2d6a35'}}>
                {p.tag}
              </div>

              {/* Emoji */}
              <div style={{
                ...s.emojiWrap,
                background: `${p.color}15`,
                border: `1px solid ${p.color}25`,
              }}>
                <span style={{
                  ...s.emoji,
                  transform: hovered === i ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
                }}>{p.emoji}</span>
              </div>

              <div style={s.category}>{p.category}</div>
              <div style={s.name}>{p.name}</div>
              <p style={s.desc}>{p.desc}</p>

              {/* Specs Grid */}
              <div style={s.specGrid}>
                <div style={s.specItem}><strong>Origin:</strong> {p.specs.origin}</div>
                <div style={s.specItem}><strong>Grade:</strong> {p.specs.grade}</div>
                <div style={s.specItem}><strong>Packing:</strong> {p.specs.packing}</div>
                <div style={s.specItem}><strong>Temp:</strong> {p.specs.temp}</div>
              </div>

              <div style={{
                ...s.indicator,
                background: p.color,
                opacity: hovered === i ? 1 : 0,
              }}></div>
            </div>
          ))}
        </div>

        {/* Real Product Photos Grid */}
        <div style={s.photoSection}>
          <div style={s.label}>ACTUAL PRODUCE</div>
          <h3 style={s.photoH3}>Visual Quality Check</h3>
          <div style={s.photoGrid}>
            {productPhotos.map((img, i) => (
              <div key={i} style={s.photoBox}>
                <img src={img} alt={`Produce ${i}`} style={s.photoImg} />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Detail Multi-Column */}
        <div style={s.techDetailSection} className="res-grid-1 res-grid-gap res-p-20">
          <div style={s.techCol}>
            <div style={s.techLabel}>GLOBAL QUALITY STANDARDS</div>
            <h4 style={s.techH4}>Strict Compliance & Certification</h4>
            <ul style={s.techList}>
              <li><strong>APEDA Registered:</strong> Fully compliant with Agricultural and Processed Food Products Export Development Authority.</li>
              <li><strong>FSSAI Certified:</strong> Meeting all Indian food safety and hygiene standards.</li>
              <li><strong>Phytosanitary Certs:</strong> Every shipment is backed by official health and safety documentation.</li>
              <li><strong>Residue Testing:</strong> Regular lab testing for chemical and pesticide residues.</li>
            </ul>
          </div>
          <div style={s.techCol}>
            <div style={s.techLabel}>PACKING & CAPACITY</div>
            <h4 style={s.techH4}>Custom Packaging for Long Transit</h4>
            <p style={s.techPara}>
              We specialize in custom packaging that preserves the cellular structure of vegetables during sea or air transit.
            </p>
            <div style={s.packingGrid}>
              {[
                { n: 'Mesh/Gunny', v: '10kg - 50kg' },
                { n: 'Vacuum Pack', v: 'Retail Ready' },
                { n: 'Crates', v: 'Plastic / Wood' },
                { n: 'Containers', v: '20ft / 40ft Reefer' },
              ].map(p => (
                <div key={p.n} style={s.packingItem}>
                  <div style={s.packingName}>{p.n}</div>
                  <div style={s.packingVal}>{p.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={s.bottomCta} className="res-flex-col res-p-20">
          <p style={s.ctaText}>Interested in bulk export orders or custom requirements?</p>
          <button
            style={s.ctaBtn}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--green-bright)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green-deep)'}
          >
            Request a Quote →
          </button>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    position: 'relative',
    padding: '100px 0',
    overflow: 'hidden',
    background: 'var(--cream-dark)',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d6a35' fill-opacity='0.025'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
    marginBottom: '14px',
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(32px, 4vw, 52px)',
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
    fontSize: '16px',
    fontWeight: '300',
    color: 'var(--text-light)',
    maxWidth: '520px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    position: 'relative',
    background: 'var(--white)',
    borderRadius: '12px',
    padding: '28px 24px 32px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
  },
  tag: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '100px',
  },
  emojiWrap: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  emoji: {
    fontSize: '36px',
    transition: 'transform 0.3s ease',
    display: 'block',
  },
  category: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--text-light)',
    marginBottom: '6px',
  },
  name: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '10px',
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: '13.5px',
    lineHeight: 1.7,
    color: '#6b8067',
    fontWeight: '300',
    marginBottom: '20px',
  },
  techDetailSection: {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: '60px',
    padding: '60px',
    background: 'white',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
  },
  techCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  techLabel: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    color: 'var(--green-bright)',
    marginBottom: '12px',
  },
  techH4: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '20px',
  },
  techList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  techPara: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    lineHeight: 1.7,
    color: 'var(--text-light)',
    marginBottom: '24px',
  },
  packingGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  packingItem: {
    padding: '16px',
    background: 'var(--cream)',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.04)',
    textAlign: 'center',
  },
  packingName: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '4px',
  },
  packingVal: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    color: 'var(--text-light)',
  },
  specGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '8px',
    marginTop: 'auto',
    paddingTop: '16px',
    borderTop: '1px solid rgba(0,0,0,0.06)',
  },
  specItem: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    color: 'var(--text-light)',
  },
  photoSection: {
    marginTop: '100px',
    textAlign: 'center',
  },
  photoH3: {
    fontFamily: 'var(--font-serif)',
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '40px',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  photoBox: {
    borderRadius: '12px',
    overflow: 'hidden',
    height: '260px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    transition: 'opacity 0.3s',
  },
  bottomCta: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
    padding: '40px',
    background: 'var(--green-deep)',
    borderRadius: '16px',
  },
  ctaText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '20px',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.8)',
  },
  ctaBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'white',
    background: 'var(--green-deep)',
    border: '1.5px solid rgba(255,255,255,0.35)',
    padding: '14px 30px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};
