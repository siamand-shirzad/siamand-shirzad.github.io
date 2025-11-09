// src/components/LogoLoop.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LogoLoop = ({ logos = [], speed = 20, ariaLabel = "Logos marquee", className = "" }) => {
  // logos: [{ src, alt, href? }, ...]
  const controls = useAnimation();

  useEffect(() => {
    // start continuous animation
    controls.start({
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" } },
    });
    return () => controls.stop();
  }, [controls, speed]);

  const handlePointerEnter = () => controls.stop();
  const handlePointerLeave = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" } },
    });
  };

  // duplicate logos so the loop is seamless
  const mirrored = [...logos, ...logos];

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      aria-label={ariaLabel}
    >
      <motion.div
        animate={controls}
        className="flex items-center gap-8"
        style={{ willChange: "transform" }}
        role="list"
      >
        {mirrored.map((logo, i) => (
          <a
            key={i}
            href={logo.href || "#"}
            target={logo.href ? "_blank" : undefined}
            rel={logo.href ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center w-28 h-16 opacity-90 hover:opacity-100 transition-opacity"
            role="listitem"
            aria-label={logo.alt}
          >
            <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;