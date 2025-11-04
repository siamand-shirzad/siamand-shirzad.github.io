import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Content from "./pages/Content";

const App = () => {
  return (
    <div className='w-full flex flex-col min-h-screen   ' >
      <ParticlesBackground/>
      <Navbar/>
      <Content/>
      <Footer/>
      
    </div>
  );
};

export default App;