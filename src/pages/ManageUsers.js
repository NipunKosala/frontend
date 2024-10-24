import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from an API or database
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleDelete = (userId) => {
    // Perform delete user action
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter((user) => user.id !== userId)))
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name} ({user.email})</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
