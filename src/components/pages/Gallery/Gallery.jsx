import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';



const galleryItems = [
  { id: 1, src: 'https://via.placeholder.com/400x300', category: 'Vesak' },
  { id: 2, src: 'https://via.placeholder.com/400x300', category: 'Offerings' },
  { id: 3, src: 'https://via.placeholder.com/400x300', category: 'Ordination' },
  { id: 4, src: 'https://via.placeholder.com/400x300', category: 'Vesak' },
  { id: 5, src: 'https://via.placeholder.com/400x300', category: 'Offerings' },
  { id: 6, src: 'https://via.placeholder.com/400x300', category: 'Ordination' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-section">
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
      <section className="gallery-section">
        <h2 data-aos="fade-up">Temple Videos</h2>
        <div className="video-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Temple Ceremony"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Vesak Celebration"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
