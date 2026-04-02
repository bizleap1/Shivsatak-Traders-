import React from 'react';

const images = [
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.02 PM.jpeg', title: 'Premium Red Onions', desc: 'Hand-sorted onions ready for bulk export.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM.jpeg', title: 'Fresh Garlic Bulbs', desc: 'Cured and graded for maximum shelf life.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM.jpeg', title: 'Quality Chillies', desc: 'Vibrant green chillies with high pungency.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.09 PM.jpeg', title: 'Ginger Stocks', desc: 'Fresh ginger roots ready for processing.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.10 PM.jpeg', title: 'Vegetable Graded', desc: 'Precision grading for international standards.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.02 PM (1).jpeg', title: 'Bulk Stock', desc: 'Large scale inventory management.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM (1).jpeg', title: 'Supply Chain', desc: 'Efficient handling and logistics.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM (2).jpeg', title: 'Sorting Facility', desc: 'Where quality meets precision.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.07 PM.jpeg', title: 'Gourd Selection', desc: 'Fresh local varieties of gourds.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM (1).jpeg', title: 'Potato Grade A', desc: 'Firm and fresh potatoes for export.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM (2).jpeg', title: 'Farm Fresh', desc: 'Direct from Indian farms to you.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.09 PM (1).jpeg', title: 'Export Quality', desc: 'Meeting global food safety standards.' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.10 PM (1).jpeg', title: 'Crate Packing', desc: 'Standardized packing for safe transit.' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.02 PM.jpeg', title: 'Field Sourcing', desc: 'Direct sourcing of premium produce.' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.03 PM.jpeg', title: 'Inspection Point', desc: 'Careful visual check of every item.' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.06 PM.jpeg', title: 'Temperature Control', desc: 'Maintaining cold chain integrity.' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.09 PM.jpeg', title: 'Daily Harvest', desc: 'Peak freshness ensured.' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.10 PM.jpeg', title: 'Ready to Ship', desc: 'Final consignments for delivery.' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={s.section}>
      <div style={s.container} className="res-container">
        <div style={s.header}>
          <div style={s.label}>VISUAL JOURNEY</div>
          <h2 style={s.h2}>
            Our <em style={s.italic}>Gallery</em>
          </h2>
          <p style={s.sub}>
            A glimpse into our farms, processing facilities, and the high-quality produce we export globally.
          </p>
        </div>

        <div style={s.grid}>
          {images.map((img, i) => (
            <div key={i} style={s.card}>
              <div style={s.imgBox}>
                <img src={img.url} alt={img.title} style={s.img} />
                <div style={s.overlay}>
                  <div style={s.overlayTitle}>{img.title}</div>
                  <div style={s.overlayDesc}>{img.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: '120px 0 100px',
    background: 'var(--cream)',
    minHeight: '100vh',
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
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    background: 'white',
    height: '400px',
    maxWidth: '100%',
  },
  imgBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(13,43,16,0.9) 0%, transparent 70%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '30px',
    opacity: 0.9,
  },
  overlayTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px',
  },
  overlayDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.5,
  },
};
