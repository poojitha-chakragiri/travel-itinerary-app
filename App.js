import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Trips from "./components/Trips";
import Profile from "./components/Profile";
import AddTripModal from "./components/AddTripModal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [showAddTrip, setShowAddTrip] = useState(false);
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState(null);

  const handleAddTrip = (trip) => {
    setTrips([...trips, trip]);
    setShowAddTrip(false);
    setActivePage("trips");
  };

  if (!user) {
    return <LoginModal onLogin={setUser} />;
  }

  return (
    <div className="app-root">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header onAddTrip={() => setShowAddTrip(true)} />
        {activePage === "dashboard" && <Dashboard user={user} trips={trips} />}
        {activePage === "trips" && <Trips trips={trips} />}
        {activePage === "profile" && <Profile user={user} />}
        {showAddTrip && (
          <AddTripModal
            onClose={() => setShowAddTrip(false)}
            onAddTrip={handleAddTrip}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
