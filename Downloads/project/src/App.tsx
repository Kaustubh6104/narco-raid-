import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (staffId: string, password: string) => {
    // In a real application, this would validate against a secure backend
    if (staffId && password) {
      setIsAuthenticated(true);
    }
  };

  return isAuthenticated ? <Dashboard /> : <LoginForm onLogin={handleLogin} />;
}

export default App;