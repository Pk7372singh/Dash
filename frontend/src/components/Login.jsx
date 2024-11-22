import React, { useState } from 'react';
import okImage from '../assets/ok.png'; // Adjust the path as necessary

const Login = ({ setIsLoggedIn }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful');
    setIsLoggedIn(true);  
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-200 py-8">
      <div className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '1200px', height: '640px' }}>
      
        <div className="flex items-center justify-center w-1/2 bg-white p-4">
          <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-lg w-full sm:w-96">
            <div className="text-lg font-semibold text-gray-900 mb-6">Welcome to Dashboard</div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-md text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Login Now
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center p-8" style={{ width: '50%', height: '100%', borderRadius: '0px 20px 20px 0px', background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)' }}>
          <img src={okImage} alt="OK" className="mb-6" style={{ margin: '10px 10px 0 10px' }} />
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Our Service</h1>
            <p className="text-lg text-white">
              Our platform offers a comprehensive suite of tools designed to help you manage your tasks efficiently.
              Whether you are organizing personal projects or collaborating with a team, our service ensures seamless integration and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
