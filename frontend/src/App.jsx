import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Register />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        <Route 
          path="/login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        {/* Show Sidebar only when logged in */}
        {isLoggedIn && (
          <Route 
            path="/sidebar" 
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-8">
                  <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                </div>
              </div>
            } 
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
