'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const MobileProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
      className="relative flex flex-col mb-10 overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 shadow-2xl"
    >
      {/* 1. بخش تصویر */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* گرادینت تیره روی عکس */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

        {/* --- Badge (همون حالتی که دوست داشتید) --- */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-wider">
              {project.highlight || 'Featured'}
            </span>
          </div>
        </div>

        {/* محتوای روی عکس */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-4">
          <h3 className="text-3xl font-black text-white leading-tight drop-shadow-md">
            {project.title}
          </h3>

          {/* --- اصلاح استایل تگ‌های تکنولوژی --- */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-[10px] font-semibold text-blue-200 bg-blue-950/40 border border-blue-500/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)] backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {/* اگر تعداد زیاد بود */}
            {project.tech.length > 4 && (
               <span className="px-2 py-1.5 text-[10px] font-medium text-zinc-400 rounded-full bg-white/5 border border-white/5">
                 +{project.tech.length - 4}
               </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. بخش توضیحات و دکمه‌ها */}
      <div className="flex flex-col gap-5 p-5 pt-2 bg-zinc-950">
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={project.demo}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3.5 bg-white text-zinc-950 rounded-xl font-bold text-sm shadow-lg shadow-white/5 active:scale-95 transition-transform"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={16} />
          </a>
          
          <a
            href={project.github}
            target="_blank"
            className="flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white border border-zinc-800 rounded-xl font-medium text-sm hover:bg-zinc-800 active:scale-95 transition-transform"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProjectCard;