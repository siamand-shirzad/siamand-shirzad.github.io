import { useState, useEffect, useContext, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import Glass from '../ui/Glass';
import MobileNavbar from './MobileNavbar';
import { useModalStore } from '@/context/modalStore';
import { useShallow } from 'zustand/shallow';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const { isOpen, toggleModal, closeModal } = useModalStore();
  // const { isOpen, closeModal, toggleModal } = useModalStore(
  //   useShallow(state => ({
  //     isOpen: state.isOpen,
  //     closeModal: state.closeModal,
  //     toggleModal: state.toggleModal
  //   }))
  // );
  const isOpen = useModalStore(state => state.isOpen);
  const closeModal = useModalStore(state => state.closeModal);
  const toggleModal = useModalStore(state => state.toggleModal);

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
    <>
      <div onClick={closeModal} className="fixed inset-0 z-0  "></div>
      <header className="header fixed top-0 left-0 right-0 z-50">
        <Glass className="w-[85%] md:w-[70%]  mx-auto mt-6 px-6 border border-gray-700/50 text-white">
          <motion.div
            animate={{ height: isOpen ? '20rem' : '4rem' }}
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
                <Link to="/#hero" className="nav-link">
                  Home
                </Link>
                <Link to="/#about" className="nav-link">
                  About
                </Link>
                <Link to="/#services" className="nav-link">
                  Services
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>

              </nav>

              <div className="nav-right hidden md:flex ">
                <NavLink to={'/contact'} className="btn-cta text-white tracking-tight">
                  Contact Me
                </NavLink>
              </div>
              {/* hamburger menu icon */}
              <div className="md:hidden ">
                <label className="burger" htmlFor="burger">
                  <input type="checkbox" id="burger" onChange={toggleModal} checked={isOpen} />
                  <span />
                  <span />
                  <span />
                </label>
              </div>
            </div>
            <MobileNavbar />
          </motion.div>
        </Glass>
      </header>
      {/* <div className='sticky right-0 top-110 left-0 z-40'>

      </div> */}
    </>
  );
};

export default Navbar;
