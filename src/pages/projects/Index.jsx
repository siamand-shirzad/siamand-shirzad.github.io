'use client';

import React from 'react';
import { projectData } from '@/data/projectData';
import ProjectCard from './ProjectCard';
import MobileProjectCard from './MobileProjectCard';
import { motion } from 'framer-motion';

// --- تنظیمات جدید انیمیشن کانتینر (Container) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // کمی تاخیر قبل از شروع اولین کارت تا هدر کامل لود شود
      delayChildren: 0.3,
      // فاصله زمانی بین ورود هر کارت (Stagger)
      // 0.2 ثانیه حس پریمیوم‌تری نسبت به 0.15 دارد
      staggerChildren: 0.2,
    },
  },
};

// --- تنظیمات جدید انیمیشن آیتم‌ها (Card Items) ---
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,          // شروع از ارتفاع پایین‌تر (حرکت طولانی‌تر)
    scale: 0.9,     // شروع با سایز کمی کوچک‌تر
    filter: "blur(10px)", // شروع با تاری زیاد (افکت سینمایی)
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)", // حذف تاری
    transition: { 
      type: "spring",
      bounce: 0.35, // میزان پرش فنر (بین 0 تا 1). 0.35 نرم و شیک است.
      duration: 0.8 // مدت زمان کلی اجرای فنر
    }
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
          className="absolute top-10 text-[18vw] font-black select-none tracking-tighter"
          style={{ fontFamily: 'sans-serif' }}
        >
          <span className="bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-transparent">
            PROJECTS
          </span>
        </div>
      </div>

      {/* --- محتوای اصلی --- */}
      {/* z-10 باعث می‌شود محتوا روی متن و پارتیکل‌ها بیفتد */}
      <div className="relative z-10 container mx-auto px-4 py-5 ">
        
        {/* هدر صفحه - انیمیشن جداگانه خودش را دارد */}
        <motion.div 
          initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-10 text-center md:text-left"
        >
          <h2 className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase mb-2">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Featured <span className="text-zinc-500">Works.</span>
          </h1>
        </motion.div>

        {/* گرید پروژه‌ها با انیمیشن جدید */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          // از whileInView استفاده می‌کنیم تا وقتی کاربر اسکرول کرد به این بخش برسد، انیمیشن اجرا شود
          // اگر می‌خواهید فقط یک بار در لود اولیه اجرا شود، این را به `animate="visible"` تغییر دهید
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // کمی قبل از رسیدن کامل به ویوپورت شروع شود
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16"
        >
          {projectData.map((project) => (
            // نکته مهم: اینجا باید motion.div باشد تا variant ها را دریافت کند
            <motion.div key={project.id} variants={itemVariants}>
              
              {/* Desktop View */}
              <div className="hidden md:block h-full h-full">
                {/* h-full مهم است تا کارت‌ها هم‌ارتفاع شوند */}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
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