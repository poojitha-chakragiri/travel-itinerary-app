import React from "react";

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <b>Name:</b> {user.name}
        </li>
        <li>
          <b>Age:</b> {user.age}
        </li>
        <li>
          <b>Date of Birth:</b> {user.dob}
        </li>
        <li>
          <b>Email:</b> {user.email}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
