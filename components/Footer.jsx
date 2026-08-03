"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: "16px" }}>
              <Image src="/logo.svg" alt="Positive Admission Guidance" width={220} height={54} className="logo-img" style={{ width: "auto" }} />
            </div>
            <p className="footer-desc">
              India&apos;s trusted admission consultancy specialising in BDS, MDS and MBBS admissions since 2009. Expert guidance, transparent process, real results.
            </p>
            <div className="footer-socials">
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                href="https://www.instagram.com/positive_admission_guidance?igsh=NXAzcGxqd2g0M2s5" 
                target="_blank" 
                className="social-btn social-insta" 
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                href="https://wa.me/919522850000" 
                target="_blank" 
                className="social-btn social-whatsapp" 
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                href="https://t.me/positiveneetmdsguidance" 
                target="_blank" 
                className="social-btn social-telegram" 
                aria-label="Telegram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </motion.a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#contact">Book Counselling</a>
              <a href="#services">Courses</a>
              <a href="#why">About Us</a>
              <a href="#faq">FAQs</a>
            </div>
            <h4 style={{ marginTop: "24px" }}>Courses</h4>
            <div className="footer-links">
              <a href="#contact">BDS Admission</a>
              <a href="#contact">MDS Admission</a>
              <a href="#contact">MBBS Admission</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Our Offices</h4>
            <div className="footer-offices">
              <div className="office-item">
                <h5>📍 Bilaspur</h5>
                <p>Chaturvedi Dental Clinic &amp; Implant Center,<br />Near CCN Office, Warehouse Road,<br />Bilaspur (C.G.)</p>
              </div>
              <div className="office-item">
                <h5>📍 Jabalpur</h5>
                <p>Diamond Tower, Opp. Maharshi Kid&apos;s Home,<br />4th Bridge, Napier Town,<br />Jabalpur (M.P.)</p>
              </div>
            </div>
            <div className="footer-phones">
              <a href="tel:9522850000">📞 9522850000</a>
              <a href="tel:9340210222">📞 9340210222</a>
              <a href="tel:9179461024">📞 9179461024</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Positive Admission Guidance. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></span>
        </div>
      </div>

    
    </footer>
  );
}
