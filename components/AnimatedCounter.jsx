"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * AnimatedCounter - counts up to a target value using ease-out cubic
 * Uses IntersectionObserver to trigger only when the element enters the viewport
 * @param {number} target - The final number to count to
 * @param {string} suffix - A suffix to append (e.g. "+", "%", " Yrs")
 * @param {number} duration - Animation duration in milliseconds (default 2000)
 */
export default function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const animateCounter = useCallback(() => {
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: decelerates toward the end for a natural feel
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      setDisplayValue(value.toLocaleString("en-IN") + suffix);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [target, suffix, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animateCounter]);

  return <span ref={elementRef}>{displayValue}</span>;
}
