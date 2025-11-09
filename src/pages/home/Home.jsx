import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaArrowCircleDown } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const Home = () => {
  return (
    <>
      {/* home */}
      <section className=" flex flex-col gap-6 min-h-[80vh] justify-center items-center text-center ">
        <h1 className="text-2xl md:text-4xl  text-white ">
          Hi, I'm{' '}
          <span className="text-4xl font-semibold md:text-6xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-800 bg-clip-text text-transparent gradientMove">
            Siamand
          </span>
        </h1>
        <h2 className="text-glow-white  text-6xl md:text-8xl">React developer</h2>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-2">
          A Front-End Developer specializing in React, creating modern and elegant web experiences.
        </p>
        <div className="flex gap-4">
          {/* <a
            href="#projects"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:opacity-90 transition-all">
            View Projects
          </a> */}
          <a
            href="#about"
            className="px-6 flex gap-3 items-center py-2 border border-white/70 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
            See What I Do
            <FaArrowCircleDown className="text-lg" />
          </a>
        </div>
      </section>
      {/* {'about'} */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6 ">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12">
          <h2 className="text-3xl inline-block md:text-5xl font-bold text-white mb-6">About Me
            
          <div className="relative py-2 h-1 w-full max-w-3xl mx-auto overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
              className="h-1.5 bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 rounded-full"
            />
          </div>
          </h2>

          <p className="text-lg md:text-xl text-white/80 md:text-justify">
            Front-end developer focused on designing and implementing beautiful, fast, and responsive user interfaces. I
            am passionate about user experience (UX) and strive to create smooth and delightful experiences for users.
            My core expertise lies in technologies such as React, and TailwindCSS. Continuously updating my technical
            knowledge and learning new tools has always been part of my growth journey.
            <br /> My goal is to build reliable, scalable products that perfectly align with user needs.{' '}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a
              href="https://github.com/siamand-shirzad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/60 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <FaGithub className="text-xl" />
              View GitHub
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/60 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <FaArrowCircleDown className="text-xl" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 text-white text-5xl">
          <FaReact className="hover:text-cyan-400 transition-colors" />
          <SiTailwindcss className="hover:text-sky-400 transition-colors" />
          <SiFramer className="hover:text-pink-400 transition-colors" />
          <FaCss3Alt className="hover:text-blue-400 transition-colors" />
          <FaHtml5 className="hover:text-orange-400 transition-colors" />
          <FaGithub className="hover:text-gray-400 transition-colors" />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
