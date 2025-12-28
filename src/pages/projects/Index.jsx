'use client';

import React from 'react';
import { projectData } from '@/data/projectData';
import ProjectCard from './ProjectCard';
import MobileProjectCard from './MobileProjectCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  },
};

const Index = () => {
  return (
      <>
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        
        {/* ۱. تک Glow بالا سمت چپ (ملایم) */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />

        {/* ۲. متن بزرگ با گرادینت محو شونده */}
        <div 
          className="absolute top-15 text-[18vw] font-black select-none tracking-tighter"
          style={{ fontFamily: 'sans-serif' }}
        >
          <span className="bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-transparent">
            PROJECTS
          </span>
        </div>
      </div>

      {/* --- محتوای اصلی --- */}
      {/* z-10 باعث می‌شود محتوا روی متن و پارتیکل‌ها بیفتد */}
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-10">
        
        {/* هدر صفحه */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center md:text-left"
        >
          <h2 className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase mb-2">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Featured <span className="text-zinc-500">Works.</span>
          </h1>
        </motion.div>

        {/* گرید پروژه‌ها */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16"
        >
          {projectData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              
              {/* Desktop View */}
              <div className="hidden md:block h-full">
                <ProjectCard project={project} />
              </div>

              {/* Mobile View */}
              <div className="block md:hidden">
                <MobileProjectCard project={project} />
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* فوتر کوچک */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm">
            More projects available on my <a href="https://github.com/siamand-shirzad" className="text-zinc-300 underline underline-offset-4 decoration-zinc-700 hover:text-blue-400 transition-colors">GitHub</a>
          </p>
        </motion.div>

      </div>
      </>
  );
};

export default Index;