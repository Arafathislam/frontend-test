// UserInfo.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          // 'http://localhost:7041/ath/info', 
           'http://192.168.68.133:7041/ath/officer/info',
          { withCredentials: true }
        );
        setUser(response.data.data); 
      } catch (error) {
        console.error('Fetch user info error:', error);
        alert('Failed to fetch user information.');
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more fields as per your backend response */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;
