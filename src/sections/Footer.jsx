import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.logoMark}>EH</div>
            <p>EDAS Hill Academy is a CBC-accredited primary school offering high-quality education for Grades 1–4 in Nairobi, Kenya. Where every child finds their peak.</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Quick links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => handleNav(e, '#about')}>About us</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')}>CBC Curriculum</a></li>
              <li><a href="#life" onClick={(e) => handleNav(e, '#life')}>School life</a></li>
              <li><a href="#admissions" onClick={(e) => handleNav(e, '#admissions')}>Admissions</a></li>
              <li><a href="#staff" onClick={(e) => handleNav(e, '#staff')}>Our team</a></li>
              <li><a href="#contact" onClick={(e) => handleNav(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Grades</h4>
            <ul>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')}>Grade 1</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')}>Grade 2</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')}>Grade 3</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')}>Grade 4</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Contacts</h4>
            <ul>
              <li><a href="tel:+254700000000">+254 700 000 000</a></li>
              <li><a href="mailto:info@edashillacademy.ac.ke">info@edashillacademy.ac.ke</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook page</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2025 EDAS Hill Academy. All rights reserved.</span>
          <span>Proudly following <span className={styles.yellow}>Kenya CBC Framework</span> · KICD compliant</span>
        </div>
      </div>
    </footer>
  );
}
