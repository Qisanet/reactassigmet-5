import React, { useState } from 'react';
import LoginForm from './LogginForm';
import UserDashboard from './UserDash';
import AdminDashboard from './AdminDash';
import ErrorMessage from './Error';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage />}
      {isLoggedIn && !isAdmin && <UserDashboard />}
      {isLoggedIn && isAdmin && <AdminDashboard />}
    </div>
  );
}

export default App;
