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
    <nav className="w-full md:w-[20%] text-white flex flex-col md:flex-row pt-20 bg-secondary">
      <div className="flex-1 p-4 background">
        <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center w-full justify-between">
            <Link
              to="/"
              aria-label="Homepage"
              className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
              onClick={handleClick("Attendance clicked")}
            >
              Attendance
            </Link>
            <IoIosArrowDown 
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'attendance' ? 'rotate-180' : ''} transition-transform duration-300`}
              onClick={toggleDropdown('attendance')}
            />
          </div>
          {dropdownOpen === 'attendance' && (
            <div className="w-full text-white shadow-lg rounded-lg mt-2">
              <Link
                to="/attendance/option1"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 1 clicked")}
              >
                Option 1
              </Link>
              <Link
                to="/attendance/option2"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 2 clicked")}
              >
                Option 2
              </Link>
              <Link
                to="/attendance/option3"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Attendance Option 3 clicked")}
              >
                Option 3
              </Link>
            </div>
          )}
        </div>
        {/* program */}
        <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center w-full justify-between">
            <Link
              to="/program"
              aria-label="Go to Program"
              className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
              onClick={handleClick("Program clicked")}
            >
              Program
            </Link>
            <IoIosArrowDown 
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'program' ? 'rotate-180' : ''} transition-transform duration-300`}
              onClick={toggleDropdown('program')}
            />
          </div>
          {dropdownOpen === 'program' && (
            <div className="w-full text-white shadow-lg rounded-lg mt-2">
              <Link
                to="/program/addProgram"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 1 clicked")}
              >
                Add Program
              </Link>
              <Link
                to="/program/deleteProgram"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 2 clicked")}
              >
                Delete Program
              </Link>
              <Link
                to="/program/updateProgram"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("Program Option 3 clicked")}
              >
                Update Program
              </Link>
            </div>
          )}
        </div>
        {/* student */}
          <div className="mb-4 flex flex-col items-start">
          <div className="flex items-center w-full justify-between">
            <Link
              to="/student"
              aria-label="Go to Program"
              className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
              onClick={handleClick("Program clicked")}
            >
              Student
            </Link>
            <IoIosArrowDown 
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'student' ? 'rotate-180' : ''} transition-transform duration-300`}
              onClick={toggleDropdown('student')}
            />
          </div>
          {dropdownOpen === 'student' && (
            <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                to="/student/addStudent"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("student Option 1 clicked")}
              >
                  Add student
              </Link>
              <Link
                to="/student/deleteStudent"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("student Option 1 clicked")}
              >
                  Delete student
              </Link>
              <Link
                to="/student/updatestudent"
                className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                onClick={handleClick("student Option 3 clicked")}
              >
                Update student
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
