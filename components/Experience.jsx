'use client';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    role: 'WordPress Developer',
    company: 'Freelancing',
    period: 'January 2025 — Present',
    type: 'Current',
    points: [
      'Developed custom WordPress websites for various international clients.',
      'Customized themes and plugins based on unique project requirements.',
      'Improved website speed, security, and overall performance metrics.',
      'Provided ongoing maintenance, updates, and emergency bug fixes.',
    ],
  },
  {
    role: 'Website Designer',
    company: 'Softhat IT Solutions PVT.',
    period: 'October 2023 — October 2025',
    type: 'Full-time',
    points: [
      'Worked as a Website Designer at Softhat IT Solutions Private Limited.',
      'Gained deep expertise in page builders: Elementor & Bricks Builder.',
      'Delivered responsive, high-performance websites for clients.',
      'Provided regular maintenance, updates, and bug resolution.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{
      padding: '7rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <div className="section-label">03 — Career</div>
        <h2 className="section-title">Experience</h2>
        <div style={{ width: '60px', height: '1px', background: 'var(--glass-border)', margin: '1.5rem auto 0' }} />
      </div>

      <div style={{ position: 'relative' }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: 0, bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--glass-border) 10%, var(--glass-border) 90%, transparent)',
        }} />

        {experiences.map((exp, i) => (
          <div key={i} style={{
            paddingLeft: '2.5rem',
            marginBottom: '3rem',
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(-20px)',
            transition: `all 0.6s ease ${i * 0.2}s`,
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-5px',
              top: '1.5rem',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--text-accent)',
              border: '2px solid var(--bg-primary)',
              boxShadow: '0 0 12px var(--accent-glow)',
            }} />

            <div className="glass-card" style={{ padding: '2rem 2.5rem' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                padding: '0.2rem 0.75rem',
                marginBottom: '1rem',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: i === 0 ? '#4ade80' : 'var(--text-secondary)', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  {exp.type}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-accent)', marginBottom: '0.25rem' }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
                    @ {exp.company}
                  </p>
                </div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--text-secondary)', padding: '0.3rem 0.75rem', border: '1px solid var(--glass-border)', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                  {exp.period}
                </span>
              </div>

              <ul style={{ marginTop: '1.25rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <span style={{ marginTop: '0.55rem', minWidth: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-secondary)', display: 'inline-block' }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
