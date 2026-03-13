'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    if (!isHome) setScrolled(true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const homeLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
  ];
  const innerLinks = [
    { label: 'Home', href: '/' },
  ];
  const links = isHome ? homeLinks : innerLinks;

  return (
    <>
      <nav className={`afaq-nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">MA<span>.dev</span></Link>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href} className={pathname===l.href?'active':''}>{l.label}</a>)}
          <Link href="/projects" className={`${pathname==='/projects'?'active':''}`}>Projects</Link>
          <Link href="/contact" className={`nav-cta${pathname==='/contact'?' active':''}`}>Contact</Link>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <div className="toggle-thumb" style={{transform:theme==='dark'?'translateX(0)':'translateX(24px)'}}>
            {theme==='dark'?'🌙':'☀️'}
          </div>
        </button>
        <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={{transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
          <span style={{opacity:menuOpen?0:1}}/>
          <span style={{transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen?' open':''}`}>
        {links.map(l=><a key={l.href} href={l.href} className="mobile-link" onClick={()=>setMenuOpen(false)}>{l.label}</a>)}
        <Link href="/projects" className="mobile-link" onClick={()=>setMenuOpen(false)}>Projects ↗</Link>
        <Link href="/contact" className="mobile-link" onClick={()=>setMenuOpen(false)}>Contact ↗</Link>
      </div>
    </>
  );
}
