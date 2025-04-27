import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import TripDetailsPane from "./TripDetailsPane";
import { fetchTrips } from "../api";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    fetchTrips().then(setTrips);
  }, []);

  return (
    <div className="itinerary-list">
      {/* TODO: Adjust styles here for pixel-perfect Figma matching */}
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onClick={() => setSelectedTrip(trip)}
        />
      ))}
      {selectedTrip && (
        <TripDetailsPane
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
}

export default TripList;
