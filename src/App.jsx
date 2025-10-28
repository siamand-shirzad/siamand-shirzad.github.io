import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Content from "./pages/Content";

const App = () => {
  return (
    <div className='w-full flex flex-col min-h-screen   ' >
      <ParticlesBackground/>
      <Navbar/>
      <Content/>
      
    </div>
  );
};

export default App;