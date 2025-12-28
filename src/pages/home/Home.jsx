import { useContext, useEffect } from 'react';
import { SectionsContext } from '../../context/SectionsContext';
import Hero from './Hero';
import About from './About';
import { useLocation } from 'react-router-dom';
import Services from './Services';

const Home = () => {
  const refs = useContext(SectionsContext);
  
  const {hero,about,services} = refs
  const location = useLocation();

 useEffect(() => {
  
    if (location.hash) {
      const id = location.hash.slice(1); 

      const targetRef = refs[id];

      targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);


  return (
    <>
    <Hero innerRef={hero}/>
    <About innerRef={about}/>
    <Services innerRef={services}/>
    </>
  );
};

export default Home;
