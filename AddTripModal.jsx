import React, { useState } from "react";
import "./AddTripModal.css";

function AddTripModal({ onClose, onAddTrip }) {
  const [form, setForm] = useState({
    name: "",
    place: "",
    date: "",
    companions: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTrip(form);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New Trip</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Trip Place:
            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Trip Date:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Companions:
            <input
              name="companions"
              value={form.companions}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="submit" className="add-trip-btn">
              Add Trip
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTripModal;
