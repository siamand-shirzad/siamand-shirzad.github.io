import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import Glass from '../ui/Glass';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerWidth > 768) {
  //       setIsScrolled(window.scrollY > 50);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <Glass className='w-[85%] md:w-[70%]  mx-auto mt-6 px-6 border border-gray-700/50 text-white' >

      <motion.div
        animate={{ height: isOpen ? '25rem' : '4rem' }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className={`max-w-7xl mx-auto  
        `}>
        <div className="flex items-center justify-between gap-5 h-16">
          <div className="nav-left">
            <Link to="/#hero" className=" text-3xl text-glow-white ">
              Siamand
            </Link>
          </div>

          <nav className="nav-center hidden md:flex  gap-8">
            <Link to="/#hero" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/#about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/#services" className="nav-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>

            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </nav>

          <div className="nav-right hidden md:flex ">
            <NavLink to={'/contact'} className="btn-cta text-white tracking-tight">
              Contact Me
            </NavLink>
          </div>
          {/* hamburger menu */}
          <div className="md:hidden ">
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" onChange={e => setIsOpen(e.target.checked)} checked={isOpen} />
              <span />
              <span />
              <span />
            </label>
          </div>
        </div>
        {/* منو موبایل با انیمیشن */}
        {isOpen && (
          <nav className="flex flex-col gap-4 mt-4 items-center md:hidden">
            <Link to="/#hero" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/#about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/#services" className="nav-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <NavLink to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              Blog
            </NavLink>
            <NavLink to={'/contact'} className="btn-cta mt-2 text-glow-white" onClick={() => setIsOpen(false)}>
              Contact Me
            </NavLink>
          </nav>
        )}
      </motion.div>
      </Glass>
    </header>
  );
};

export default Navbar;
