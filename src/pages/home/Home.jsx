import { useContext, useEffect } from 'react';
import { SectionsContext } from '../../context/SectionsContext';
import Hero from './Hero';
import About from '../about/About';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const refs = useContext(SectionsContext);
  
  const {hero,about,projects} = refs
  const location = useLocation();

 useEffect(() => {
  
    if (location.hash) {
      const id = location.hash.slice(1); // "hero" یا "about" یا "projects"

      const targetRef = refs[id];

      targetRef?.current?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [location]);


  return (
    <>
    <Hero innerRef={hero}/>
    <About innerRef={about}/>
    </>
  );
};

export default Home;
