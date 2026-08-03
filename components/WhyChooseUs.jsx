"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function WhyChooseUs() {
  const checklist = [
    { title: "Transparent Guidance, No Hidden Charges", desc: "100% fee transparency — you know exactly what you pay, always." },
    { title: "Dental & Medical Specialists Only", desc: "We focus exclusively on BDS, MDS and MBBS — deep expertise, not a generalist approach." },
    { title: "Latest NEET Cutoff Analysis", desc: "Real-time data on cutoffs, seats and trends for the current academic year." },
    { title: "Scholarship Assistance", desc: "We identify and help apply for scholarships to reduce your financial burden." },
    { title: "Complete Documentation & Post-Admission Support", desc: "From enrollment to settling in college — we stay with you every step." }
  ];

  const stats = [
    { target: 5000, suffix: "+", label: "Students" },
    { target: 95, suffix: "%", label: "Success Rate" },
    { target: 15, suffix: "+", label: "Years Exp." },
  ];

  return (
    <section id="why" style={{ background: "var(--light-grey)" }}>
      <div className="container">
        <div className="why-inner">
          {/* Left: Stats Illustration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="why-illustration"
          >
            <div className="why-illustration-inner">
              <div className="why-big-icon">🦷</div>
              <div className="why-illustration-title">Positive Admission Guidance</div>
              <div className="why-illustration-sub">Trusted by 5000+ students &amp; families since 2009</div>

              {/* Animated counters using IntersectionObserver */}
              <div className="why-stats-row">
                {stats.map((stat) => (
                  <div className="why-stat" key={stat.label}>
                    <span className="why-stat-num">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2000} />
                    </span>
                    <span className="why-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Checklist Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="why-right-content"
          >
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">
              India&apos;s Most <span className="highlight-blue">Trusted</span><br />Dental Admission Partner
            </h2>
            <p className="section-subtitle">
              We don&apos;t just find you a college — we build your entire admission strategy.
            </p>

            <div className="why-checklist">
              {checklist.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="check-item"
                >
                  <div className="check-icon">✓</div>
                  <div className="check-info">
                    <div className="check-title">{item.title}</div>
                    <div className="check-desc">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="btn-primary"
              style={{ marginTop: "28px", display: "inline-flex" }}
            >
              Book Free Counselling →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
