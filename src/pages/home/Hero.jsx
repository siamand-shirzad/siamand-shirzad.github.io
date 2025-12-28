import React from 'react';
import FadeContent from '@/components/vendor/FadeContent';
import SplitText from '@/components/vendor/SplitText';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Hero = ({ innerRef }) => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/siamand-shirzad", label: 'Github' },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siamand-shirzad-55986a2a4", label: 'LinkedIn' },
    { icon: <FaTelegram />, link: "https://t.me/Siamandshirzad", label: 'Telegram' },
    { icon: <FaEnvelope />, link: "mailto:siamand1381@gmail.com", label: 'Email' }
  ];

  return (
    <section
      ref={innerRef}
      id="hero"
      className="flex flex-col gap-8 scroll-mt-28 justify-center items-center text-center px-4 md:mb-16"
    >
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <h1 className="text-2xl md:text-4xl text-white font-light">
          Hi, I'm{' '}
          <span className="text-4xl font-semibold md:text-6xl bg-linear-to-r from-indigo-600 via-cyan-500 to-indigo-700 bg-clip-text text-transparent tracking-tighter gradientMove">
            Siamand
          </span>
        </h1>
      </FadeContent>

      <SplitText
        text="React Developer"
        className="text-5xl md:text-8xl font-medium text-glow-white tracking-tighter drop-shadow-2xl"
        delay={50}
        duration={1.5}
        ease="elastic.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        textAlign="center"
        tag="h2"
      />

      <FadeContent blur={true} duration={1000} easing="ease-out" delay={500} initialOpacity={0}>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Front-End Developer specializing in React & Tailwind. I focus on clean code, performance, and pixel-perfect design.
        </p>
      </FadeContent>

      {/* --- CTA Buttons --- */}
      <div className="flex flex-col sm:flex-row gap-5 mt-6 w-full justify-center px-4 items-center">
        
        <Link 
          to="/projects" 
          className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-indigo-600 to-cyan-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2">
             View Projects <CgWebsite className="text-2xl group-hover:rotate-12 transition-transform" />
          </span>
          <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
        </Link>

        <a
          href="/Siamand_resume_EN.pdf"
          target="_blank"
          download
          className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm font-medium text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Download CV
          <HiDocumentDownload className="text-xl group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* --- Social Links --- */}
      <div className="flex gap-6 mt-8 items-center justify-center relative z-20">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-white/60 text-2xl  hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;