import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { contactInfo } from '../data/content';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [ref, visible] = useScrollReveal(0.1);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionEyebrow}>Get in touch</div>
          <h2 className={styles.sectionTitle}>
            We'd love to <em>meet your family</em>
          </h2>
          <p className={styles.sectionIntro}>
            Book a school tour, ask about admissions, or simply find out more about how EDAS Hill Academy can be the right home for your child.
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Find us</h3>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.contactItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className={styles.contactIcon}>{item.icon}</div>
                <div className={styles.contactItemBody}>
                  <label>{item.label}</label>
                  <p>{item.text.split('\\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j < item.text.split('\\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Parent / Guardian name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone number</label>
                  <input type="tel" placeholder="+254 7XX XXX XXX" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label>Enquiry type</label>
                <select>
                  <option>Admissions enquiry</option>
                  <option>School tour request</option>
                  <option>CBC curriculum questions</option>
                  <option>Fees & financial information</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Child's name & grade applying for</label>
                <input type="text" placeholder="e.g. Jane Doe — Grade 2" />
              </div>
              <div className={styles.formGroup}>
                <label>Your message</label>
                <textarea placeholder="Tell us a bit about your child and any questions you have..." rows={4} />
              </div>
              <motion.button
                type="submit"
                className={styles.formSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ background: sent ? '#2D6A4F' : 'var(--green)' }}
              >
                {sent ? "Message sent! We\'ll be in touch soon ✓" : 'Send message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
