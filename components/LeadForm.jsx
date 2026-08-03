"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    neetScore: "",
    neetQualified: "",
    category: "",
    state: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.course) newErrors.course = "Please select a course.";
    if (!formData.state) newErrors.state = "Please select your state.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("student_leads").insert([
        {
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          course: formData.course,
          neet_score: formData.neetScore ? parseInt(formData.neetScore, 10) : null,
          neet_qualified: formData.neetQualified || null,
          category: formData.category || null,
          state: formData.state
        }
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        alert("Something went wrong saving your inquiry. Please try again or WhatsApp us directly at 9522850000.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission exception:", err);
      alert("Error submitting form. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section" id="contact">
      <div className="container form-inner">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="form-left"
        >
          <div className="section-tag">Free Expert Guidance</div>
          <h2 className="section-title">
            Get Your<br /><span className="highlight">Admission Query</span><br />Answered Today
          </h2>
          <p className="section-subtitle">
            Share your details and our expert counsellor will call you within <strong style={{ color: "white" }}>24 hours</strong> with a personalised plan.
          </p>

          <div className="form-perks">
            <div className="form-perk"><div className="perk-check">✓</div> Free 1-on-1 Counselling Call</div>
            <div className="form-perk"><div className="perk-check">✓</div> Personalized College Shortlist</div>
            <div className="form-perk"><div className="perk-check">✓</div> NEET Score-based Analysis</div>
            <div className="form-perk"><div className="perk-check">✓</div> No Hidden Charges, Ever</div>
            <div className="form-perk"><div className="perk-check">✓</div> 24×7 WhatsApp Support</div>
          </div>

          <div className="form-contact-pills">
            <a href="tel:9522850000" className="fcp">📞 9522850000</a>
            <a href="tel:9340210222" className="fcp">📞 9340210222</a>
            <a href="tel:9179461024" className="fcp">📞 9179461024</a>
            <a href="https://wa.me/919522850000" target="_blank" className="fcp fcp-green">💬 WhatsApp</a>
            <a href="https://www.instagram.com/positive_admission_guidance?igsh=NXAzcGxqd2g0M2s5" target="_blank" className="fcp fcp-insta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="form-right"
        >
          <div className="form-card">
            {!submitted ? (
              <div>
                <div className="form-title">Book Free Counselling 🎓</div>
                <div className="form-sub">Fill in your details — we&apos;ll call you back shortly.</div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="fullName">Full Name <span className="required">*</span></label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`form-control ${errors.fullName ? "error" : ""}`} 
                        placeholder="e.g. Rahul Sharma" 
                        required 
                      />
                      {errors.fullName && <span className="error-msg" style={{ display: "block" }}>{errors.fullName}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="phone">Mobile Number <span className="required">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-control ${errors.phone ? "error" : ""}`} 
                        placeholder="10-digit mobile number" 
                        maxLength={10}
                        required 
                      />
                      {errors.phone && <span className="error-msg" style={{ display: "block" }}>{errors.phone}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="email">Email <span className="optional-tag">(optional)</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? "error" : ""}`} 
                        placeholder="you@example.com" 
                      />
                      {errors.email && <span className="error-msg" style={{ display: "block" }}>{errors.email}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="course">Interested In <span className="required">*</span></label>
                      <select 
                        id="course" 
                        name="course" 
                        value={formData.course}
                        onChange={handleChange}
                        className={`form-control ${errors.course ? "error" : ""}`} 
                        required
                      >
                        <option value="" disabled>Select a course</option>
                        <option value="BDS">BDS — Bachelor of Dental Surgery</option>
                        <option value="MDS">MDS — Master of Dental Surgery</option>
                        <option value="MBBS">MBBS — Bachelor of Medicine &amp; Surgery</option>
                      </select>
                      {errors.course && <span className="error-msg" style={{ display: "block" }}>{errors.course}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="neetScore">NEET Score <span className="optional-tag">(if applicable)</span></label>
                      <input 
                        type="number" 
                        id="neetScore" 
                        name="neetScore" 
                        value={formData.neetScore}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="e.g. 450" 
                        min="0" 
                        max="720" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="neetQualified">NEET Qualified?</label>
                      <select 
                        id="neetQualified" 
                        name="neetQualified" 
                        value={formData.neetQualified}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="" disabled>Select</option>
                        <option value="Yes">Yes, Qualified</option>
                        <option value="No">No / Not Applicable</option>
                        <option value="Appearing">Appearing this year</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="category">Category</label>
                      <select 
                        id="category" 
                        name="category" 
                        value={formData.category}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="" disabled>Select category</option>
                        <option value="General">General (UR)</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="EWS">General EWS</option>
                        <option value="PH">Physically Handicapped</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="state">Your State <span className="required">*</span></label>
                      <select 
                        id="state" 
                        name="state" 
                        value={formData.state}
                        onChange={handleChange}
                        className={`form-control ${errors.state ? "error" : ""}`} 
                        required
                      >
                        <option value="" disabled>Select state</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Delhi">Delhi / NCR</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.state && <span className="error-msg" style={{ display: "block" }}>{errors.state}</span>}
                    </div>

                    <div className="form-group full-width">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="form-submit-btn" 
                        disabled={loading}
                      >
                        <span>{loading ? "Submitting Inquiry..." : "Book My Free Counselling Session →"}</span>
                      </motion.button>
                      <p className="form-note">🔒 Your information is 100% secure and directly sent to our expert counsellors.</p>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="form-success" 
                style={{ display: "block" }}
              >
                <div className="success-icon">🎉</div>
                <div className="success-title">You&apos;re All Set!</div>
                <p className="success-sub">
                  Our expert counsellor will call you within <strong>24 hours</strong>.<br /><br />
                  For urgent help right now, WhatsApp us at <strong>9522850000</strong>.
                </p>
                <a href="https://wa.me/919522850000" target="_blank" className="btn-gold" style={{ marginTop: "20px", display: "inline-flex" }}>
                  💬 WhatsApp Now
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
