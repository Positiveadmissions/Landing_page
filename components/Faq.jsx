"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the minimum NEET score required for BDS, MBBS & MDS?",
      a: "There is no fixed minimum score for BDS, MBBS, or MDS admissions. Every year, the cutoff changes depending on factors such as the number of applicants, seat availability, and category. Share your NEET score with us, and we will help you understand your chances and suggest the most suitable colleges accordingly."
    },
    {
      q: "Is the first counselling session really free?",
      a: "Yes, it is! Your first counselling session is completely free. We will assess your NEET score, discuss your career goals, answer all your questions, and help you explore the best admission options — without any obligation or hidden charges."
    },
    {
      q: "How can I get admission into BDS, MBBS & MDS with a low NEET score?",
      a: "You may still have a good chance of securing admission to BDS, MBBS, or MDS even with a lower NEET score. The possibilities depend on the current year's cutoff, seat availability, and your category. Our counsellors will carefully analyse your profile and help you explore the best available options."
    },
    {
      q: "How does Positive help with admissions?",
      a: "At Positive, we guide students through every step of the admission process — from analysing your NEET score and shortlisting suitable colleges, to assisting with counselling, choice filling, documentation, and final admission. It is important to note that government counselling is conducted solely by the respective government authorities. Our expertise lies in helping students secure admissions in private medical and dental colleges, where we provide dedicated, end-to-end support."
    },
    {
      q: "Which states do you cover for BDS, MBBS & MDS admissions?",
      a: "We provide admission guidance for BDS, MBBS, and MDS courses across India. Whether you are looking for colleges in your home state or elsewhere, our team will help you identify suitable options and guide you through the complete admission process."
    },
    {
      q: "How do I get started?",
      a: "Getting started is easy. Simply fill out the enquiry form on our website with your basic details. Once we receive your information, one of our admission experts will get in touch with you, understand your requirements, and guide you through the next steps towards securing your admission."
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
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Quick answers to the most common admission questions about BDS, MBBS &amp; MDS.</p>
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
            href="https://wa.me/919522850000?text=Hello!%20I%20have%20a%20question%20about%20BDS%2FMBBS%2FMDS%20admission." 
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
