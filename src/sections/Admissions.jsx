import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { admissionSteps, requirements } from '../data/content';
import styles from '../styles/Admissions.module.css';

export default function Admissions() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="admissions" className={styles.admissions}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>Join our community</div>
          <h2 className={styles.sectionTitle}>
            Admissions: <em>simple, clear, and welcoming</em>
          </h2>
          <p className={styles.sectionIntro}>
            We enrol learners into Grades 1–4. Intake runs at the beginning of each term, with a rolling admissions process throughout the year subject to availability.
          </p>
        </motion.div>

        <div className={styles.admissionsGrid}>
          <div className={styles.stepsList}>
            {admissionSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepBody}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.requirementsCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Documents required</h3>
            <ul className={styles.reqList}>
              {requirements.map((req, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                >
                  {req}
                </motion.li>
              ))}
            </ul>

            <div className={styles.termsBanner}>
              Intake terms: January, May & September
              <span>Limited spaces per class. Early registration is strongly encouraged.</span>
            </div>

            <div className={`${styles.termsBanner} ${styles.ageBanner}`}>
              Age requirement: Grade 1 entrants must be 6 years old by January of the intake year.
              <span>Per Kenya MoE CBC guidelines.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
