import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';  // Keep this path based on where Navbar.jsx lives

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

  const handleScrollTo = (id) => {
    closeMenu();
    if (location.pathname !== '/') {
      setPendingScrollId(id);
      navigate('/');
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && pendingScrollId) {
      const section = document.getElementById(pendingScrollId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setPendingScrollId(null);
      }
    }
  }, [location, pendingScrollId]);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">MyLogo</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><button className="nav-btn" onClick={() => handleScrollTo('main')}>Home</button></li>
          <li><button className="nav-btn" onClick={() => handleScrollTo('about-section')}>About</button></li>
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
