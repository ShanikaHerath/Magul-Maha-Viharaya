import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [pendingScrollId, setPendingScrollId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigateTo = (path) => {
    closeMenu();
    navigate(path);
  };

  // ✅ UPDATED: Scroll to section with offset
  const handleScrollTo = (id) => {
    closeMenu();
    const offset = 80; // adjust this based on your navbar height

    if (location.pathname !== '/') {
      setPendingScrollId(id);
      navigate('/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // ✅ UPDATED: Scroll after route change
  useEffect(() => {
    if (location.pathname === '/' && pendingScrollId) {
      const offset = 80;
      const element = document.getElementById(pendingScrollId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setPendingScrollId(null);
      }
    }
  }, [location, pendingScrollId]);

  // Hide navbar on scroll down
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScrollTo('main')}>
          MyLogo
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><button className="nav-btn" onClick={() => handleScrollTo('main')}>Home</button></li>
          <li><button className="nav-btn" onClick={() => handleScrollTo('about')}>About</button></li>
          <li><button className="nav-btn" onClick={() => handleScrollTo('gallery')}>Gallery</button></li>
          <li><button className="nav-btn" onClick={() => navigateTo('/events')}>Events</button></li>
          <li><button className="nav-btn" onClick={() => navigateTo('/contact')}>Contact</button></li>
          <li><button className="nav-btn" onClick={() => navigateTo('/donations')}>Donations</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
