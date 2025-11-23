import { motion } from 'framer-motion';
import "./Glass.css"; 

const GlassMorphism = () => {
  return (
    <motion.div
      className="glass-card w-64 h-12 "
      whileHover={{
        y: -5,
        scaleX: 1.03,
        scaleY: 0.97
      }}
      whileTap={{
        y: 2,
        scaleX: 0.97,
        scaleY: 1.03
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10 // کمتر = نوسان بیشتر → حس Jelly iOS
      }}>
      <div className="glass1"></div>
      <div className="glass2"></div>
      <div className="highlight"></div>
      <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> Button</p>
    </motion.div>
  );
};

export default GlassMorphism;
