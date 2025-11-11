import { useContext, useEffect } from 'react';
import { SectionsContext } from '../../context/SectionsContext';
import Hero from './Hero';
import About from '../about/About';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hero, about, projects } = useContext(SectionsContext);
  const location = useLocation();

 useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1); // "hero" یا "about" یا "projects"

      const refsMap = { hero, about, projects };
      const targetRef = refsMap[id];

      targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location, hero, about, projects]);


  return (
    <>
    <Hero innerRef={hero}/>
    <About innerRef={about}/>
    </>
  );
};

export default Home;
