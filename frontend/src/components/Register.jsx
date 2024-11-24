import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import okImage from '../assets/ok.png';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save user details to localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration Successful');
    navigate('/login');
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-200 py-8 relative">
      

      <div className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '1200px', height: '640px' }}>
        <div className="flex items-center justify-center w-1/2 bg-white p-6">
        <div className=" fas fa-user absolute   text-xl  text-gray-600 top-16 left-72">

        <i >Logo</i>

        </div>
        {/* <i className="fas fa-user absolute   text-xl  text-gray-600 -mt-6">Logo</i> */}
        
          <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-lg w-full sm:w-96">
          
          
            <div className="text-lg font-semibold text-gray-900 mb-4 mt-8">Welcome to Dashboard</div>

            <div className="mb-6">
              <label htmlFor="fullName" className="block text-gray-700 text-sm mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>

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

            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 transform -translate-y-1/2 cursor-pointer -mt-6"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash text-gray-600"></i>
                ) : (
                  <i className="fas fa-eye text-gray-600"></i>
                )}
              </div>
            </div>

            <div className="mb-6 relative">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mb-2">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Confirm your password"
                required
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 transform -translate-y-1/2 cursor-pointer -mt-6"
              >
                {showConfirmPassword ? (
                  <i className="fas fa-eye-slash text-gray-600"></i>
                ) : (
                  <i className="fas fa-eye text-gray-600"></i>
                )}
              </div>
            </div>

            <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-md text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Register
            </button>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        
        <div
          className="flex flex-col items-center justify-center p-8"
          style={{
            width: '50%',
            height: '100%',
            borderRadius: '0px 20px 20px 0px',
            background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
          }}
        >
          <img src={okImage} alt="OK" className="mb-6" style={{ margin: '10px 10px 0 10px' }} />
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Our Service</h1>
            <p className="text-lg text-white">
              Our platform offers a comprehensive suite of tools designed to help you manage your tasks efficiently. Whether you are organizing personal projects or collaborating with a team, our service ensures seamless integration and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
