import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import ScrollToTop from '../components/ui/ScrollToTop';

const Content = () => {
  return (
    <div className=' mt-28 md:w-[80%] w-[90%] mx-auto  '>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Content;
