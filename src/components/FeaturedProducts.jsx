import React, { useState } from 'react';

const featured = [
  {
    emoji: '🥣',
    name: 'Makhana',
    category: 'Dry Fruits & Seeds',
    desc: 'Premium Fox Nuts (Makhana) known for their nutritional value. Processed hygienically for international markets.',
    color: '#bdc3c7',
  },
  {
    emoji: '🌾',
    name: 'Basmati Rice',
    category: 'Food Grains',
    desc: 'Fine quality Basmati rice varieties, aged for perfect texture and long grain length.',
    color: '#f1c40f',
  },
  {
    emoji: '🧅',
    name: 'Red Onion',
    category: 'Vegetables',
    desc: 'Quality onions in various size grades, known for their sharp flavor and long-lasting shelf life.',
    color: '#9b59b6',
  },
  {
    emoji: '🌶️',
    name: 'Indian Spices',
    category: 'Spices',
    desc: 'Authentic Indian spices including Turmeric and Cumin, preserving their natural oils and aroma.',
    color: '#e67e22',
  },
];

export default function FeaturedProducts({ setPage }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={s.section}>
      <div style={s.container} className="res-container">
        <div style={s.header}>
          <div style={s.label}>FEATURED SELECTION</div>
          <h2 style={s.h2}>
            Our <em style={s.italic}>Premium</em> Products
          </h2>
          <p style={s.sub}>
            A curated glimpse of India's finest exports, handled with professional care.
          </p>
        </div>

        <div style={s.grid}>
          {featured.map((p, i) => (
            <div
              key={p.name}
              style={{
                ...s.card,
                transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === i
                  ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 2px ${p.color}30`
                  : '0 4px 15px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Emoji Icon */}
              <div style={{
                ...s.emojiWrap,
                background: `${p.color}15`,
                border: `1px solid ${p.color}25`,
              }}>
                <span style={{
                  ...s.emoji,
                  transform: hovered === i ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                }}>{p.emoji}</span>
              </div>

              <div style={s.category}>{p.category}</div>
              <div style={s.name}>{p.name}</div>
              <p style={s.desc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={s.ctaWrap}>
          <button
            style={s.ctaBtn}
            onClick={() => {
              setPage('Products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--green-bright)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green-deep)'}
          >
            Explore All Products →
          </button>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: '80px 0',
    background: 'white',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
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
    fontSize: 'clamp(32px, 4vw, 42px)',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px',
  },
  card: {
    position: 'relative',
    background: 'white',
    borderRadius: '12px',
    padding: '30px 24px',
    border: '1px solid #f0f0f0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  emojiWrap: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  emoji: {
    fontSize: '32px',
    transition: 'transform 0.3s ease',
    display: 'block',
  },
  category: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.4)',
    marginBottom: '6px',
  },
  name: {
    fontFamily: 'var(--font-serif)',
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '10px',
  },
  desc: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#6b8067',
    fontWeight: '300',
  },
  ctaWrap: {
    marginTop: '60px',
    textAlign: 'center',
  },
  ctaBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'white',
    background: 'var(--green-deep)',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};
