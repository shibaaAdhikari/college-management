// src/Components/NavBar/TopBar.js
import React from 'react';
import { FaEnvelope, FaBell, FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="h-16 bg-gray-700 text-white flex items-center px-4 justify-between">
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 rounded-md border border-gray-300"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-xl cursor-pointer" />
        <FaBell className="text-xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl" />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
