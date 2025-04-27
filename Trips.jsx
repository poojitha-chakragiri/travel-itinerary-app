import React, { useState } from "react";
import TripDetailsPane from "./TripDetailsPane";

function Trips({ trips }) {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const today = new Date().toISOString().split("T")[0];
  const pastTrips = trips.filter((trip) => trip.date < today);
  const futureTrips = trips.filter((trip) => trip.date >= today);

  return (
    <div>
      <h2>Trips</h2>
      <h3>Future Trips</h3>
      {futureTrips.length === 0 ? (
        <p>No future trips planned.</p>
      ) : (
        <ul>
          {futureTrips.map((trip, idx) => (
            <li
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedTrip(trip)}
            >
              <b>{trip.title || trip.name}</b> - {trip.place || trip.title} (
              {trip.date})
            </li>
          ))}
        </ul>
      )}
      <h3>Past Trips</h3>
      {pastTrips.length === 0 ? (
        <p>No past trips.</p>
      ) : (
        <ul>
          {pastTrips.map((trip, idx) => (
            <li
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedTrip(trip)}
            >
              <b>{trip.title || trip.name}</b> - {trip.place || trip.title} (
              {trip.date})
            </li>
          ))}
        </ul>
      )}
      {selectedTrip && (
        <TripDetailsPane
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
}

export default Trips;
