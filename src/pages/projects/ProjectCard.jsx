'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // یا 'motion/react'
import { ArrowUpRight, Github } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/ProgressiveBlur';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative md:aspect-[4/3] aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 shadow-xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
    >
      {/* ۱. تصویر پس‌زمینه */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute rounded inset-0  h-full w-full object-cover  "
        animate={{ scale: isHovered ? 1.05 : 0.95 }}
        transition={{ duration: 0.3 }}
      />

      {/* ۲. لایه بلور و گرادینت */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        initial={false}
        animate={{ height: isHovered ? '80%' : '25%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ProgressiveBlur blurIntensity={ 6} className="h-full w-full" />
      </motion.div>

      {/* ۳. کانتینر محتوا */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="flex flex-col gap-3 shrink-0 mb-2">
          
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
                {/* --- Badge جدید (شبیه موبایل) --- */}
                {/* عنوان */}
                <motion.h3
                className="text-3xl font-bold  text-white  drop-shadow-[0_2px_2px_rgba(0,0,0,5.5)]"
                >
                {project.title}
                </motion.h3>
                <motion.div 
                  layout 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md w-fit shadow-lg"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-wider">
                    {project.highlight || 'Featured'}
                    </span>
                </motion.div>

            </div>

            {/* --- Arrow Icon اصلاح شده --- */}
            {/* همیشه نمایش داده می‌شود و فقط می‌چرخد */}
            <motion.div
                className="text-white mb-1"
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
            >
                <ArrowUpRight size={28} strokeWidth={2} />
            </motion.div>
          </div>

        </div>

        {/* محتوای مخفی (توضیحات و دکمه‌ها) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="flex flex-col pb-1 pt-2">
                <p className="text-zinc-300 text-[13px] line-clamp-3 font-light mb-4 leading-relaxed">
                    {project.description}
                </p>
                
                {/* تگ‌های تکنولوژی (Pill Style) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-semibold text-blue-200 bg-blue-900/30 border border-blue-500/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* دکمه‌های اکشن */}
                <div className="flex items-center gap-3 pt-2">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 group/btn flex items-center justify-center gap-2 bg-white text-zinc-950 py-3 rounded-xl font-bold text-sm shadow-lg transition-colors hover:bg-zinc-200"
                  >
                    <span>Live Project</span>
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center p-3 rounded-xl bg-black/40 text-white border border-white/10 backdrop-blur-md transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;