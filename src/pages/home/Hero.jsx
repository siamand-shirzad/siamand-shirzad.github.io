import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaArrowCircleDown } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const Hero = ({innerRef}) => {
  return (
    <>
      <section
        ref={innerRef}
        id="hero"
        className=" flex flex-col gap-6 min-h-[80vh] justify-center items-center text-center ">
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
    </>
  );
};

export default Hero;
