import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { grades, pillars } from '../data/content';
import styles from '../styles/Curriculum.module.css';

export default function Curriculum() {
  const [activeGrade, setActiveGrade] = useState('g1');
  const [ref, visible] = useScrollReveal(0.1);

  const currentGrade = grades.find(g => g.id === activeGrade);

  return (
    <section id="curriculum" className={styles.curriculum}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>CBC framework</div>
          <h2 className={styles.sectionTitle}>
            A curriculum that <em>develops the whole child</em>
          </h2>
          <p className={styles.sectionIntro}>
            Kenya's Competency-Based Curriculum (CBC) moves beyond rote learning to develop real skills, values, and attitudes. At EDAS Hill, we bring it to life in every lesson.
          </p>
        </motion.div>

        <div className={styles.gradesTabs}>
          {grades.map((grade) => (
            <button
              key={grade.id}
              className={`${styles.gradeTab} ${activeGrade === grade.id ? styles.active : ''}`}
              onClick={() => setActiveGrade(grade.id)}
            >
              {grade.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGrade}
            className={styles.gradePanel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentGrade.subjects.map((subject, i) => (
              <motion.div
                key={subject.title}
                className={styles.subjectCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(27,67,50,0.12)' }}
              >
                <div className={styles.subjectIcon}>{subject.icon}</div>
                <h4>{subject.title}</h4>
                <p>{subject.desc}</p>
                <span className={styles.strandPill}>{subject.pill}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.cbcPillars}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h3>The 7 core competencies of CBC</h3>
          <p>Every lesson at EDAS Hill Academy is designed to develop one or more of Kenya's seven core competencies, ensuring learners graduate as well-rounded, capable individuals.</p>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className={styles.pillar}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.12)' }}
              >
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
