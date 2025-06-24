import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      {/* Contact Form */}
      <section className="contact-section">
        <h2 data-aos="fade-up">Contact Us</h2>
        <form className="contact-form" data-aos="fade-up" data-aos-delay="100">
          <div className="form-group">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input type="text" required />
            <label>Subject</label>
          </div>
          <div className="form-group">
            <textarea rows="5" required></textarea>
            <label>Message</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Location Map */}
      <section className="contact-section" data-aos="fade-up" data-aos-delay="200">
        <h2>Temple Location</h2>
        <div className="map-container">
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.27433227176!2d81.000000!3d6.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AMagul%20Maha%20Viharaya!5e0!3m2!1sen!2slk!4v0000000000000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section" data-aos="fade-up" data-aos-delay="300">
        <h2>Reach Out</h2>
        <div className="contact-details">
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Email:</strong> info@magulmahaviharaya.lk</p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com/magulmahaviharaya" target="_blank" rel="noreferrer">facebook.com/magulmahaviharaya</a></p>
          <p><strong>Visiting Hours:</strong> 6:00 AM – 6:00 PM Daily</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
