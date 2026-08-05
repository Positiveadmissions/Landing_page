"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the minimum NEET score required for BDS admission?",
      a: "There isn't a fixed minimum score for BDS admission. Every year, the cutoff changes depending on factors like the number of applicants, seat availability, and category. Share your NEET score with us, and we'll help you understand your chances and suggest the best colleges accordingly."
    },
    {
      q: "Is the first counselling session really free?",
      a: "Yes, it is! Your first counselling session is completely free. We'll understand your NEET score, discuss your career goals, answer all your questions, and help you explore the best admission options—without any obligation or hidden charges."
    },
    {
      q: "Do you help with both government and private college admissions?",
      a: "We currently focus on admissions to private dental and medical colleges only. Whether you need help choosing the right college, understanding the counselling process, or completing the required documentation, our experienced team will guide you every step of the way, making your admission journey simple, transparent, and hassle-free."
    },
    {
      q: "Can I get BDS admission with a low NEET score?",
      a: "Yes, you may still have a good chance of getting BDS admission, even with a lower NEET score. The possibilities depend on the current year's cutoff, seat availability, and your category. Our counsellors will help you explore the best options based on your score."
    },
    {
      q: "Which states do you cover for BDS/MDS/MBBS admissions?",
      a: "We provide admission guidance for BDS, MDS, and MBBS courses across India. Whether you're looking for colleges in your home state or elsewhere, our team will help you find suitable options and guide you through the complete admission process."
    },
    {
      q: "How do I get started?",
      a: "Getting started is easy. Simply fill out the enquiry form on our website with your basic details. Once we receive your information, one of our admission experts will get in touch, understand your requirements, and guide you through the next steps toward securing your admission."
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
              className={`faq-item${openIndex === idx ? " open" : ""}`}
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
              <div className="faq-answer">
                <div className="faq-answer-inner">{item.a}</div>
              </div>
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
