import React from 'react';
import SpotlightCard from '@/components/vendor/SpotlightCard';
import { motion } from 'framer-motion';
import { FaFigma, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode, FaReact } from "react-icons/fa6";
import { SiAxios } from "react-icons/si";

const skills = [
  {
    icon: <FaReact size={42} className="text-cyan-400" />,
    title: 'Modern React Interfaces',
    desc: 'Dynamic, component-driven UIs built with the latest React patterns.'
  },
  {
    icon: <RiTailwindCssFill size={42} className="text-[#38BDF8]" />,
    title: 'Responsive Design',
    desc: 'Utility-first styling for clean, mobile-first layouts.'
  },
  {
    icon: <SiAxios size={42} className="text-[#5A29E4]" />,
    title: 'Seamless API Connectivity',
    desc: 'Efficient data fetching and integration with RESTful APIs.'
  },
  {
    icon: <FaFigma size={42} className="text-[#f21e1e]" />,
    title: 'Design to Code Precision',
    desc: 'Translating Figma designs into pixel-perfect, responsive UI.'
  },
  {
    icon: <FaCode size={42} className="text-gray-400" />,
    title: 'Interactive Motion & UX',
    desc: 'Smooth animations and engaging user interactions.'
  },
  {
    icon: <FaGitAlt size={42} className="text-[#F1502F]" />,
    title: 'Version Control Mastery',
    desc: 'Clean Git workflows for collaboration and scalability.'
  }
];

// --- تنظیمات انیمیشن جدید (Cinematic Reveal) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // سرعت ظاهر شدن کارت‌ها پشت سر هم
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 50,              // شروع از پایین‌تر (حرکت عمیق‌تر)
    opacity: 0, 
    scale: 0.9,         // شروع با سایز کمی کوچک‌تر (حس پاپ‌آپ)
    filter: "blur(10px)" // افکت تاری اولیه
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)", // شفاف شدن کامل
    transition: { 
      type: "spring",
      bounce: 0.3,      // پرش نرم فنری
      duration: 0.8
    }
  }
};

const Services = ({ innerRef }) => {
  return (
    <section className="p-6 py-24 max-w-6xl mx-auto text-center" id="services" ref={innerRef}>
      
      {/* --- تیتر و خط زیرین --- */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 inline-flex flex-col items-center">
          Service
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="h-1.5 mt-2 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"
          />
        </h2>

      {/* --- گرید کارت‌ها با انیمیشن جدید --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // با کمی فاصله از پایین صفحه شروع شود
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 backdrop-blur-[2px]"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            // اضافه کردن هاور افکت روی کل کارت برای تعامل بیشتر
            whileHover={{ y: -5 }} 
            className="h-full"
          >
            <SpotlightCard 
              className="p-8    border border-white/10 rounded-2xl h-full flex flex-col items-center text-center group hover:border-indigo-500/30 hover:bg-white/3 " 
              spotlightColor='rgba(99, 102, 241, 0.25)'
            >
              {/* آیکون کانتینر */}
              <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-xl text-white font-bold mb-3 tracking-tight">{skill.title}</h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {skill.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;