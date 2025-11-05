import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';

const Content = () => {
  return (
    <div className='h-[200vh] mt-28 md:w-[80%] w-[90%] mx-auto '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Content;
