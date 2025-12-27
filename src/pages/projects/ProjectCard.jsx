'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // یا 'framer-motion'
import { ArrowUpRight, ArrowUpRightIcon, Github } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/ProgressiveBlur';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative md:aspect-4/3 aspect-3/4 overflow-hidden rounded-2xl bg-zinc-950 border border-white/5 shadow-xl cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout>
      {/* ۱. تصویر پس‌زمینه */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute rounded inset-0 h-full w-full object-cover"
        animate={{ scale: isHovered ? 1.02 : 0.9 }}
        transition={{ duration: 0.3 }}
      />

      {/* ۲. لایه بلور */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={false}
        animate={{ height: isHovered ? '70%' : '25%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <ProgressiveBlur blurIntensity={6} className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-black/20" />

      {/* ۳. کانتینر محتوا */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 ">
        <div className="flex items-center  justify-between shrink-0 mb-2 ">
          <div className="flex-col flex">
            <motion.h3
              layout
              className="text-3xl font-bold text-white shrink-0 origin-left  drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              {project.title}
            </motion.h3>
            <motion.p layout className="text-[11px]  font-semibold text-blue-300 uppercase tracking-widest">
              {project.highlight || 'Web Application'}
            </motion.p>
          </div>
          {/* view buttn */}
          <AnimatePresence>
            {!isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1 pr-2">
                <span className="text-[12px] text-white/50 uppercase tracking-widest hidden sm:block">View</span>
                <div className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-sm">
                  <ArrowUpRightIcon size={16} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden">
              <div className="flex flex-col  pb-2">
                <p className="text-zinc-300  text-[13px] line-clamp-2 font-light mb-3">{project.description}</p>
                {/* لیست تکنولوژی‌ها با دیزاین مدرن (Pill Style) */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px]   first-letter:uppercase tracking-wider text-blue-200 bg-blue-900/30 border border-blue-500/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* دکمه‌های اکشن */}
                <div className="flex items-center gap-3 pt-2">
                  {/* دکمه اصلی: Live Demo */}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    whileHover={{ scale: 1, backgroundColor: '#ffffff' }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 group/btn flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 py-3 rounded-xl font-bold text-sm shadow-lg shadow-white/5 transition-colors">
                    <span>Live Project</span>
                    {/* آیکون فلش که موقع هاور کج میشه */}
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </motion.a>

                  {/* دکمه ثانویه: Github */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center p-3 rounded-xl bg-white/5 text-white border border-white/10 backdrop-blur-md transition-colors hover:border-white/30">
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
