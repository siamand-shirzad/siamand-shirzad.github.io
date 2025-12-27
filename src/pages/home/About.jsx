import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiReact } from 'react-icons/si';
import LogoLoop from '@/components/vendor/LogoLoop';

const About = ({ innerRef }) => {
  const techLogos = [
    {
      node: <FaBootstrap className="text-white hover:text-purple-800 transition-colors" />,
      title: 'Bootstrap',
      href: 'https://getbootstrap.com'
    },
    {
      node: <FaHtml5 className="text-white hover:text-orange-700 transition-colors" />,
      title: 'HTML5',
      href: 'https://developer.mozilla.org/docs/Web/HTML'
    },
    {
      node: <FaCss3Alt className="text-white hover:text-blue-700 transition-colors" />,
      title: 'CSS3',
      href: 'https://developer.mozilla.org/docs/Web/CSS'
    },
    {
      node: <FaGitAlt className="text-white hover:text-red-700 transition-colors" />,
      title: 'Git',
      href: 'https://git-scm.com'
    },

    {
      node: <SiReact className="text-white hover:text-cyan-600 transition-colors" />,
      title: 'React',
      href: 'https://react.dev'
    },
    {
      node: <SiNextdotjs className="text-white hover:text-gray-700 transition-colors" />,
      title: 'Next.js',
      href: 'https://nextjs.org'
    },
    {
      node: <SiTypescript className="text-white hover:text-blue-700 transition-colors" />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org'
    },
    {
      node: <SiTailwindcss className="text-white hover:text-sky-600 transition-colors" />,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com'
    },
    {
      node: <SiFramer className="text-white hover:text-pink-600 transition-colors" />,
      title: 'Framer Motion',
      href: 'https://www.framer.com/motion/'
    }
  ];

  return (
    <section
      ref={innerRef}
      id="about"
      className="flex flex-col justify-center items-center text-center py-20 px-6 relative overflow-hidden"
    >
      {/* پس‌زمینه محو برای جدا کردن سکشن (اختیاری) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* --- About Me Text Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true}}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 inline-flex flex-col items-center">
          About Me
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"
          />
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed md:leading-loose">
          I am a passionate Front-end Developer focused on designing beautiful, fast, and responsive user interfaces. 
          With a strong foundation in user experience (UX), I strive to create smooth and delightful digital journeys. 
          My core expertise lies in the <span className="text-cyan-400 font-semibold">React ecosystem</span> and modern CSS frameworks.
          <br className="hidden md:block" />
          I am continuously learning new tools to build reliable, scalable products that perfectly align with user needs.
        </p>
      </motion.div>

      {/* --- Tech Stack / Logo Loop Section --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex flex-col items-center gap-6"
      >
        <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4">
          Technologies I work with
        </h3>
        
        {/* کانتینر لوگو لوپ با ارتفاع و عرض مشخص */}
        <div className="w-full relative h-[100px] mask-[image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <LogoLoop
            logos={techLogos}
            speed={100} 
            direction="left"
            logoHeight={50}
            gap={50} 
            hoverSpeed={0} 
            scaleOnHover={1.1}
            fadeOut={false} // فید-آوت خود کامپوننت ممکن است با ماسک CSS بالا تداخل داشته باشد
            ariaLabel="Technology partners"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;