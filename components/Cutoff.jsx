"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Cutoff() {
  const ugCutoffs = [
    { category: "General", percentile: "50th Percentile", score: "213" },
    { category: "OBC", percentile: "40th Percentile", score: "177" },
    { category: "SC / ST", percentile: "40th Percentile", score: "177" },
    { category: "General – EWS", percentile: "45th Percentile", score: "194" },
  ];

  const pgCutoffs = [
    { category: "General", percentile: "50th Percentile", score: "As per NTA" },
    { category: "OBC", percentile: "40th Percentile", score: "As per NTA" },
    { category: "SC / ST", percentile: "40th Percentile", score: "As per NTA" },
    { category: "General – EWS", percentile: "45th Percentile", score: "As per NTA" },
  ];

  return (
    <section id="cutoff" style={{ background: "var(--light-grey)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="cutoff-header"
        >
          <div className="section-tag">Qualifying Cutoffs</div>
          <h2 className="section-title">Important <span className="highlight-blue">NEET Cutoffs</span></h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Official qualifying cutoffs for the current academic year. These are the minimum scores required to be eligible for admission.
          </p>
        </motion.div>

        <div className="cutoff-grid">
          {/* NEET UG Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cutoff-table-wrap"
          >
            <div className="cutoff-table-header">
              <span className="cutoff-table-icon">🦷</span>
              <div>
                <h3 className="cutoff-table-title">BDS &amp; MBBS</h3>
                <p className="cutoff-table-sub">NEET UG — Undergraduate</p>
              </div>
            </div>
            <table className="cutoff-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Percentile</th>
                  <th>Min. Score</th>
                </tr>
              </thead>
              <tbody>
                {ugCutoffs.map((row, i) => (
                  <tr key={i}>
                    <td>{row.category}</td>
                    <td>{row.percentile}</td>
                    <td className="cutoff-score">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="cutoff-note">* Cutoffs are subject to change each year based on NTA guidelines.</p>
          </motion.div>

          {/* NEET MDS Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cutoff-table-wrap"
          >
            <div className="cutoff-table-header">
              <span className="cutoff-table-icon">🏥</span>
              <div>
                <h3 className="cutoff-table-title">MDS</h3>
                <p className="cutoff-table-sub">NEET MDS — Postgraduate</p>
              </div>
            </div>
            <table className="cutoff-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Percentile</th>
                  <th>Min. Score</th>
                </tr>
              </thead>
              <tbody>
                {pgCutoffs.map((row, i) => (
                  <tr key={i}>
                    <td>{row.category}</td>
                    <td>{row.percentile}</td>
                    <td className="cutoff-score">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="cutoff-note">* Exact MDS cutoff scores are declared by NTA after the exam. Contact us for the latest data.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cutoff-cta"
        >
          <p>Not sure if your score qualifies? Let us help you find out.</p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="btn-primary"
          >
            <span>Check Your Eligibility →</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
