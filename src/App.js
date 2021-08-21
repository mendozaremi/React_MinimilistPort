import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Skills
 from './components/skills';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Work />
    <About />
    <Skills />
    <Footer />
    </div>
  );
}

export default App;
