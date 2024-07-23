import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = (message) => () => {
    console.log(message);
  };

  return (
    <nav className="flex-none w-[20%] h-screen text-white flex flex-col pt-20 bg-secondary">
      <div className="flex-1 p-4 background">
        <div className="mb-4">
          <Link
            to="/"
            aria-label="Homepage"
            className="text-white hover:text-yellow-300" // Change color on hover
            onClick={handleClick("Attendance clicked")}
          >
            Attendance
          </Link>
        </div>
        <div className="mb-4">
          <Link
            to="/program"
            aria-label="Go to Program"
            className="text-white hover:text-yellow-300" // Change color on hover
            onClick={handleClick("Program clicked")}
          >
            Program
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
