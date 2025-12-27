import React from 'react';
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLinks from "./SocialLinks";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (hash) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-20 pt-1 border-t border-white/5 bg-gradient-to-b from-gray-900/0 via-gray-900/40 to-black/80 backdrop-blur-xs">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Siamand<span className="text-cyan-400">.</span>dev
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Building modern web experiences with React & Tailwind.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <li>
                {/* تغییر رنگ هاور به سفید */}
                <button onClick={() => handleScrollLink('hero')} className="hover:text-white transition-colors duration-300">Home</button>
            </li>
            <li>
                <button onClick={() => handleScrollLink('about')} className="hover:text-white transition-colors duration-300">About</button>
            </li>
            <li>
                <Link to="/projects" className="hover:text-white transition-colors duration-300">Projects</Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
            </li>
          </ul>

          {/* Socials */}
          <div>
             {/* رنگ هاور آیکون‌ها هم سفید شد */}
             <SocialLinks className="text-xl text-gray-400 hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© {new Date().getFullYear()} Siamand Shirzad. All rights reserved.</p>
          <p className="flex gap-4">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;