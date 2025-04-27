import React from "react";

function ItineraryCard({ trip }) {
  return (
    <div className="itinerary-card">
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

export default ItineraryCard;
