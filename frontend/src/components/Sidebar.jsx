import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <img src="logo.png" alt="Logo" className="w-32 mx-auto" />
      </div>
      {/* Search Area */}
      <div className="p-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      {/* Menu Items */}
      <div className="flex-grow p-4">
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#requirement">Requirement</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#candidate">Candidate</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#organisation">Organisation</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#employee">Employee</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#attendees">Attendees</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#leaves">Leaves</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#other">Other</a></li>
        </ul>
      </div>
      {/* Logout Button */}
      <div className="p-4">
        <button className="w-full p-2 bg-red-600 rounded hover:bg-red-700">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
