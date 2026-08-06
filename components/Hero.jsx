"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hero-left"
        >
          <div className="hero-badge">
            <span className="dot"></span>
            India&apos;s Trusted Dental &amp; Medical Admission Partner
          </div>

          <h1 className="hero-title">
            Your <span className="gold">Dream College</span><br />Begins Here.
          </h1>

          <p className="hero-sub">
            Expert admission guidance for <strong>BDS, MBBS &amp; MDS</strong> in top dental and medical colleges across India.<br /><br />
            <strong>100% Transparent Counselling.</strong> No Hidden Charges. Personalized Support.
          </p>

          <div className="hero-pills">
            <div className="hero-pill">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
              BDS (Dental)
            </div>
            <div className="hero-pill">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
              MBBS (Medical)
            </div>
            <div className="hero-pill">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
              MDS (Specialisation)
            </div>
            <div className="hero-pill">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
              15+ Years Experience
            </div>
          </div>

          <div className="hero-btns">
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact" 
              className="btn-primary"
            >
              <span>Book Free Counselling</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/919522850000?text=Hello!%20I%20need%20help%20with%20BDS%2FMDS%2FMBBS%20admission." 
              target="_blank" 
              className="btn-outline"
            >
              💬 WhatsApp Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.instagram.com/positive_admission_guidance?igsh=NXAzcGxqd2g0M2s5" 
              target="_blank" 
              className="btn-outline btn-outline-insta"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Follow Us
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Indian Students Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-right"
        >
          <div className="hero-image-wrap">
            <div className="hero-main-card">
              <Image
                src="/hero-image.png"
                alt="Indian students celebrating their BDS MDS MBBS college admission"
                width={600}
                height={400}
                style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "var(--radius-lg)", marginBottom: "20px" }}
                priority
              />
              <div className="hero-card-overlay">
                <div className="hero-card-stat">
                  <span className="hcs-num">5000+</span>
                  <span className="hcs-label">Students Guided</span>
                </div>
                <div className="hero-card-divider"></div>
                <div className="hero-card-stat">
                  <span className="hcs-num">95%</span>
                  <span className="hcs-label">Success Rate</span>
                </div>
                <div className="hero-card-divider"></div>
                <div className="hero-card-stat">
                  <span className="hcs-num">15+</span>
                  <span className="hcs-label">Years</span>
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="floating-stat" 
              style={{ top: "-18px", left: "-28px" }}
            >
              <div className="stat-icon gold">🦷</div>
              <div className="stat-info">
                <div className="stat-val">BDS / MBBS</div>
                <div className="stat-label">Dental &amp; Medical</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, delay: 1.5, ease: "easeInOut" }}
              className="floating-stat" 
              style={{ bottom: "60px", right: "-28px" }}
            >
              <div className="stat-icon blue">🩺</div>
              <div className="stat-info">
                <div className="stat-val">MBBS</div>
                <div className="stat-label">Medical Expert</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
