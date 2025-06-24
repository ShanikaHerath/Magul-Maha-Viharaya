import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Magul Maha Viharaya</h2>
          <p>Preserving Sri Lanka's sacred heritage, one step at a time.</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donations">Donates</Link>

        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="mailto:info@magulmahaviharaya.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
            <FaXTwitter />
          </a>
          <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Magul Maha Viharaya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
