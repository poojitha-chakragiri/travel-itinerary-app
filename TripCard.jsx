import React from "react";
import "./TripCard.css";

function TripCard({ trip, onClick }) {
  return (
    <div
      className="itinerary-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {/* TODO: Adjust styles here for pixel-perfect Figma matching */}
      <h2>{trip.title}</h2>
      <p>{trip.date}</p>
      {trip.days.map((day) => (
        <div key={day.day} className="itinerary-day">
          <h3>Day {day.day}</h3>
          <ul>
            {day.activities.map((act, idx) => (
              <li key={idx}>{act}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TripCard;
