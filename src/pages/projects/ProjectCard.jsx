import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      {/* تصویر پروژه */}
      <div className="relative h-48 overflow-hidden rounded-t-xl transition-transform transform">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform duration-500 hover:scale-110"
        />
        {/* Overlay برای دکمه */}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/20"
          >
            View Project
          </a>
        </div>
      </div>

      {/* متن و تگ‌ها */}
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-1 line-clamp-2 ">{project.description}</p>

        {/* تکنولوژی‌ها */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-white/10 text-white text-xs px-2 py-1 rounded border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-500 font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
