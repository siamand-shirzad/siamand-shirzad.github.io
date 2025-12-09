import SpotlightCard from '@/components/vendor/SpotlightCard';
import { motion } from 'framer-motion';
import {  FaCss3Alt,  FaFigma, FaMagic, FaGitAlt, } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCode, FaReact,  } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { SiAxios } from "react-icons/si";


const skills = [
  {
    icon: <FaReact   size={42} className="text-cyan-400" />,
    title: 'Modern React Interfaces',
    desc: 'Dynamic, component-driven UIs built with the latest React patterns.'
  },
  {
    icon: <RiTailwindCssFill  size={42} className="text-[#38BDF8]" />,
    title: 'Responsive Design',
    desc: 'Utility-first styling for clean, mobile-first layouts.'
  },
  {
    icon: <SiAxios    size={42} className="text-[#5A29E4]" />,
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

const Services = ({ innerRef }) => {
  return (
    <section className="p-6 max-w-6xl mx-auto text-center pt-0" id="services" ref={innerRef}>
      <h2 className="text-3xl inline-block md:text-5xl font-bold text-white mb-6">
        Services
        <div className="relative py-2 h-1 w-full max-w-3xl mx-auto overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
            className="h-1.5 bg-linear-to-r from-indigo-800 via-indigo-500 to-indigo-800 rounded-full"
          />
        </div>
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {skills.map((skill, index) => (
          <SpotlightCard key={index} className="p-6 backdrop-blur-xs " spotlightColor='rgba(83, 23, 98, 0.25)'>
            <div className=" mb-2 flex justify-center">{skill.icon}</div>
            <h3 className="text-xl  text-gray-300 text font-semibold mb-2">{skill.title}</h3>
            <p className="text-sm opacity-80 text-primary leading-relaxed">{skill.desc}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
