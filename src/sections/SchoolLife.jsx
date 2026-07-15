import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { lifeCards, schedule, clubs } from '../data/content';
import styles from '../styles/SchoolLife.module.css';

export default function SchoolLife() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="life" className={styles.life}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>School life</div>
          <h2 className={styles.sectionTitle}>
            More than a classroom — <em>a community</em>
          </h2>
          <p className={styles.sectionIntro}>
            Learning at EDAS Hill happens everywhere — in classrooms, on the field, in the garden, in the lab, and in every interaction between our learners and teachers.
          </p>
        </motion.div>

        <div className={styles.lifeGrid}>
          {lifeCards.map((card, i) => (
            <motion.div
              key={card.title}
              className={styles.lifeCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(27,67,50,0.15)' }}
            >
              <div className={styles.lifeCardImg} style={{ background: card.bg }}>
                {card.icon}
              </div>
              <div className={styles.lifeCardBody}>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.scheduleSection}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.scheduleTitle}>A typical day at EDAS Hill</div>
            <div className={styles.scheduleList}>
              {schedule.map((item, i) => (
                <motion.div
                  key={item.time}
                  className={styles.scheduleRow}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ background: 'var(--off-white)', x: 4 }}
                >
                  <span className={styles.scheduleTime}>{item.time}</span>
                  <span className={styles.scheduleDot} />
                  <span className={styles.scheduleAct}>{item.act}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.activitiesWrap}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Co-curricular clubs</h3>
            <div className={styles.activityChips}>
              {clubs.map((club, i) => (
                <motion.span
                  key={club}
                  className={styles.chip}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, background: 'var(--yellow-pale)' }}
                >
                  {club}
                </motion.span>
              ))}
            </div>

            <div className={styles.termsBanner}>
              Annual events include:
              <span>Sports Day · Science Fair · Cultural Day · Prize-Giving · Open Day · National Celebrations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
