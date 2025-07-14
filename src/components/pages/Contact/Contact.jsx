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
       title="Lahugala Magul Maha Viharaya Location"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.193954434395!2d81.734076974996!3d6.867347093131308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a4df12861051%3A0x71f6023e41a7f7c7!2sLahugala%20Magul%20Maha%20Viharaya!5e0!3m2!1sen!2slk!4v1752494058149!5m2!1sen!2slk"
       width="100%"
       height="350"
       style={{ border: 0 }}
       allowFullScreen=""
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       />

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
