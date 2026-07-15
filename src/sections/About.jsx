import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { values } from '../data/content';
import styles from '../styles/About.module.css';

export default function About() {
  const [ref1, visible1] = useScrollReveal(0.2);
  const [ref2, visible2] = useScrollReveal(0.2);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref1}
          initial={{ opacity: 0, y: 30 }}
          animate={visible1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>Who we are</div>
          <h2 className={styles.sectionTitle}>
            Building Kenya's next generation<br />
            <em>one competency at a time</em>
          </h2>
          <p className={styles.sectionIntro}>
            EDAS Hill Academy was founded with a singular belief: that every child carries unique gifts, and it is the school's job to find and nurture them under the CBC framework.
          </p>
        </motion.div>

        <div className={styles.aboutGrid}>
          <motion.div
            className={styles.aboutVisual}
            ref={ref2}
            initial={{ opacity: 0, x: -40 }}
            animate={visible2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.aboutCard}>
              <div className={styles.aboutCardQuote}>
                At EDAS Hill, we don't just teach children,we equip them to think, create, and lead.
              </div>
              <div className={styles.aboutSig}>
                <strong>Mrs. Edith A. Sande</strong>
                Founding Principal, EDAS Hill Academy
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 40 }}
            animate={visible2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3>Our story</h3>
            <p>
              EDAS Hill Academy was established to offer a nurturing, high-quality CBC education for children in Grades 1 through 4. Our name carries the vision of our founders — a school perched on a hill, visible and aspirational, drawing learners upward toward their full potential.
            </p>
            <p>
              We follow the Kenya Institute of Curriculum Development (KICD) CBC framework faithfully, while adding rich co-curricular activities, pastoral care, and a warm school culture that makes children eager to come to school every morning.
            </p>

            <ul className={styles.valuesList}>
              {values.map((v, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={visible2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  {v}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
