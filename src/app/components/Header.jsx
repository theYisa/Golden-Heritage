'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Controla a mudança de cor do Navbar com base no Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile ao clicar em um link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'headerSolid' : 'headerWater'}`}>
      <div className='headerContainer'>
        
        {/* LOGO AREA */}
        <Link href='/' className='logoArea' onClick={closeMenu}>
          <img src='/logo.png' className='logo' alt="IMS Logo" />
          <div className="logoTextWrapper">
            <span className='logoTitle'>GOLDEN HERITAGE</span>
            <span className='logoSubtitle'>International Model School</span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className={`navigation ${menuOpen ? 'navActive' : ''}`}>
          <Link href='/' className={pathname === '/' ? 'activeLink' : ''} onClick={closeMenu}>Home</Link>
          <Link href="/program" className={pathname === '/program' ? 'activeLink' : ''} onClick={closeMenu}>Our Programs</Link>
          <Link href="/gallery" className={pathname === '/gallery' ? 'activeLink' : ''} onClick={closeMenu}>Gallery</Link>
          <Link href="/about" className={pathname === '/about-us' ? 'activeLink' : ''} onClick={closeMenu}>About Us</Link>
          <Link href="/apply" className="btnApplyMobile" onClick={closeMenu}>Apply Now</Link>
        </nav>

        {/* ACTIONS */}
        <div className="headerActions">
          <Link href="/apply" className='btnApply'>Apply Now</Link>
          
          {/* HAMBURGER MENU (MOBILE) */}
          <button className="mobileMenuBtn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} color='orange'/> : <Menu size={28} />}
          </button>
        </div>

      </div>
    </header>
  );
}