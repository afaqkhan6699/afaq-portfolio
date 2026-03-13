'use client';
import { useEffect, useRef, useState } from 'react';

const education = [
  {
    degree: 'BS Software Engineering',
    institution: 'Abasyn University',
    period: '2019 – 2023',
    detail: 'CGPA: 3.21',
    icon: '◈',
  },
  {
    degree: 'XII — Computer Science',
    institution: 'Govt. College Peshawar',
    period: '2017 – 2019',
    detail: 'Pre-Engineering (CS)',
    icon: '◇',
  },
  {
    degree: 'X — Science',
    institution: 'Forward Public School',
    period: '2017',
    detail: 'Science Group',
    icon: '◻',
  },
];

const certifications = [
  { title: 'Networks and Network Security', issuer: 'Coursera', icon: '🔒' },
  { title: 'Microsoft Excel & Word', issuer: 'Coursera', icon: '📊' },
  { title: 'WordPress Website Development', issuer: 'Coursera', icon: '⬡' },
  { title: 'HTML, CSS & JavaScript for Web', issuer: 'Coursera', icon: '◈' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco on Campus', icon: '🛡' },
];

export default function Education() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Education */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: vis ? 1 : 0, transition: 'all 0.6s ease' }}>
        <div className="section-label">04 — Background</div>
        <h2 className="section-title">Education</h2>
        <div style={{ width: '60px', height: '1px', background: 'var(--glass-border)', margin: '1.5rem auto 0' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '6rem' }}>
        {education.map((ed, i) => (
          <div key={i} className="glass-card" style={{
            padding: '2rem',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateY(20px)',
            transition: `all 0.6s ease ${i * 0.12}s`,
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: "'Space Mono', monospace", color: 'var(--text-accent)' }}>
              {ed.icon}
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
              {ed.degree}
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              {ed.institution}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{ed.period}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--text-primary)', padding: '0.15rem 0.6rem', border: '1px solid var(--glass-border)', borderRadius: '4px' }}>{ed.detail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', opacity: vis ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}>
        <div className="section-label">05 — Credentials</div>
        <h2 className="section-title">Certifications</h2>
        <div style={{ width: '60px', height: '1px', background: 'var(--glass-border)', margin: '1.5rem auto 0' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {certifications.map((cert, i) => (
          <div key={i} className="glass-card" style={{
            padding: '1.5rem',
            display: 'flex', alignItems: 'flex-start', gap: '1rem',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'scale(0.95)',
            transition: `all 0.5s ease ${0.4 + i * 0.1}s`,
          }}>
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{cert.icon}</span>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {cert.title}
              </p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
