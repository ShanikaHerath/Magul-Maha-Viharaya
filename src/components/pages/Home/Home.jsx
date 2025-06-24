import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="home" id="home">
        <div className="home-text">
          <h3>Discover Heritage</h3>
          <h1>
            Welcome to <br /> Magul Maha Viharaya <br />
            <span>Sacred Temple of Ruhuna</span>
          </h1>
          <p>
            Explore the ancient Buddhist temple of historical significance,
            where tradition meets timeless serenity in the heart of Sri Lanka.
          </p>
          <a href="#contact" className="btn">Learn More</a>
        </div>

        <div className="home-img">
          <img
            src="https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Magul-Maha-Viharaya-Page_MOB_800x1000.jpg" // Replace with temple image later
            alt="Magul Maha Viharaya"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="heading">
          
          <h2>Preserving Culture & History</h2>
        </div>

        <div className="services-container">
          <div className="box">
            <img src="https://png.pngtree.com/png-vector/20191017/ourmid/pngtree-book-icon-png-image_1820088.jpg" alt="heritage" />
            <h2>Historical Significance</h2>
            <p>
              This ancient site is believed to be the location where King Kavantissa married Viharamahadevi.
            </p>
          </div>

          <div className="box">
            <img src="https://previews.123rf.com/images/sobahus/sobahus2009/sobahus200900027/155146167-peace-line-symbol-hand-and-peace-icon-design-template-vector.jpg" alt="peace" />
            <h2>Peaceful Surroundings</h2>
            <p>
              The temple is nestled in lush greenery, offering spiritual calm and cultural richness.
            </p>
          </div>

          <div className="box">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/595/034/small/guide-arrows-travel-tourism-location-linear-icon-style-free-vector.jpg" alt="guidance" />
            <h2>Guided Visits</h2>
            <p>
              Learn from monks and historians about the temple’s deep roots and architectural legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="heading">
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
