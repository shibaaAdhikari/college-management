import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from 'react-icons/io';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (message) => () => {
    console.log(message);
  };

  const toggleDropdown = (dropdown) => () => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative h-screen">
      <div className="p-4 z-50 flex justify-end bg-yellow-500">
        {sidebarOpen ? (
          <IoIosClose
            className="text-yellow w-8 h-8 cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <IoIosMenu
            className="text-white w-8 h-8 cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </div>
      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 transform h-screen ${
          sidebarOpen ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'
        } md:relative md:w-[260px] md:translate-x-0 bg-secondary text-white flex flex-col pt-20 transition-transform duration-300 z-40`}
      >
        <button
          className="absolute top-0 left-0 md:hidden p-4 text-white z-50"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <IoIosClose className="w-8 h-8" /> : <IoIosMenu className="w-8 h-8" />}
        </button>
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
                className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${
                  dropdownOpen === 'attendance' ? 'rotate-180' : ''
                } transition-transform duration-300`}
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
          {/* Program */}
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
                className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${
                  dropdownOpen === 'program' ? 'rotate-180' : ''
                } transition-transform duration-300`}
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
          {/* Student */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/student"
                aria-label="Go to Student"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Student clicked")}
              >
                Student
              </Link>
              <IoIosArrowDown
                className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${
                  dropdownOpen === 'student' ? 'rotate-180' : ''
                } transition-transform duration-300`}
                onClick={toggleDropdown('student')}
              />
            </div>
            {dropdownOpen === 'student' && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/student/addStudent"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("Student Option 1 clicked")}
                >
                  Add Student
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
