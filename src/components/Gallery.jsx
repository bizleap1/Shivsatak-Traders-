import React, { useState } from 'react';

const images = [
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.02 PM.jpeg', title: 'Premium Red Onions', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM.jpeg', title: 'Fresh Garlic Bulbs', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM.jpeg', title: 'Quality Chillies', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.09 PM.jpeg', title: 'Ginger Stocks', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.10 PM.jpeg', title: 'Vegetable Graded', category: 'Quality' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.02 PM (1).jpeg', title: 'Bulk Stock', category: 'Inventory' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM (1).jpeg', title: 'Supply Chain', category: 'Operations' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.29.29 PM (2).jpeg', title: 'Sorting Facility', category: 'Operations' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.07 PM.jpeg', title: 'Fresh Gourd', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM (1).jpeg', title: 'Potato Grade A', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.08 PM (2).jpeg', title: 'Farm Fresh', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.09 PM (1).jpeg', title: 'Export Quality', category: 'Quality' },
  { url: '/assets/WhatsApp Image 2026-04-02 at 12.30.10 PM (1).jpeg', title: 'Crate Packing', category: 'Operations' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.02 PM.jpeg', title: 'Field Sourcing', category: 'Operations' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.03 PM.jpeg', title: 'Inspection Point', category: 'Quality' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.06 PM.jpeg', title: 'Cold Chain', category: 'Quality' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.09 PM.jpeg', title: 'Daily Harvest', category: 'Produce' },
  { url: '/assets/WhatsApp Image 2026-04-01 at 12.45.10 PM.jpeg', title: 'Ready to Ship', category: 'Operations' },
];

const categories = ['All', 'Produce', 'Quality', 'Operations', 'Inventory'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section id="gallery" style={s.section}>
      <div style={s.container} className="res-container">
        <div style={s.header}>
          <div style={s.label}>VISUAL JOURNEY</div>
          <h2 style={s.h2}>
            Our <em style={s.italic}>Gallery</em>
          </h2>
          <p style={s.sub}>
            A curated look at our farms, processes, and premium exports. Click any image to expand.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={s.filterGroup}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                ...s.filterBtn,
                background: activeTab === cat ? 'var(--green-deep)' : 'transparent',
                color: activeTab === cat ? 'white' : 'var(--text-mid)',
                borderColor: activeTab === cat ? 'var(--green-deep)' : 'rgba(0,0,0,0.1)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={s.grid}>
          {filteredImages.map((img, i) => (
            <div 
              key={i} 
              style={s.card} 
              onClick={() => setSelectedImg(img)}
              className="gallery-card"
            >
              <div style={s.imgBox}>
                <img src={img.url} alt={img.title} style={s.img} />
                <div style={s.overlay}>
                  <div style={s.overlayCategory}>{img.category}</div>
                  <div style={s.overlayTitle}>{img.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div style={s.modal} onClick={() => setSelectedImg(null)}>
          <button style={s.closeBtn}>×</button>
          <div style={s.modalContent} onClick={e => e.stopPropagation()}>
            <img src={selectedImg.url} alt={selectedImg.title} style={s.modalImg} />
            <div style={s.modalInfo}>
              <div style={s.modalCat}>{selectedImg.category}</div>
              <div style={s.modalTitle}>{selectedImg.title}</div>
            </div>
          </div>
        </div>
      )}

      {/* Internal CSS for Hover effects */}
      <style>{`
        .gallery-card { transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: zoom-in; }
        .gallery-card:hover { transform: translateY(-10px); }
        .gallery-card img { transition: transform 0.6s ease; }
        .gallery-card:hover img { transform: scale(1.1); }
        .gallery-card .overlay { transition: opacity 0.4s ease, background 0.4s ease; }
        .gallery-card:hover .overlay { opacity: 1; background: linear-gradient(to top, rgba(13,43,16,0.95) 0%, rgba(13,43,16,0.2) 100%); }
        .gallery-card .overlay div { transition: transform 0.4s ease; transform: translateY(20px); }
        .gallery-card:hover .overlay div { transform: translateY(0); }
      `}</style>
    </section>
  );
}

const s = {
  section: {
    padding: '120px 0 100px',
    background: 'var(--cream)',
    minHeight: '100vh',
    position: 'relative',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
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
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '10px 24px',
    borderRadius: '100px',
    border: '1px solid',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
    background: 'white',
    height: '420px',
    position: 'relative',
    border: '1px solid rgba(0,0,0,0.03)',
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
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '30px',
    opacity: 0,
  },
  overlayCategory: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--green-lime)',
    marginBottom: '6px',
  },
  overlayTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
  },
  modal: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(13, 24, 10, 0.95)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    cursor: 'zoom-out',
    backdropFilter: 'blur(10px)',
  },
  closeBtn: {
    position: 'absolute',
    top: '30px',
    right: '40px',
    fontSize: '48px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.2s',
  },
  modalContent: {
    maxWidth: '1000px',
    width: '100%',
    position: 'relative',
    cursor: 'default',
    animation: 'fadeUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
  modalImg: {
    width: '100%',
    borderRadius: '24px',
    boxShadow: '0 30px 90px rgba(0,0,0,0.5)',
  },
  modalInfo: {
    marginTop: '24px',
    textAlign: 'center',
  },
  modalCat: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: 'var(--green-lime)',
    marginBottom: '8px',
  },
  modalTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '28px',
    fontWeight: '700',
    color: 'white',
  },
};
