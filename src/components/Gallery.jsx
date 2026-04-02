import React, { useState, useEffect } from 'react';

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
  const [isAnimate, setIsAnimate] = useState(true);

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  // Trigger animation when activeTab changes
  useEffect(() => {
    setIsAnimate(false);
    const timer = setTimeout(() => setIsAnimate(true), 20);
    return () => clearTimeout(timer);
  }, [activeTab]);

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
                boxShadow: activeTab === cat ? '0 10px 20px rgba(26,58,31,0.2)' : 'none',
                borderColor: activeTab === cat ? 'var(--green-deep)' : 'rgba(0,0,0,0.06)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-container" style={s.masonry}>
          {isAnimate && filteredImages.map((img, i) => (
            <div 
              key={`${img.url}-${i}`} 
              style={{
                ...s.card,
                animation: `fadeInUp 0.6s ease forwards`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
              }} 
              onClick={() => setSelectedImg(img)}
              className="gallery-card"
            >
              <div style={s.imgBox}>
                <img src={img.url} alt={img.title} style={s.img} loading="lazy" />
                <div style={s.overlay}>
                  <div style={s.overlayIcon}>🔍</div>
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

          </div>
        </div>
      )}

      {/* Internal CSS for Masonry & Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gallery-card { 
          display: inline-block; 
          width: 100%; 
          margin-bottom: 24px; 
          break-inside: avoid; 
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          cursor: zoom-in;
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .gallery-card:hover { transform: scale(1.02); z-index: 10; }
        .gallery-card img { width: 100%; height: auto; display: block; filter: saturate(1.1); transition: transform 0.7s ease; }
        .gallery-card:hover img { transform: scale(1.08); }
        .gallery-card .overlay { opacity: 0; transition: all 0.4s ease; }
        .gallery-card:hover .overlay { opacity: 1; background: linear-gradient(to top, rgba(13,43,16,0.95) 0%, rgba(13,43,16,0.1) 100%); }
        .gallery-card .overlay div { transform: translateY(20px); transition: transform 0.4s ease; }
        .gallery-card:hover .overlay div { transform: translateY(0); }

        @media (max-width: 1024px) {
          .masonry-container { column-count: 2 !important; }
        }
        @media (max-width: 768px) {
          .masonry-container { column-count: 1 !important; }
          .gallery-card .overlay { opacity: 1 !important; background: linear-gradient(to top, rgba(13,43,16,0.8) 0%, transparent 100%) !important; }
          .gallery-card .overlay div { transform: translateY(0) !important; }
          .gallery-card .overlayTitle { font-size: 18px !important; }
        }
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
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 40px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
    marginBottom: '16px',
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: 1.1,
    marginBottom: '20px',
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--green-mid)',
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    fontWeight: '300',
    color: 'var(--text-light)',
    maxWidth: '680px',
    margin: '0 auto',
    lineHeight: 1.8,
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '60px',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '12px 32px',
    borderRadius: '100px',
    border: '1px solid',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
  masonry: {
    columnCount: 3,
    columnGap: '24px',
    width: '100%',
    transition: 'all 0.3s ease',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.04)',
    backfaceVisibility: 'hidden',
  },
  imgBox: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '32px',
    zIndex: 2,
  },

  overlayIcon: {
    position: 'absolute',
    top: '32px',
    right: '32px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    transform: 'scale(0.8)',
    opacity: 0.8,
  },
  modal: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(10, 20, 10, 0.98)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vw',
    cursor: 'zoom-out',
    backdropFilter: 'blur(20px)',
  },
  closeBtn: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    fontSize: '56px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity 0.3s',
  },
  modalContent: {
    maxWidth: '1200px',
    width: '100%',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'default',
  },
  modalImg: {
    maxWidth: '100%',
    maxHeight: '75vh',
    borderRadius: '16px',
    boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
    objectFit: 'contain',
  },

};
