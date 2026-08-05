"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#services" },
    { name: "About Us", href: "#why" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`} 
      id="navbar"
    >
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Image src="/logo.svg" alt="Positive Admission Guidance" width={220} height={54} className="logo-img" style={{ width: "auto" }} priority />
          </a>

          <ul className="nav-links" id="navLinks">
            {navLinks.map((link, idx) => (
              <motion.li key={link.name} whileHover={{ y: -2 }}>
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>

          <div className="nav-ctas">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="nav-book-btn"
            >
              Book Free Counselling
            </motion.a>
            <button 
              className="hamburger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <span style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(11,31,58,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "white", fontSize: "1rem", fontWeight: 600, padding: "8px 0" }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
