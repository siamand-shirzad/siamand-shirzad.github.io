import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br md:backdrop-blur-md from-gray-950/30 via-gray-800/20 to-gray-950/30 text-gray-300 pb-6 pt-12 mt-10 border-t border-gray-700/50 "
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-glow-white tracking-wide">Siamand.dev</h2>
          <p className="text-sm text-gray-400 mt-2">
            Front-End Developer specializing in React
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#Blog" className="hover:text-white transition-colors">Blog</a></li>
        </ul>

        {/* Social Icons */}
        <SocialLinks className={"text-2xl"} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Siamand</span>. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
