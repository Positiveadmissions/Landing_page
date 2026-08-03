"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="top-bar"
    >
      <div className="container top-bar-inner">
        <div className="top-bar-links">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
          </svg>
          <a href="tel:9522850000" className="top-bar-link">9522850000</a>
          <span className="top-bar-sep">|</span>
          <a href="tel:9340210222" className="top-bar-link">9340210222</a>
          <span className="top-bar-sep">|</span>
          <a href="tel:9179461024" className="top-bar-link">9179461024</a>
        </div>
        <div className="top-bar-right">
          <span>📍 Bilaspur &amp; Jabalpur</span>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919522850000?text=Hello!%20I%20need%20help%20with%20BDS%2FMDS%2FMBBS%20admission." 
            target="_blank" 
            className="top-bar-whatsapp"
          >
            💬 WhatsApp Us
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
