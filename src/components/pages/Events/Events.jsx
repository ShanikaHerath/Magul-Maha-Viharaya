import React, { useState } from "react";
import "./Events.css";

const eventData = [
  {
    id: 1,
    name: "Vesak Festival",
    date: "2025-05-23",
    time: "6:00 PM",
    type: "festival",
    icon: "🎉"
  },
  {
    id: 2,
    name: "Full Moon Meditation",
    date: "2025-06-20",
    time: "7:30 PM",
    type: "meditation",
    icon: "🌕"
  },
  {
    id: 3,
    name: "Annual Pirith Chanting",
    date: "2025-07-05",
    time: "8:00 PM",
    type: "ritual",
    icon: "🔔"
  }
];

const Events = () => {
  const [filter, setFilter] = useState("all");

  const filteredEvents = eventData.filter(event =>
    filter === "all" ? true : event.type === filter
  );

  return (
    <div className="events-container">
      <section className="highlight-feature">
        <h2>🌟 Next Big Festival</h2>
        <div className="highlight-banner">
          <h3>Vesak Festival</h3>
          <p>May 23, 2025 - 6:00 PM</p>
        </div>
      </section>

      <section className="filter-section">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("festival")}>Festivals</button>
        <button onClick={() => setFilter("meditation")}>Meditation</button>
        <button onClick={() => setFilter("ritual")}>Rituals</button>
      </section>

      <section className="upcoming-events">
        <h2>📅 Upcoming Events</h2>
        <div className="event-cards">
          {filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-icon">{event.icon}</div>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="past-events">
        <h2>📸 Past Events</h2>
        <div className="past-gallery">
          <img src="/images/past1.jpg" alt="Past event 1" />
          <img src="/images/past2.jpg" alt="Past event 2" />
          <img src="/images/past3.jpg" alt="Past event 3" />
        </div>
      </section>
    </div>
  );
};

export default Events;
