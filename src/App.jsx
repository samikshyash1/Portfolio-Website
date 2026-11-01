import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      <Contact />
      <Footer />

      {/* Other components and content can go here */}
    </div>
  );
}

export default App;