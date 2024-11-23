import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register'; // Assuming you have a Register component
import Login from './components/Login';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterComplete, setIsRegisterComplete] = useState(false);

  return (
    <Router>
      <Routes>
       
        <Route
          path="/"
          element={<Navigate to="/register" />}
        />

        <Route
          path="/register"
          element={<Register setIsRegisterComplete={setIsRegisterComplete} />}
        />

        <Route
          path="/signing"
          element={<SigningPage />}
        />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

       
        <Route
          path="/sidebar"
          element={isLoggedIn ? <Sidebar /> : <Navigate to="/login" />}
        />

       
        <Route
          path="*"
          element={<Navigate to="/register" />}
        />
      </Routes>
    </Router>
  );
};

const SigningPage = () => {
  return <div>Signing in...</div>;
};

export default App;
