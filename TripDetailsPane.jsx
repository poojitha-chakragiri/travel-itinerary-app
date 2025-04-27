import React from "react";
import "./TripDetailsPane.css";

function TripDetailsPane({ trip, onClose }) {
  if (!trip) return null;
  return (
    <div className="third-pane">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      {/* TODO: Adjust styles here for pixel-perfect Figma matching */}
      <h3>{trip.title}</h3>
      <p>Date: {trip.date}</p>
      {Array.isArray(trip.days) && trip.days.length > 0 ? (
        trip.days.map((day) => (
          <div key={day.day} className="itinerary-day">
            <h4>Day {day.day}</h4>
            <ul>
              {day.activities.map((act, idx) => (
                <li key={idx}>{act}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No itinerary details available for this trip.</p>
      )}
    </div>
  );
}

export default TripDetailsPane;
