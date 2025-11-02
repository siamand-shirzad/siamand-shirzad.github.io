import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';

const Content = () => {
  return (
    <div className='h-[200vh] mt-28'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Content;
