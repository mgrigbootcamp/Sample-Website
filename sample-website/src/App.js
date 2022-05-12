import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/home';
import Contact from './components/Contact';
import Store from './components/Store';




function App() {
  return (    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        
         <Route path="/contact" element={<Contact />} />
         <Route path="/store" element={<Store />} />
         <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
