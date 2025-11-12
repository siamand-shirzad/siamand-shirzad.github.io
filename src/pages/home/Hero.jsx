import FadeContent from '@/components/FadeContent';
import SplitText from '@/components/SplitText';
import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaArrowCircleDown } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const Hero = ({ innerRef }) => {
  return (
    <>
      <section
        ref={innerRef}
        id="hero"
        className=" flex flex-col gap-6 min-h-[80vh] justify-center items-center text-center md:mb-16 ">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
          <h1 className="text-2xl md:text-4xl  text-white ">
            Hi, I'm
            <span className="text-4xl font-semibold md:text-6xl bg-linear-to-r from-indigo-600 via-cyan-500  to-indigo-800 bg-clip-text text-transparent gradientMove tracking-tight">
              Siamand
            </span>
          </h1>
        </FadeContent>

        <SplitText
          text="React developer"
          className="text-6xl md:text-8xl text-glow-white -tracking-wider"
          delay={40}
          duration={2}
          ease="elastic.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h2"
        />
        <SplitText
          text="A Front-End Developer specializing in React, creating modern and elegant web experiences"
          className="text-lg md:text-2xl text-white/90 max-w-2xl mb-2"
          delay={20}
          duration={1}
          ease="elastic.out"
          splitType="chars"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
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
