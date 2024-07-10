// App.js
import React, { useState } from 'react';
import LoginForm from './LoginFrom';
import UserInfo from './UserInfo';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>React Login App</h1>
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <UserInfo />
      )}
    </div>
  );
};

export default App;
