import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Card from './components/Card';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <About />
    <Work />
    </div>
  );
}

export default App;
