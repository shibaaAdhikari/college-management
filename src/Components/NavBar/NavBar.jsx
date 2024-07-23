import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleClick = (message) => () => {
    console.log(message);
  };

  const toggleDropdown = (dropdown) => () => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <nav className="flex-none w-[20%] text-white flex pt-20 bg-secondary">
      <div className="flex-1 p-4 background">
        <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center w-full justify-between">
            <Link
              to="/"
              aria-label="Homepage"
              className="text-white hover:text-yellow-300 flex items-center text-2xl"
              onClick={handleClick("Attendance clicked")}
            >
              Attendance
            </Link>
            <IoIosArrowDown 
              className={`cursor-pointer ${dropdownOpen === 'attendance' ? 'rotate-180' : ''} transition-transform duration-300`}
              onClick={toggleDropdown('attendance')}
            />
          </div>
          {dropdownOpen === 'attendance' && (
            <div className="w-full text-white shadow-lg rounded-lg mt-2">
              <Link
                to="/attendance/option1"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 1 clicked")}
              >
                Option 1
              </Link>
              <Link
                to="/attendance/option2"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 2 clicked")}
              >
                Option 2
              </Link>
              <Link
                to="/attendance/option3"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 3 clicked")}
              >
                Option 3
              </Link>
            </div>
          )}
        </div>
        
        <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center w-full justify-between">
            <Link
              to="/program"
              aria-label="Go to Program"
              className="text-white hover:text-yellow-300 flex items-center text-2xl"
              onClick={handleClick("Program clicked")}
            >
              Program
            </Link>
            <IoIosArrowDown 
              className={`cursor-pointer ${dropdownOpen === 'program' ? 'rotate-180' : ''} transition-transform duration-300`}
              onClick={toggleDropdown('program')}
            />
          </div>
          {dropdownOpen === 'program' && (
            <div className="w-full text-white shadow-lg rounded-lg mt-2">
              <Link
                to="/program/option1"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 1 clicked")}
              >
                Option 1
              </Link>
              <Link
                to="/program/option2"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 2 clicked")}
              >
                Option 2
              </Link>
              <Link
                to="/program/option3"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 3 clicked")}
              >
                Option 3
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
