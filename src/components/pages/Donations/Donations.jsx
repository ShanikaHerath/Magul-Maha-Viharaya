import React from 'react';
import './Donations.css';

const Donation = () => {
  return (
    <section className="donation-section">
      <div className="donation-container">
        <h2 className="donation-title">Support Magul Maha Viharaya</h2>
        <p className="donation-intro">
          Your generous contribution helps us preserve this sacred temple, support the resident monks, and maintain the ancient heritage of Magul Maha Viharaya. Every donation, big or small, is a blessing.
        </p>

        <div className="donation-boxes">
          <div className="donation-box">
            <h3>🙏 Basic Offering</h3>
            <p>LKR 500 - Helps with daily temple rituals & oil lamps</p>
          </div>
          <div className="donation-box">
            <h3>📿 Spiritual Support</h3>
            <p>LKR 2,000 - Supports monks’ meals and chanting sessions</p>
          </div>
          <div className="donation-box">
            <h3>🏛️ Heritage Guardian</h3>
            <p>LKR 5,000+ - Aids in structural conservation and meditation events</p>
          </div>
        </div>

        <div className="donation-methods">
          <h3>💳 How to Donate</h3>
          <p><strong>Bank Transfer:</strong></p>
          <p>Account Name: Magul Maha Viharaya Trust Fund</p>
          <p>Bank: Bank of Ceylon</p>
          <p>Account No: 123456789</p>
          <p>Branch: Lahugala</p>
          <p>SWIFT: BCEYLKLX</p>

          <p className="note">* After donation, you may email your receipt to <strong>donations@magulmahaviharaya.lk</strong> if you wish to receive blessings and prayer dedications.</p>
        </div>
      </div>
    </section>
  );
};

export default Donation;
