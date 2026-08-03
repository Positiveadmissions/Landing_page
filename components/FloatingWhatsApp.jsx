"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * FloatingWhatsApp - Fixed bottom-right WhatsApp CTA button
 * Renders independently from Footer so it can be toggled separately
 */
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919522850000?text=Hello!%20I%20need%20help%20with%20BDS%2FMDS%2FMBBS%20admission."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      💬
    </motion.a>
  );
}
