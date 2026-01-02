import { Github, ArrowUpRight } from 'lucide-react';

const MobileProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-sm">
      <div className="relative w-full aspect-4/3">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Compact Badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[9px] font-bold text-zinc-200 uppercase tracking-wider">
            {project.highlight || 'Featured'}
          </span>
        </div>
      </div>

      {/* --- 2. Compact Content --- */}
      <div className="flex flex-col p-4 gap-3">
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[9px] font-medium text-zinc-400 bg-zinc-800 rounded border border-zinc-700">
                {tech}
              </span>
            ))}
            {/* for more tags*/}
            {project.tech.length > 3 && <span className="px-1.5 py-0.5 text-[9px] text-zinc-500">+More</span>}
          </div>
        </div>

        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>

        {/* --- 3. Buttons --- */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-zinc-100 text-zinc-950 rounded-lg font-semibold text-xs hover:bg-zinc-200 transition-colors">
            <span>Demo</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 bg-zinc-800 text-white rounded-lg font-medium text-xs hover:bg-zinc-700 transition-colors">
            <Github size={14} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectCard;
