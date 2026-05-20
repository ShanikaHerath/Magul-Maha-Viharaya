import React from "react";
import "./Events.css";

import peraheraImg from '../assets/perahera.jpg';
import bodipujaImg from '../assets/bodipuja.webp';
import katinaImg from '../assets/katina.webp';
import wesakImg from '../assets/thorana.jpg';
import posonImg from '../assets/poson2.png';
import bodipujaImg1 from '../assets/bodipujaImg1.jpg';


const Events = () => {
  return (
    <div className="events-page">

  
      {/* Fixed Annual Events */}
      <section className="section-header">
        <h2>Annual Ceremonies</h2><br></br>
          <div className="event-cards">
          <div className="event-card">
            <h3>Vesak Festival</h3>
            <p>June Full Moon Day</p>
            <p>🕢 5:30 AM</p>
          </div>
         <div className="event-card">
            <h3>Poson Festival</h3>
            <p>June Full Moon Day</p>
            <p>🕢 6:30 AM</p>
          </div>
          <div className="event-card">
            <h3>Sil Observance</h3>
            <p>Monthly Poya Days</p>
            <p>🕘 8:00 AM</p>
          </div>
          <div className="event-card">
            <h3>Katina Ceremony</h3>
            <p>November First Week</p>
            <p>🕔 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-header">
        <h2>Past Events</h2><br></br>
        <div className="past-gallery">

        <div className="past-gallery-item">
         <img src={bodipujaImg1} alt="Daily Bodhi Pooja" />
         <div className="event-date">Ongoing</div>
         <div className="event-caption">Daily Bodhi Pooja Ceremony</div>
       </div>

          <div className="past-gallery-item">
            <img src={peraheraImg} alt="Perahera Festival" />
            <div className="event-date">August 2024</div>
            <div className="event-caption">Perahera Festival Celebration</div>
          </div>

          <div className="past-gallery-item">
            <img src={bodipujaImg} alt="Bodhi Puja" />
            <div className="event-date">July 2024</div>
            <div className="event-caption">Bodhi Puja Ceremony</div>
          </div>

          <div className="past-gallery-item">
            <img src={katinaImg} alt="Katina Ceremony" />
            <div className="event-date">November 2023</div>
            <div className="event-caption">Katina Robe Offering</div>
          </div>

          <div className="past-gallery-item">
            <img src={wesakImg} alt="Vesak Festival" />
            <div className="event-date">May 2024</div>
            <div className="event-caption">Vesak Festival Celebration</div>
          </div>

        <div className="past-gallery-item">
          <img src={posonImg} alt="Poson Festival" />
          <div className="event-date">June 2024</div>
         <div className="event-caption">Poson Festival Observance</div>
       </div>

        </div>
      </section>
    </div>
  );
};

export default Events;
