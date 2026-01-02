import { projectData } from '@/data/projectData';
import ProjectCard from './ProjectCard';
import MobileProjectCard from './MobileProjectCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

// --- (Card Items) ---
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      bounce: 0.35,
      duration: 0.8,
      damping: 15,
      stiffness: 100
    }
  }
};

const Index = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />

        <div
          className="absolute top-25 text-[18vw] font-black select-none tracking-tighter"
          style={{ fontFamily: 'sans-serif' }}>
          <span className="bg-linear-to-b from-white/5 to-transparent bg-clip-text text-transparent">PROJECTS</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-5 ">
        <motion.div
          initial={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 md:mb-10 text-center md:text-left">
          <h2 className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Featured <span className="text-zinc-500">Works.</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8  ">
          {projectData.map(project => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="hidden md:block w-full h-full">
                <ProjectCard project={project} />
              </div>

              <div className="block md:hidden">
                <MobileProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            More projects available on my{' '}
            <a
              href="https://github.com/siamand-shirzad"
              className="text-zinc-300 underline underline-offset-4 decoration-zinc-700 hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
