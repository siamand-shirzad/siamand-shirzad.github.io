import React from 'react';
import SpotlightCard from '@/components/vendor/SpotlightCard';
import { motion } from 'framer-motion';
import { FaFigma, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode, FaReact } from "react-icons/fa6";
import { SiAxios } from "react-icons/si";

// آرایه مهارت‌ها (بدون تغییر)
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

// --- تعریف انیمیشن‌ها ---
// انیمیشن کانتینر گرید (برای ایجاد تأخیر بین کارت‌ها)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // هر کارت 0.15 ثانیه بعد از قبلی ظاهر می‌شود
    }
  }
};

// انیمیشن هر کارت (ظهور از پایین با فید)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


const Services = ({ innerRef }) => {
  return (
    // تغییر پدینگ به py-24 برای هماهنگی با سکشن‌های دیگر
    <section className="p-6 py-24 max-w-6xl mx-auto text-center" id="services" ref={innerRef}>
      
      {/* --- تیتر و خط زیرین (مشابه بخش About) --- */}
      <h2 className="text-3xl inline-block md:text-5xl font-bold text-white mb-12 relative">
        Services
        {/* Animated Underline */}
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            // Fixed: bg-gradient-to-r and origin-center
            className="h-1.5 mt-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full origin-center absolute left-0 -bottom-4"
          />
      </h2>

      {/* --- گرید کارت‌ها با انیمیشن --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4  }} // وقتی ۲۰ درصد گرید دیده شد، انیمیشن شروع شود
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
      >
        {skills.map((skill, index) => (
          // هر کارت را داخل motion.div می‌گذاریم
          <motion.div key={index} variants={cardVariants}>
            <SpotlightCard className="p-8 backdrop-blur-sm border border-white/10 rounded-2xl h-full flex flex-col items-center text-center group hover:border-indigo-500/50 transition-colors" spotlightColor='rgba(99, 102, 241, 0.2)'>
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl text-white font-semibold mb-3">{skill.title}</h3>
              {/* Fixed text color */}
              <p className="text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;