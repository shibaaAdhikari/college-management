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
    <nav className="flex-none w-[20%] text-white flex  pt-20 bg-secondary">
      <div className="flex-1 p-4 background">
        <div className=" mb-4 flex flex-col items-start justify-between">
          <Link
            to="/"
            aria-label="Homepage"
            className="text-white hover:text-yellow-300 flex items-center "
            onClick={handleClick("Attendance clicked")}
          >
            Attendance
            <IoIosArrowDown 
              className="ml-2 cursor-pointer"
              onClick={toggleDropdown('attendance')}
            />
          </Link>
          {dropdownOpen === 'attendance' && (
            <div className=" mt-2 w-48  text-white shadow-lg rounded-lg">
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
        
        <div className=" mb-4 flex flex-col items-start justify-between">
          <Link
            to="/program"
            aria-label="Go to Program"
            className="text-white hover:text-yellow-300 flex items-center  "
            onClick={handleClick("Program clicked")}
          >
            Program
            <IoIosArrowDown 
              className="ml-2 cursor-pointer"
              onClick={toggleDropdown('program')}
            />
          </Link>
          {dropdownOpen === 'program' && (
            <div className="left-0 mt-2 w-48  text-white shadow-lg rounded-lg">
              <Link
                to="/program/option1"
                className="block px-4 py-2  hover:bg-gray-600"
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
