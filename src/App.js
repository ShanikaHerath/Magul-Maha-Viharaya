import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Donations from './components/pages/Donations/Donations';
import Events from './components/pages/Events/Events';
import Gallery from './components/pages/Gallery/Gallery'; // fixed typo: 'Galley' to 'Gallery'
import Home from './components/pages/Home/Home';
import Team from './components/pages/Team/Team';
import ScrollToTop from './components/ScrollToTop'; // <-- import here

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop /> {/* <-- add ScrollToTop here */}
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
