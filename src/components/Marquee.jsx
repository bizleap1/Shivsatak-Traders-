import React from 'react';

const items = [
  '🥦 Broccoli', '🥕 Carrots', '🍅 Tomatoes', '🌶️ Green Chillies',
  '🧅 Onions', '🥬 Leafy Greens', '🥒 Cucumbers', '🌽 Sweet Corn',
  '🫑 Bell Peppers', '🫛 Green Peas', '🥦 Fresh Produce', '✈️ Global Export',
];

export default function Marquee() {
  return (
    <div style={s.wrapper}>
      <div style={s.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={s.item}>
            {item}
            <span style={s.dot}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const s = {
  wrapper: {
    background: 'var(--green-deep)',
    overflow: 'hidden',
    padding: '18px 0',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  track: {
    display: 'flex',
    width: 'max-content',
    animation: 'marquee 30s linear infinite',
    gap: '0',
  },
  item: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '1px',
    color: 'rgba(255,255,255,0.7)',
    whiteSpace: 'nowrap',
    padding: '0 8px',
  },
  dot: {
    color: 'var(--amber)',
    fontSize: '8px',
    marginLeft: '16px',
    verticalAlign: 'middle',
  },
};
