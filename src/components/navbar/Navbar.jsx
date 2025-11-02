import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div
        className={`max-w-7xl mx-auto landing-nav-items transition-all duration-300
          ${isScrolled ? 'scrolled' : 'initial'}
        `}>
        <div className="nav-left">
          <h1 className="text-white/90 font-bold text-lg text-glow-white">Siamand</h1>
        </div>

        <nav className="nav-center hidden md:flex items-center gap-8">
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

        <div className="nav-right hidden md:flex items-center">
          <a href="#contact" className="btn-cta">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
