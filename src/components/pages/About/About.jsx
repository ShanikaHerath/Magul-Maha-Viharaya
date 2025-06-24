import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Block 1 - Text Left / Image Right */}
        <div className="about-block">
          <div className="about-text">
            <h2 className="about-title">Sacred Origins</h2>
            <p className="about-description">
              Magul Maha Viharaya is a sacred Buddhist temple located in the serene southeast of Sri Lanka. Rooted in centuries of heritage, it served as a spiritual sanctuary and cultural heart for generations.
            </p>
          </div>
          <div className="about-image">
            <img src="https://www.srilankanexpeditions.com/images/sri-lanka-travel-guide/history-archaeology-sri-lanka/ancient-temple/magul-maha-viharaya/slider1.jpg" alt="Sacred Origins" />
          </div>
        </div>

        {/* Block 2 - Image Left / Text Right */}
        <div className="about-block reverse">
          <div className="about-text">
            <h2 className="about-title">Royal Wedding</h2>
            <p className="about-description">
              The temple is believed to be the exact location of the royal wedding of King Kavan Tissa and Queen Viharamahadevi. The word “Magul” means wedding — tying the place to ancient royalty.
            </p>
          </div>
          <div className="about-image">
            <img src="https://storyofsrilanka.com/images/slider/sri-lanka-guide-destinations/magul-maha-viharaya/01.jpg" alt="Royal Wedding" />
          </div>
        </div>

        {/* Block 3 - Text Left / Image Right */}
        <div className="about-block">
          <div className="about-text">
            <h2 className="about-title">Architectural Elegance</h2>
            <p className="about-description">
              From ancient moonstones to stone pillars and a majestic stupa, Magul Maha Viharaya showcases the architectural brilliance of the Anuradhapura era.
            </p>
          </div>
          <div className="about-image">
            <img src="https://storyofsrilanka.com/images/sri-lanka-guide/ancient-temple/magul-maha-viharaya/01.jpg" alt="Architecture" />
          </div>
        </div>

        {/* Block 4 - Image Left / Text Right */}
        <div className="about-block reverse">
          <div className="about-text">
            <h2 className="about-title">Living Heritage</h2>
            <p className="about-description">
              More than ruins, this temple remains active — a spiritual haven where monks meditate and visitors find inner peace beneath ancient trees.
            </p>
          </div>
          <div className="about-image">
            <img src="https://arugambay.org/wp-content/uploads/2017/07/moonStone1-blog.jpg" alt="Living Temple" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
