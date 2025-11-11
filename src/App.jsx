import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import SectionsContextProvider from './context/SectionsContext';
import Content from './pages/Content';

const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen   ">
      <ParticlesBackground />
      <SectionsContextProvider>
        <Navbar />
        <Content />
        <Footer />
      </SectionsContextProvider>
    </div>
  );
};

export default App;
