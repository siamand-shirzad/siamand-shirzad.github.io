import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <motion.div
        animate={{ height: isOpen ? '25rem' : '4rem' }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className={`max-w-7xl mx-auto landing-nav-items transition-all duration-500 ease-in-out overflow-hidden 
          ${isScrolled ? 'scrolled' : 'initial'}
        `}>
        <div className="flex items-center justify-between gap-5 h-16">
          <div className="nav-left">
            <h1 className=" text-2xl text-glow-white">Siamand</h1>
          </div>

          <nav className="nav-center hidden md:flex  gap-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </nav>

          <div className="nav-right hidden md:flex ">
            <a href="#contact" className="btn-cta text-glow-white">
              Contact Me
            </a>
          </div>
          {/* hamburger menu */}
          <div className="md:hidden scale-75">
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" onClick={() => setIsOpen(!isOpen)} checked={isOpen} />
              <span />
              <span />
              <span />
            </label>
          </div>
        </div>
        {/* منو موبایل با انیمیشن */}
          {isOpen && (
            <nav
              className="flex flex-col gap-4 mt-4 items-center md:hidden">
              <NavLink to="/" className="nav-link"onClick={()=>setIsOpen(false)} >
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link"onClick={()=>setIsOpen(false)} >
                About
              </NavLink>
              <NavLink to="/services" className="nav-link"onClick={()=>setIsOpen(false)} >
                Services
              </NavLink>
              <NavLink to="/blog" className="nav-link"onClick={()=>setIsOpen(false)} >
                Blog
              </NavLink>
              <a href="#contact" className="btn-cta text-glow-white"onClick={()=>setIsOpen(false)} >
                Contact Me
              </a>
            </nav>
          )}
      </motion.div>
    </header>
  );
};

export default Navbar;
