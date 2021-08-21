import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Work />
    <About />
    <Footer />
    </div>
  );
}

export default App;
