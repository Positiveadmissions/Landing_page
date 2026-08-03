"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the minimum NEET score required for BDS admission?",
      a: "For BDS in private dental colleges, a score of 200+ can secure admission depending on your category and state. General category students need at least 213 (50th percentile) to qualify. Contact us for a personalised assessment based on your score and category."
    },
    {
      q: "Is the first counselling session really free?",
      a: "Yes, 100% free. We assess your profile, explain your options and give you a clear roadmap — all at no cost. You only pay when you're fully satisfied and choose to proceed with our premium admission services."
    },
    {
      q: "Do you help with both government and private college admissions?",
      a: "Absolutely. We assist with State Counselling (Government Quota), Management Quota, NRI Quota and Institutional Quota seats for both government and private dental and medical colleges across India."
    },
    {
      q: "Can I get BDS admission with a low NEET score?",
      a: "Yes, in many cases. Several reputed private dental colleges have seats available through management quota where the minimum qualifying score (177 for OBC/SC/ST, 213 for General) is sufficient. Our counsellors will analyse your profile and find the best college for your score."
    },
    {
      q: "Which states do you cover for BDS/MDS/MBBS admissions?",
      a: "We operate pan-India with special expertise in Madhya Pradesh, Chhattisgarh, Maharashtra, Karnataka, Rajasthan and Delhi NCR. Our offices are located in Bilaspur and Jabalpur."
    },
    {
      q: "How do I get started?",
      a: "Fill the form above or call us directly at 9522850000 / 9522850000. Our counsellor will call you within 24 hours to begin your personalised admission journey."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq">
      <div className="container faq-inner">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="faq-header"
        >
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Frequently Asked <span className="highlight-blue">Questions</span></h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Quick answers to the most common admission questions.</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="faq-item"
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <span className="faq-icon" style={{ transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{item.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq-cta"
        >
          <p>Still have questions?</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919522850000?text=Hello!%20I%20have%20a%20question%20about%20BDS%2FMDS%2FMBBS%20admission." 
            target="_blank" 
            className="btn-primary"
          >
            <span>💬 Ask on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
