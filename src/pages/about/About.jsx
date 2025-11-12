import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaArrowCircleDown, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';
import LogoLoop from '@/components/LogoLoop';

const About = ({ innerRef }) => {
  const techLogos = [
    {
      node: <FaBootstrap className="text-white hover:text-purple-800 transition-colors" />,
      title: 'Bootstrap',
      href: 'https://getbootstrap.com'
    },
    {
      node: <FaHtml5 className="text-white hover:text-orange-700 transition-colors" />,
      title: 'HTML5',
      href: 'https://developer.mozilla.org/docs/Web/HTML'
    },
    {
      node: <FaCss3Alt className="text-white hover:text-blue-700 transition-colors" />,
      title: 'CSS3',
      href: 'https://developer.mozilla.org/docs/Web/CSS'
    },
    {
      node: <FaGitAlt className="text-white hover:text-red-700 transition-colors" />,
      title: 'Git',
      href: 'https://git-scm.com'
    },

    {
      node: <SiReact className="text-white hover:text-cyan-600 transition-colors" />,
      title: 'React',
      href: 'https://react.dev'
    },
    {
      node: <SiNextdotjs className="text-white hover:text-gray-700 transition-colors" />,
      title: 'Next.js',
      href: 'https://nextjs.org'
    },
    {
      node: <SiTypescript className="text-white hover:text-blue-700 transition-colors" />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org'
    },
    {
      node: <SiTailwindcss className="text-white hover:text-sky-600 transition-colors" />,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com'
    },
    {
      node: <SiFramer className="text-white hover:text-pink-600 transition-colors" />,
      title: 'Framer Motion',
      href: 'https://www.framer.com/motion/'
    }
  ];
  return (
    <>
      <section ref={innerRef} id="about" className=" flex flex-col justify-center items-center text-center p-6 ">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-2xl mb-12">
          <h2 className="text-3xl inline-block md:text-5xl font-bold text-white mb-6">
            About Me
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

        {/* <motion.div
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
        </motion.div> */}
      </section>

      <div className="mx-auto  " style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
        {/* ✅ LogoLoop با آرایه‌ی پایدار */}
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0d0d0d"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
};

export default About;
