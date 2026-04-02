import React from 'react';

export default function About({ showLeadership = true }) {
  return (
    <section id="about" style={s.section} className="res-section-pt">
      <div style={s.container} className="res-container res-grid-1">

        {/* Left Visual */}
        <div style={s.visual}>
          <div style={s.imageGrid}>
            <div style={{ ...s.imgBox, gridArea: 'a' }}>
              <img src="/assets/WhatsApp Image 2026-04-01 at 12.45.02 PM.jpeg" alt="Farming" style={s.img} />
            </div>
            <div style={{ ...s.imgBox, gridArea: 'b' }}>
              <img src="/assets/WhatsApp Image 2026-04-01 at 12.45.03 PM.jpeg" alt="Quality Check" style={s.img} />
            </div>
            <div style={{ ...s.imgBox, gridArea: 'c' }}>
              <img src="/assets/WhatsApp Image 2026-04-01 at 12.45.06 PM.jpeg" alt="Packing" style={s.img} />
            </div>
          </div>
          <div style={s.card1}>
            <span style={s.cardEmoji}>🏆</span>
            <div>
              <div style={s.cardTitle}>Registered</div>
              <div style={s.cardSub}>04 Nov 2023</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div style={s.content}>
          <div style={s.label}>WHO WE ARE</div>
          <h2 style={s.h2}>
            Rooted in India's<br />
            <em style={s.italic}>Agricultural Heart</em>
          </h2>
          <div style={s.divider}></div>

          <p style={s.para}>
            <strong>SHIVASTAK TRADERS</strong> is an emerging global export powerhouse headquartered in <strong>Prayagraj, Uttar Pradesh</strong>. Uttar Pradesh is renowned as India's agricultural hub, blessed with fertile Indo-Gangetic plains and a tradition of farming excellence.
          </p>
          <p style={s.para}>
            Under the visionary leadership of <strong>Owner Mr. Anoop Singh</strong> and <strong>CEO Mr. Ankit Singh</strong>, we have built a robust supply chain that connects thousands of local farmers directly to the international market. This direct integration ensures that our produce — from lush green chilies to premium carrots — is harvested and shipped at peak freshness.
          </p>

          <div style={s.infoGrid} className="res-grid-1">
            <div style={s.infoItem}>
              <div style={s.infoTitle}>Our Vision</div>
              <p style={s.infoText}>To become the most trusted global bridge for Indian agricultural excellence.</p>
            </div>
            <div style={s.infoItem}>
              <div style={s.infoTitle}>Our Mission</div>
              <p style={s.infoText}>Ensuring every global household has access to the freshest, chemical-free Indian produce.</p>
            </div>
          </div>

          <div style={s.pillarsSection}>
            <div style={s.pillarsTitle}>OUR CORE PILLARS</div>
            <div style={s.pillarsGrid} className="res-grid-1">
              {[
                { t: 'Integrity', d: 'Honesty in every weight and grade.' },
                { t: 'Quality', d: 'Consistently meeting global food safety norms.' },
                { t: 'Efficiency', d: 'Rapid delivery from farm to container load.' },
              ].map(p => (
                <div key={p.t} style={s.pillarItem}>
                  <div style={s.pillarT}>{p.t}</div>
                  <div style={s.pillarD}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={s.pillsRow}>
            {['Global Logistics', 'FSSAI Certified', 'Ethical Sourcing', 'Cold Storage'].map(p => (
              <span key={p} style={s.pill}>{p}</span>
            ))}
          </div>
        </div>

      </div>

      {/* Leadership Section - Premium Redesign */}
      {showLeadership && (
        <div style={s.leadershipWrapper}>
          <div style={s.leadershipTitle}>OUR LEADERSHIP</div>
          <div style={s.leadershipGrid}>
            {[
              { 
                name: 'Mr. Ankit Singh', 
                role: 'Chief Executive Officer', 
                img: '/assets/Ankit singh.jpeg',
                imgPos: 'top',
                tags: ['Global Logistics', 'Supply Chain', 'Operations'],
                bio: 'A strategic leader focused on digital transformation and operational excellence, Mr. Ankit Singh ensures that every consignment meets international phytosanitary standards and is delivered with 100% efficiency.' 
              },
              { 
                name: 'Mr. Anoop Singh', 
                role: 'Owner & Founder', 
                img: '/assets/Anoop singh.jpeg',
                imgPos: 'top',
                tags: ['Visionary', 'Sourcing Strategy', 'Agriculture Hub'],
                bio: 'With over 20 years of expertise in Indian agriculture, Mr. Anoop Singh founded Shivastak Traders to bridge the gap between rural farmers and global markets, ensuring fair-trade and absolute freshness.' 
              },
            ].map((leader) => (
              <div key={leader.name} style={s.leaderCard}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.querySelector('.leader-glow').style.opacity = '0.4';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
                  e.currentTarget.querySelector('.leader-glow').style.opacity = '0.2';
                }}
              >
                <div style={s.leaderImgContainer}>
                  <div style={s.leaderImgBox}>
                    <img src={leader.img} alt={leader.name} style={{...s.leaderImg, objectPosition: leader.imgPos}} />
                    <div className="leader-glow" style={s.leaderImgGlow}></div>
                  </div>
                </div>
                <div style={s.leaderInfo}>
                  <div style={s.leaderName}>{leader.name}</div>
                  <div style={s.leaderRole}>{leader.role}</div>
                  <div style={s.tagRow}>
                    {leader.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
                  </div>
                  <p style={s.leaderBio}>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

const s = {
  section: {
    background: 'var(--cream)',
    padding: '150px 0 100px',
    overflow: 'hidden',
    position: 'relative',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '80px',
    alignItems: 'center',
  },
  visual: {
    position: 'relative',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateAreas: '"a b" "a c"',
    gridTemplateColumns: '1fr 1fr',
    gridAutoRows: '200px',
    gap: '15px',
    width: '100%',
  },
  imgBox: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    background: '#eee',
    height: '100%',
    width: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  card1: {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    background: 'white',
    borderRadius: '12px',
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    border: '1px solid rgba(76,175,80,0.15)',
    zIndex: 2,
  },
  cardTitle: { fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '14px', color: 'var(--green-deep)' },
  cardSub: { fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' },
  cardEmoji: { fontSize: '28px' },
  content: { display: 'flex', flexDirection: 'column', gap: '20px' },
  label: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: '700',
    color: 'var(--green-deep)',
    lineHeight: 1.2,
  },
  italic: {
    fontStyle: 'italic',
    color: 'var(--green-mid)',
  },
  divider: {
    width: '50px',
    height: '3px',
    background: 'var(--amber)',
    borderRadius: '2px',
  },
  para: {
    fontFamily: 'var(--font-body)',
    fontSize: '15.5px',
    lineHeight: 1.85,
    color: '#4a6040',
    fontWeight: '300',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginTop: '10px',
  },
  infoItem: {
    padding: '20px',
    background: 'white',
    borderRadius: '8px',
    borderLeft: '4px solid var(--green-lime)',
  },
  infoTitle: {
    fontFamily: 'var(--font-body)',
    fontWeight: '700',
    fontSize: '14px',
    color: 'var(--green-deep)',
    marginBottom: '8px',
  },
  infoText: {
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    lineHeight: 1.6,
    color: 'var(--text-light)',
  },
  pillarsSection: {
    marginTop: '10px',
    padding: '24px',
    background: 'var(--green-deep)',
    borderRadius: '12px',
    color: 'white',
  },
  pillarsTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '20px',
    color: 'rgba(255,255,255,0.5)',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  pillarItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  pillarT: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--green-lime)',
  },
  pillarD: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    lineHeight: 1.5,
    color: 'rgba(255,255,255,0.7)',
  },
  pillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '4px',
  },
  pill: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    color: 'var(--green-deep)',
    background: 'rgba(76,175,80,0.1)',
    border: '1px solid rgba(76,175,80,0.25)',
    padding: '6px 16px',
    borderRadius: '100px',
  },
  leadershipWrapper: {
    maxWidth: '1000px',
    margin: '80px auto 0',
    padding: '0 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leadershipTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '3px',
    color: 'var(--green-bright)',
    marginBottom: '40px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  leadershipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    width: '100%',
  },
  leaderCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
    border: '1px solid rgba(0,0,0,0.02)',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    cursor: 'default',
  },
  leaderImgContainer: {
    flexShrink: 0,
    width: '140px',
    height: '140px',
  },
  leaderImgBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  leaderImg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid var(--green-lime)',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 8px 20px rgba(76,175,80,0.2)',
  },
  leaderImgGlow: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    background: 'var(--green-lime)',
    opacity: 0.2,
    filter: 'blur(15px)',
    zIndex: 1,
    transition: 'opacity 0.3s ease',
  },
  leaderInfo: {
    flex: 1,
  },
  leaderName: {
    fontFamily: 'var(--font-serif)',
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--green-deep)',
    marginBottom: '4px',
    letterSpacing: '-0.5px',
  },
  leaderRole: {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--green-bright)',
    marginBottom: '16px',
  },
  tagRow: {
    display: 'flex',
    gap: '6px',
    marginBottom: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: 'var(--text-light)',
    background: 'var(--cream)',
    padding: '4px 12px',
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0,0.05)',
  },
  leaderBio: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    lineHeight: 1.8,
    color: 'var(--text-light)',
    margin: 0,
    maxWidth: '600px',
  },
};
