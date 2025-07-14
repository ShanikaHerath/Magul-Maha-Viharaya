import React, { useState, useEffect } from 'react';
import '../Home/Home.css';
import '../About/About.css';
import '../Gallery/Gallery.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

import people from '../assets/people.webp';
import offerings1 from '../assets/Offerings1.jpg';      
import ordination from '../assets/Ordination.jpg';     
import wesak from '../assets/wesak.jpg';               
import ordination2 from '../assets/Ordination2.webp';   
import offerings from '../assets/Offerings.webp';       

const galleryItems = [
  { id: 1, src: people, category: 'Vesak' },
  { id: 2, src: offerings1, category: 'Offerings' },
  { id: 3, src: ordination, category: 'Ordination' },
  { id: 4, src: wesak, category: 'Vesak' },
  { id: 5, src: offerings, category: 'Offerings' }, 
  { id: 6, src: ordination2, category: 'Ordination' },
];

const Main = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="home" id="home">
        <div className="home-text"><br></br>
          <h3>Discover Heritage</h3>
          <h1>
            Welcome to <br /> Magul Maha Viharaya <br />
            <span>Sacred Temple of Ruhuna</span>
          </h1>
          <p>
            Explore the ancient Buddhist temple of historical significance,
            where tradition meets timeless serenity in the heart of Sri Lanka.
          </p>
          <button className="btn" onClick={scrollToContact}>
            Learn More
          </button>
        </div>
        <div className="home-img">
          <img
            src="https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Magul-Maha-Viharaya-Page_MOB_800x1000.jpg"
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
            <img
              src="https://png.pngtree.com/png-vector/20191017/ourmid/pngtree-book-icon-png-image_1820088.jpg"
              alt="heritage"
            />
            <h2>Historical Significance</h2>
            <p>
              This ancient site is believed to be the location where King Kavantissa
              married Viharamahadevi.
            </p>
          </div>
          <div className="box">
            <img
              src="https://previews.123rf.com/images/sobahus/sobahus2009/sobahus200900027/155146167-peace-line-symbol-hand-and-peace-icon-design-template-vector.jpg"
              alt="peace"
            />
            <h2>Peaceful Surroundings</h2>
            <p>
              The temple is nestled in lush greenery, offering spiritual calm and
              cultural richness.
            </p>
          </div>
          <div className="box">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/595/034/small/guide-arrows-travel-tourism-location-linear-icon-style-free-vector.jpg"
              alt="guidance"
            />
            <h2>Guided Visits</h2>
            <p>
              Learn from monks and historians about the temple’s deep roots and
              architectural legacy.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-block">
            <div className="about-text">
              <h2 className="about-title">Sacred Origins</h2>
              <p className="about-description">
                Magul Maha Viharaya is a sacred Buddhist temple located in the
                serene southeast of Sri Lanka. Rooted in centuries of heritage, it
                served as a spiritual sanctuary and cultural heart for generations.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://www.srilankanexpeditions.com/images/sri-lanka-travel-guide/history-archaeology-sri-lanka/ancient-temple/magul-maha-viharaya/slider1.jpg"
                alt="Sacred Origins"
              />
            </div>
          </div>

          <div className="about-block reverse">
            <div className="about-text">
              <h2 className="about-title">Royal Wedding</h2>
              <p className="about-description">
                The temple is believed to be the exact location of the royal wedding
                of King Kavan Tissa and Queen Viharamahadevi. The word “Magul” means
                wedding — tying the place to ancient royalty.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://storyofsrilanka.com/images/slider/sri-lanka-guide-destinations/magul-maha-viharaya/01.jpg"
                alt="Royal Wedding"
              />
            </div>
          </div>

          <div className="about-block">
            <div className="about-text">
              <h2 className="about-title">Architectural Elegance</h2>
              <p className="about-description">
                From ancient moonstones to stone pillars and a majestic stupa, Magul
                Maha Viharaya showcases the architectural brilliance of the
                Anuradhapura era.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://storyofsrilanka.com/images/sri-lanka-guide/ancient-temple/magul-maha-viharaya/01.jpg"
                alt="Architecture"
              />
            </div>
          </div>

          <div className="about-block reverse">
            <div className="about-text">
              <h2 className="about-title">Living Heritage</h2>
              <p className="about-description">
                More than ruins, this temple remains active — a spiritual haven
                where monks meditate and visitors find inner peace beneath ancient
                trees.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://arugambay.org/wp-content/uploads/2017/07/moonStone1-blog.jpg"
                alt="Living Temple"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 data-aos="fade-up">Temple Gallery</h2>

        {/* Filter Buttons */}
        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
          {['All', 'Vesak', 'Ordination', 'Offerings'].map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div className="gallery-grid" layout>
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                className="gallery-item"
                key={item.id}
                layout
                data-aos="zoom-in"
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.src} alt={item.category} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 data-aos="fade-up">Temple Videos</h2>
        <div className="video-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/c2-pCpLV74U"
              title="Temple Ceremony"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/4_dRe1iHnco"
              title="Vesak Celebration"
              frameBorder="0"
              allowFullScreen
            ></iframe>
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

export default Main;
