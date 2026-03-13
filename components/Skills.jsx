'use client';
import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'WordPress',
    icon: '⬡',
    items: [
      { name: 'Custom Theme Development', level: 92 },
      { name: 'Elementor & Bricks Builder', level: 95 },
      { name: 'PSD to WordPress', level: 88 },
      { name: 'Speed Optimization', level: 85 },
      { name: 'Plugin Customization', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3 / Tailwind', level: 88 },
      { name: 'JavaScript', level: 75 },
      { name: 'Python (Basics)', level: 45 },
    ],
  },
  {
    category: 'Tools & More',
    icon: '◉',
    items: [
      { name: 'MS Word & Excel', level: 85 },
      { name: 'Network Security', level: 60 },
    ],
  },
];

function SkillBar({ name, level, visible }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
          {name}
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '3px',
        background: 'var(--glass-border)',
        borderRadius: '50px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: 'var(--text-accent)',
          borderRadius: '50px',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 8px var(--accent-glow)',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{
      padding: '7rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <div className="section-label">02 — Expertise</div>
        <h2 className="section-title">Skills & Tools</h2>
        <div style={{ width: '60px', height: '1px', background: 'var(--glass-border)', margin: '1.5rem auto 0' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {skillGroups.map((group, gi) => (
          <div key={group.category}
            className="glass-card"
            style={{
              padding: '2rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: `all 0.6s ease ${gi * 0.15}s`,
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--text-accent)', fontFamily: "'Space Mono', monospace" }}>
                {group.icon}
              </span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-accent)' }}>
                {group.category}
              </h3>
            </div>

            {group.items.map(skill => (
              <SkillBar key={skill.name} {...skill} visible={visible} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
