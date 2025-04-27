import React, { useState } from "react";
import "./AddTripModal.css"; // Reuse modal styles

function LoginModal({ onLogin }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    dob: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Login / Register</h2>
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
            Age:
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
