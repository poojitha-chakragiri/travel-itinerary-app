import React from "react";

function Header({ onAddTrip }) {
  return (
    <header className="header">
      <h1>My Itinerary</h1>
      <button className="add-trip-btn" onClick={onAddTrip}>
        + Add Trip
      </button>
    </header>
  );
}

export default Header;
