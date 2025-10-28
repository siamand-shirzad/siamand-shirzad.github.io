import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
           ? "w-[85%] mx-auto mt-4 rounded-2xl bg-white/2 border border-white/10 backdrop-blur-[2px] shadow-lg"
          : "w-full bg-transparent border-b border-white/10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-14 ">
        
        {/* Logo / Name */}
        <h1 className="text-white/90 font-bold text-lg  text-glow-white">
          Siamand
        </h1>


        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-white/90">
          <a href="/" className="hover:text-white font-semibold  ">Home</a>
          <a href="/about" className="hover:text-white font-semibold  ">About</a>
          <a href="/services" className="hover:text-white font-semibold  ">Services</a>
          <a href="/contact" className="hover:text-white font-semibold  ">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;

