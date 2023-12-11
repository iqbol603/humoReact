import React from 'react';

const UserProfile = ({ name, age, email }) => {
  return (
    <div className="user-profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
