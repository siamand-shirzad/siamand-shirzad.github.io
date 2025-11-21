import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-br from-blue-400 via-indigo-500 to-purple-600 origin-left z-9999"
      style={{ scaleX: scrollYProgress }}
    />
    </>
  );
};

export default ProgressBar;