import React from "react";

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2>Travel App</h2>
      <nav>
        <ul>
          <li>
            <button
              className={activePage === "dashboard" ? "active" : ""}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className={activePage === "trips" ? "active" : ""}
              onClick={() => setActivePage("trips")}
            >
              Trips
            </button>
          </li>
          <li>
            <button
              className={activePage === "profile" ? "active" : ""}
              onClick={() => setActivePage("profile")}
            >
              Profile
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
