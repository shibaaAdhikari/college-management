import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosMenu, IoIosHome, IoIosSchool, IoIosPeople, IoIosBook } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

const NavBar = ({ toggleSidebar, isSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleClick = (message) => () => {
    console.log(message);
  };

  const toggleDropdown = (dropdown) => () => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <div className="relative h-screen">
      <nav
        className={`fixed inset-y-0 left-0 bg-secondary text-white flex flex-col pt-5 z-40 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div
          className={`flex hover:cursor-pointer hover:opacity-80 ${isSidebarOpen ? 'justify-end mr-5 md:justify-end md:mr-5' : 'justify-center mr-0'}`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <RxCross1 className="w-8 h-8" />
          ) : (
            <IoIosMenu className="w-8 h-8" />
          )}
        </div>

        <div className={`flex-1 p-4 ${isSidebarOpen ? '' : ''}`}>
          {/* Home */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/"
                aria-label="Homepage"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Attendance clicked")}
              >
                {isSidebarOpen ? 'Home' : <IoIosHome className="w-6 h-6" />}
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'home' ? 'rotate-180' : ''} transition-transform duration-300`}
                  onClick={toggleDropdown('home')}
                />
              )}
            </div>
            {dropdownOpen === 'home' && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/home/option1"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("home Option 1 clicked")}
                >
                  Option 1
                </Link>
                <Link
                  to="/home/option2"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("home Option 2 clicked")}
                >
                  Option 2
                </Link>
                <Link
                  to="/home/option3"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("home Option 3 clicked")}
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
                {isSidebarOpen ? 'Program' : <IoIosSchool className="w-6 h-6" />}
              </Link>
            </div>
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
                {isSidebarOpen ? 'Student' : <IoIosPeople className="w-6 h-6" />}
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'student' ? 'rotate-180' : ''} transition-transform duration-300`}
                  onClick={toggleDropdown('student')}
                />
              )}
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

          {/* Teacher */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/teacher"
                aria-label="Go to Teacher"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Teacher clicked")}
              >
                {isSidebarOpen ? 'Teacher' : <IoIosPeople className="w-6 h-6" />}
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'teacher' ? 'rotate-180' : ''} transition-transform duration-300`}
                  onClick={toggleDropdown('teacher')}
                />
              )}
            </div>
            {dropdownOpen === 'teacher' && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/teacher/addTeacher"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("Teacher Option 1 clicked")}
                >
                  Add Teacher
                </Link>
              </div>
            )}
          </div>

          {/* Periodic */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/periodic"
                aria-label="Go to Periodic"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Periodic clicked")}
              >
                {isSidebarOpen ? 'Periodic' : <IoIosBook className="w-6 h-6" />}
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${dropdownOpen === 'periodic' ? 'rotate-180' : ''} transition-transform duration-300`}
                  onClick={toggleDropdown('periodic')}
                />
              )}
            </div>
            {dropdownOpen === 'periodic' && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/periodic/option1"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("Periodic Option 1 clicked")}
                >
                  Option 1
                </Link>
                <Link
                  to="/periodic/option2"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("Periodic Option 2 clicked")}
                >
                  Option 2
                </Link>
                <Link
                  to="/periodic/option3"
                  className="block px-3 py-2 md:px-4 md:py-2 hover:bg-gray-600"
                  onClick={handleClick("Periodic Option 3 clicked")}
                >
                  Option 3
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
