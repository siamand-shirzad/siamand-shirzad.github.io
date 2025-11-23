import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import SectionsContextProvider from './context/SectionsContext';
import Content from './pages/Routes';
import ParticlesBackground from './components/vendor/ParticlesBackground';
import { ToastContainer } from 'react-toastify';
import ProgressBar from './components/ui/ProgressBar';

const App = () => {
  

  return (
    <div className="w-full flex flex-col min-h-screen relative  ">
      <ProgressBar/>
      <SectionsContextProvider>
        <ParticlesBackground />
        <Navbar />
        <Content />
        <Footer />
        <ToastContainer
        className={'p-6'}
          position="top-right"
          draggable
          theme='dark'
          toastClassName="!bg-black/10 !backdrop-blur-md !border !border-white/10 !text-gray-100  max-md:!rounded-md  "
          bodyClassName="!text-sm !text-gray-900 "
          // progressClassName="!bg-gray-500"
        />
      </SectionsContextProvider>
    </div>
  );
};

export default App;
