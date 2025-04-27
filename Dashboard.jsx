import React from "react";

function Dashboard({ user, trips }) {
  // Find the next upcoming trip
  const today = new Date().toISOString().split("T")[0];
  const futureTrips = trips.filter((trip) => trip.date >= today);
  const nextTrip = futureTrips.length
    ? futureTrips.reduce((a, b) => (a.date < b.date ? a : b))
    : null;

  return (
    <div>
      {/* Welcome Banner */}
      <div
        style={{
          background: "linear-gradient(90deg, #007aff 60%, #00c6fb 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "2rem 1.5rem",
          marginBottom: "2rem",
          boxShadow: "0 2px 8px #007aff22",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>👋 Welcome, {user.name}!</h2>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            Ready for your next adventure?
          </p>
        </div>
        <div style={{ fontSize: "2.5rem" }}>🌍</div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px #0001",
            padding: "1.2rem 2rem",
            minWidth: "180px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🧳</div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {trips.length}
          </div>
          <div style={{ color: "#555" }}>Total Trips</div>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px #0001",
            padding: "1.2rem 2rem",
            minWidth: "180px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🗓️</div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {nextTrip ? nextTrip.place : "—"}
          </div>
          <div style={{ color: "#555" }}>
            {nextTrip ? `Next: ${nextTrip.date}` : "No upcoming trip"}
          </div>
        </div>
      </div>

      {/* Upcoming Trips */}
      <h3 style={{ marginTop: "2rem" }}>Upcoming Trips</h3>
      {futureTrips.length === 0 ? (
        <p>No trips yet. Click "+ Add Trip" to get started!</p>
      ) : (
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {futureTrips.map((trip, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px #0001",
                padding: "1.2rem 1.5rem",
                minWidth: "220px",
                marginBottom: "1rem",
              }}
            >
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {trip.name}
              </div>
              <div style={{ color: "#007aff", fontWeight: "bold" }}>
                {trip.place}
              </div>
              <div style={{ color: "#555" }}>{trip.date}</div>
              <div style={{ fontSize: "0.95rem", color: "#888" }}>
                Companions: {trip.companions || "—"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
