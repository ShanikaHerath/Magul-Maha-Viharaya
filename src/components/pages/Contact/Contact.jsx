import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Form */}
      <section className="contact-section">
        <h2 data-aos="fade-up">Contact Us</h2>
        
        {isSubmitted && (
          <div className="success-message" data-aos="fade-down">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form className="contact-form" data-aos="fade-up" data-aos-delay="100" onSubmit={handleSubmit}>
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Name</label>
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Subject</label>
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>

          <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
            <textarea 
              rows="5" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
            ></textarea>
            <label>Message</label>
            {errors.message && <span className="error-text">{errors.message}</span>}
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
          <p><strong>Phone:</strong> <a href="tel:+94771234567">+94 77 123 4567</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@magulmahaviharaya.lk">info@magulmahaviharaya.lk</a></p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com/magulmahaviharaya" target="_blank" rel="noreferrer">facebook.com/magulmahaviharaya</a></p>
          <p><strong>Visiting Hours:</strong> 6:00 AM – 6:00 PM Daily</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
