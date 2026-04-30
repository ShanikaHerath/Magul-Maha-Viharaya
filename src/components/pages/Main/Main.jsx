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
    <div className="main-wrapper">
      {/* Hero Section */}
      <section className="home" id="home">
        <motion.div 
          className="home-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3>Discover Sacred Heritage</h3>
          <h1>
            Welcome to <br /> Magul Maha Viharaya
            <span>The Royal Temple of Ruhuna</span>
          </h1>
          <p>
            Journey into the heart of ancient Sri Lanka. A sacred sanctuary where royal history 
            meets timeless serenity, nestled within the lush greenery of the southeast.
          </p>
          <div className="home-btns">
            <button className="btn" onClick={scrollToContact}>
              Plan Your Visit
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="home-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Magul-Maha-Viharaya-Page_MOB_800x1000.jpg"
            alt="Magul Maha Viharaya Temple View"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="heading" data-aos="fade-up">
          <h2>Preserving Centuries of Wisdom</h2>
        </div>
        <div className="services-container">
          {[
            {
              img: "https://png.pngtree.com/png-vector/20191017/ourmid/pngtree-book-icon-png-image_1820088.jpg",
              title: "Ancient Roots",
              desc: "Witness the legendary site where King Kavan Tissa and Queen Viharamahadevi were united in royal matrimony."
            },
            {
              img: "https://previews.123rf.com/images/sobahus/sobahus2009/sobahus200900027/155146167-peace-line-symbol-hand-and-peace-icon-design-template-vector.jpg",
              title: "Spiritual Calm",
              desc: "Escape the modern world in our tranquil gardens and meditation spaces, designed for inner peace."
            },
            {
              img: "https://static.vecteezy.com/system/resources/thumbnails/002/595/034/small/guide-arrows-travel-tourism-location-linear-icon-style-free-vector.jpg",
              title: "Cultural Legacy",
              desc: "Explore masterfully carved moonstones and stone pillars that define the architectural brilliance of Ruhuna."
            }
          ].map((service, index) => (
            <div className="box glass-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <img src={service.img} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-block">
            <div className="about-text" data-aos="fade-right">
              <h2 className="about-title">Sacred Origins</h2>
              <p className="about-description">
                Magul Maha Viharaya is more than a monument; it's a living archive of Sri Lankan history. 
                Located in the serene Lahugala region, it has served as a beacon of Buddhist philosophy 
                and royal prestige for over two millennia.
              </p>
            </div>
            <div className="about-image" data-aos="zoom-in">
              <img
                src="https://www.srilankanexpeditions.com/images/sri-lanka-travel-guide/history-archaeology-sri-lanka/ancient-temple/magul-maha-viharaya/slider1.jpg"
                alt="Ancient Temple Stupa"
              />
            </div>
          </div>

          <div className="about-block reverse">
            <div className="about-text" data-aos="fade-left">
              <h2 className="about-title">The Royal Union</h2>
              <p className="about-description">
                Steeped in romance and valor, this is the hallowed ground where the Great King Kavan Tissa 
                wed Princess Viharamahadevi. The name 'Magul' celebrates this historic marriage that 
                changed the course of the island's history.
              </p>
            </div>
            <div className="about-image" data-aos="zoom-in">
              <img
                src="https://storyofsrilanka.com/images/slider/sri-lanka-guide-destinations/magul-maha-viharaya/01.jpg"
                alt="Royal Wedding Location"
              />
            </div>
          </div>

          <div className="about-block">
            <div className="about-text" data-aos="fade-right">
              <h2 className="about-title">Architectural Marvel</h2>
              <p className="about-description">
                The temple boasts one of the best-preserved moonstones in Sri Lanka, unique for its 
                intricate carvings of elephants and riders. Every stone pillar tells a story of 
                devotion and artistic mastery from the golden age of Anuradhapura.
              </p>
            </div>
            <div className="about-image" data-aos="zoom-in">
              <img
                src="https://storyofsrilanka.com/images/sri-lanka-guide/ancient-temple/magul-maha-viharaya/01.jpg"
                alt="Ancient Stone Carvings"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 data-aos="fade-up">Temple Gallery</h2>

        <div className="filter-buttons" data-aos="fade-up">
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

        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                className="gallery-item"
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <img src={item.src} alt={item.category} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 data-aos="fade-up">Explore Through Video</h2>
        <div className="video-grid">
          {[
            { id: "c2-pCpLV74U", title: "Temple Ceremony" },
            { id: "4_dRe1iHnco", title: "Vesak Celebration" }
          ].map((video, index) => (
            <div className="video-card" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta" id="contact">
        <div className="contact glass-card" data-aos="fade-up">
          <h2>Ready to Explore Ruhuna's History?</h2>
          <p style={{marginBottom: '2rem', opacity: 0.9}}>Contact us for guided tours, donation inquiries, or visiting information.</p>
          <button className="contact-button" onClick={handleContactClick}>
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;
