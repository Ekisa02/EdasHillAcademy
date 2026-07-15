import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staff } from '../data/content';
import styles from '../styles/Staff.module.css';

export default function Staff() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="staff" className={styles.staff}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>Our team</div>
          <h2 className={styles.sectionTitle}>
            Dedicated educators, <em>passionate about CBC</em>
          </h2>
          <p className={styles.sectionIntro}>
            Our teachers are CBC-trained, P1 and degree-qualified professionals who believe in every learner's potential. Small classes mean every child is known by name.
          </p>
        </motion.div>

        <motion.div
          className={styles.principalFeature}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.principalAvatar}>ES</div>
          <div>
            <blockquote>
              Education is not the filling of a pail, but the lighting of a fire. At EDAS Hill, we light that fire in every learner, from Grade 1 through Grade 4, and equip them to carry it for life.
            </blockquote>
            <div className={styles.principalInfo}>
              <strong>Mrs. Edith A. Sande — Founding Principal</strong>
              <span>B.Ed (Primary), University of Nairobi · 15+ years in CBC transition leadership · Child Safeguarding Certified</span>
            </div>
          </div>
        </motion.div>

        <div className={styles.staffGrid}>
          {staff.map((member, i) => (
            <motion.div
              key={member.initials}
              className={styles.staffCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, background: 'rgba(255,255,255,0.12)' }}
            >
              <div
                className={styles.staffAvatar}
                style={{ background: member.bg, color: member.color || 'var(--green)' }}
              >
                {member.initials}
              </div>
              <h4>{member.name}</h4>
              <div className={styles.staffRole}>{member.role}</div>
              <p>{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
