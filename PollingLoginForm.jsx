// PollingLoginForm.jsx
import React, { useState } from 'react';

const PollingLoginForm = ({ setIsPollingLoggedIn }) => {
  const [pollingUsername, setPollingUsername] = useState('');
  const [pollingPassword, setPollingPassword] = useState('');
  const correctPollingUsername = 'user@example.com';  // Replace with your correct username
  const correctPollingPassword = '5678';  // Replace with your correct password

  const handlePollingLogin = () => {
    if (pollingUsername === correctPollingUsername && pollingPassword === correctPollingPassword) {
      setIsPollingLoggedIn(true);
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div id='polling-login'>
      <h2>Polling Login</h2>
       
      <input
        type="text"
        placeholder="Enter username"
        value={pollingUsername}
        onChange={(e) => setPollingUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={pollingPassword}
        onChange={(e) => setPollingPassword(e.target.value)}
      />
      <button onClick={handlePollingLogin}>Login</button>
    </div>
  );
};

export default PollingLoginForm;