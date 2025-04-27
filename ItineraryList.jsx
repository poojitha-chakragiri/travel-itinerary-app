import React, { useState, useEffect } from "react";
import ItineraryCard from "./ItineraryCard";
import ThirdPane from "./ThirdPane";

// Remove static trips, use mock API instead

function ItineraryList() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Mock API call
  useEffect(() => {
    setTimeout(() => {
      setTrips([
        {
          id: 1,
          title: "Paris Adventure",
          date: "2024-07-10",
          days: [
            {
              day: 1,
              activities: [
                "Arrive in Paris",
                "Check in hotel",
                "Eiffel Tower visit",
              ],
            },
            { day: 2, activities: ["Louvre Museum", "Seine River Cruise"] },
          ],
        },
        {
          id: 2,
          title: "Tokyo Explorer",
          date: "2024-08-15",
          days: [
            { day: 1, activities: ["Arrive in Tokyo", "Shibuya Crossing"] },
          ],
        },
      ]);
    }, 800); // Simulate network delay
  }, []);

  return (
    <div className="itinerary-list">
      {/* TODO: Adjust styles here for pixel-perfect Figma matching */}
      {trips.map((trip) => (
        <ItineraryCard
          key={trip.id}
          trip={trip}
          onClick={() => setSelectedTrip(trip)}
        />
      ))}
      {selectedTrip && (
        <ThirdPane trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
      )}
    </div>
  );
}

export default ItineraryList;
