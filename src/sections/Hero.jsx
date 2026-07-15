import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { heroStats } from '../data/content';
import styles from '../styles/Hero.module.css';

function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1,
      top: `${Math.random() * 70}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className={styles.stars}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroHill() {
  return (
    <div className={styles.heroHill}>
      <svg viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={styles.hillSvg}>
        <path d="M0,260 L0,180 Q180,80 360,140 Q500,180 600,100 Q720,20 820,80 Q920,140 1080,60 Q1240,-20 1440,100 L1440,260 Z" fill="#2D6A4F" opacity="0.5"/>
        <path d="M0,260 L0,210 Q200,120 400,180 Q560,220 720,140 Q880,60 1060,130 Q1240,200 1440,150 L1440,260 Z" fill="#1B4332" opacity="0.7"/>
        <path d="M0,260 L0,240 Q360,180 720,200 Q1080,220 1440,190 L1440,260 Z" fill="#0F2419"/>
        <g fill="#52B788" opacity="0.6">
          <polygon points="80,220 95,188 110,220"/>
          <polygon points="87,212 95,192 103,212"/>
          <polygon points="140,230 158,195 176,230"/>
          <polygon points="148,222 158,198 168,222"/>
          <polygon points="1300,210 1318,175 1336,210"/>
          <polygon points="1308,202 1318,178 1328,202"/>
          <polygon points="1360,225 1380,188 1400,225"/>
          <polygon points="1368,217 1380,192 1392,217"/>
        </g>
        <g fill="#0a2318">
          <rect x="660" y="190" width="120" height="70"/>
          <polygon points="650,190 780,190 715,155"/>
          <rect x="695" y="215" width="40" height="45"/>
          <rect x="665" y="200" width="25" height="20"/>
          <rect x="750" y="200" width="25" height="20"/>
          <rect x="715" y="120" width="3" height="38"/>
          <polygon points="718,120 740,128 718,136" fill="#F5C518"/>
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroSky} />
      <StarField />
      <HeroHill />

      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroEyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CBC · Grades 1 – 4 · Kenya
        </motion.div>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          EDAS
          <span className={styles.hill}>Hill</span>
          <span className={styles.academy}>Academy</span>
        </motion.h1>

        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Where every child finds their peak. A competency-based learning environment rooted in creativity, character, and community — nestled in the heart of Kenya.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#admissions" onClick={(e) => handleScroll(e, '#admissions')} className={styles.btnPrimary}>
            Apply for Admission
          </a>
          <a href="#curriculum" onClick={(e) => handleScroll(e, '#curriculum')} className={styles.btnOutline}>
            Explore CBC Curriculum
          </a>
        </motion.div>
      </div>

      <div className={styles.heroStats}>
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <div className={styles.statNum}>{stat.num}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
