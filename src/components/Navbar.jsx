import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        className={styles.navbar}
        style={{
          background: scrolled ? 'rgba(27,67,50,0.95)' : 'rgba(27,67,50,0.85)',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'blur(12px)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.navInner}>
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className={styles.logoLink}>
            <div className={styles.logoMark}>EH</div>
            <div className={styles.logoText}>
              EDAS <span>Hill</span> Academy
            </div>
          </a>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className={styles.navCta}>
                Enroll Now
              </a>
            </li>
          </ul>

          <button className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className={styles.mobileCta}>
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
