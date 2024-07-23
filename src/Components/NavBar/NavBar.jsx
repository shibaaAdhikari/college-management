// src/components/Navbar/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
 
       <nav className="flex-none w-[20%] h-screen  text-white flex flex-col pt-20 bg-secondary -z-10">
        {/* <div className="flex items-center justify-center mb-6 bg-slate-700">
          <h2 className="text-2xl font-semibold text-center p-4">College Management</h2>
        </div> */}
        <ul className="flex-1 p-4  background">
          <li className="mb-4">
            <NavLink
              to="/"
              aria-label="Go to Attendance"
              className="text-white"
            >
              Attendance
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/program"
              aria-label="Go to Attendance"
              className="text-white"
            >
              Program
            </NavLink>
          </li>
          
        </ul>
      </nav> 
   

  );
};

export default Navbar;
