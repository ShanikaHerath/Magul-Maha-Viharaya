import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Donations from './components/pages/Donations/Donations';
import Events from './components/pages/Events/Events';
import Gallery from './components/pages/Gallery/Gallery'; // fixed typo: 'Galley' to 'Gallery'
import Team from './components/pages/Team/Team';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/Magul-Maha-Viharaya"> {/* THIS FIXES HOMEPAGE LOADING ON GITHUB PAGES */}
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
