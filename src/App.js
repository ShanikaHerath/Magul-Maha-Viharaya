import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact/Contact';
import Donations from './components/pages/Donations/Donations';
import ScrollToTop from './components/ScrollToTop';
import Main from './components/pages/Main/Main';
import Events from './components/pages/Events/Events';

function App() {
  return (
    <Router basename="/Magul-Maha-Viharaya">
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />}/>
          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
