"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Courses() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="services">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <div className="section-tag">Our Specialisation</div>
          <h2 className="section-title">Dental &amp; Medical<br /><span className="highlight-blue">Admission Experts</span></h2>
          <p className="section-subtitle">
            We specialise exclusively in BDS, MDS and MBBS admissions — giving you focused, expert guidance rather than a one-size-fits-all approach.
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="courses-grid"
        >
          <motion.div variants={cardVariants} className="course-card featured">
            <div className="course-card-top">
              <div className="course-icon">🦷</div>
              <div className="course-badge">Most Popular</div>
            </div>
            <h3 className="course-title">BDS</h3>
            <p className="course-full">Bachelor of Dental Surgery</p>
            <p className="course-desc">Complete support for BDS admissions in top government and private dental colleges across India. NEET-based counselling with full documentation assistance.</p>
            <ul className="course-highlights">
              <li>✓ Government &amp; Private Dental Colleges</li>
              <li>✓ State &amp; Management Quota</li>
              <li>✓ Transparent Fee Guidance</li>
              <li>✓ Hostel &amp; Scholarship Support</li>
            </ul>
            <a href="#contact" className="course-cta">Get Counselling →</a>
          </motion.div>

          <motion.div variants={cardVariants} className="course-card">
            <div className="course-card-top">
              <div className="course-icon">🏥</div>
              <div className="course-badge gold-badge">Specialist</div>
            </div>
            <h3 className="course-title">MDS</h3>
            <p className="course-full">Master of Dental Surgery</p>
            <p className="course-desc">Expert guidance for MDS admissions and specialisation selection. We help you choose the right branch and institution for your dental career.</p>
            <ul className="course-highlights">
              <li>✓ All MDS Specialisations</li>
              <li>✓ NEET-MDS Counselling</li>
              <li>✓ College &amp; Branch Selection</li>
              <li>✓ Post-BDS Career Planning</li>
            </ul>
            <a href="#contact" className="course-cta">Get Counselling →</a>
          </motion.div>

          <motion.div variants={cardVariants} className="course-card">
            <div className="course-card-top">
              <div className="course-icon">🩺</div>
              <div className="course-badge">Medical</div>
            </div>
            <h3 className="course-title">MBBS</h3>
            <p className="course-full">Bachelor of Medicine &amp; Surgery</p>
            <p className="course-desc">Comprehensive MBBS admission support for NEET qualified students. We guide you to the best possible college based on your score, category and preference.</p>
            <ul className="course-highlights">
              <li>✓ Government &amp; Private MBBS</li>
              <li>✓ All India &amp; State Quota</li>
              <li>✓ Score-based College Shortlist</li>
              <li>✓ Complete Documentation</li>
            </ul>
            <a href="#contact" className="course-cta">Get Counselling →</a>
          </motion.div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="process-block"
        >
          <div className="process-block-header">
            <div className="section-tag" style={{ margin: "0 auto 12px" }}>How We Work</div>
            <h3 className="process-block-title">Your Admission in <span className="highlight-blue">5 Steps</span></h3>
          </div>
          <div className="process-steps-row">
            <div className="process-step-mini">
              <div className="step-num-mini">1</div>
              <div className="step-icon-mini">🎯</div>
              <div className="step-text-mini">Free Counselling Call</div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step-mini">
              <div className="step-num-mini">2</div>
              <div className="step-icon-mini">📋</div>
              <div className="step-text-mini">Profile Evaluation</div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step-mini">
              <div className="step-num-mini">3</div>
              <div className="step-icon-mini">🏛️</div>
              <div className="step-text-mini">College Selection</div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step-mini">
              <div className="step-num-mini">4</div>
              <div className="step-icon-mini">📁</div>
              <div className="step-text-mini">Documentation</div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step-mini">
              <div className="step-num-mini">5</div>
              <div className="step-icon-mini">🎓</div>
              <div className="step-text-mini">Admission Confirmed!</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
