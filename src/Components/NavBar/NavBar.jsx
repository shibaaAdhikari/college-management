import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosMenu, IoIosHome, IoIosSchool, IoIosPeople, IoIosBook } from 'react-icons/io';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher, GiBookshelf } from 'react-icons/gi';
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
        className={`fixed inset-y-0 left-0 bg-secondary text-white flex flex-col  z-40 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}
      >
        <div
          className={`flex hover:cursor-pointer bg-yellow-400 hover:opacity-80  p-4 ${isSidebarOpen ? 'justify-end ' : 'justify-center'}`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <RxCross1 className="w-8 h-8" />
          ) : (
            <IoIosMenu className="w-8 h-8" />
          )}
        </div>

        <div className="flex-1 p-4">
          {/* Home */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/"
                aria-label="Homepage"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Home clicked")}
              >
                 <IoIosHome className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Home'}
               
              </Link>
            </div>
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
                 <IoIosSchool className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Program'}
               
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 mr-2 ${dropdownOpen === 'program' ? 'rotate-180' : ''} transition-transform duration-300 cursor-pointer`}
                  onClick={toggleDropdown('program')}
                />
              )}
            </div>
            {dropdownOpen === 'program' && isSidebarOpen && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/program/classShift"
                  className="block px-3 py-2 hover:bg-gray-600"
                  onClick={handleClick("Add Class Shift clicked")}
                >
                  Add Class Shift
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
                   <IoIosPeople className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Student'}
             
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 mr-2 ${dropdownOpen === 'student' ? 'rotate-180' : ''} transition-transform duration-300 cursor-pointer`}
                  onClick={toggleDropdown('student')}
                />
              )}
            </div>
            {dropdownOpen === 'student' && isSidebarOpen && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/student/addStudent"
                  className="block px-3 py-2 hover:bg-gray-600"
                  onClick={handleClick("Add Student clicked")}
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
                  <GiTeacher className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Teacher'}
              
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 mr-2 ${dropdownOpen === 'teacher' ? 'rotate-180' : ''} transition-transform duration-300 cursor-pointer`}
                  onClick={toggleDropdown('teacher')}
                />
              )}
            </div>
            {dropdownOpen === 'teacher' && isSidebarOpen && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/teacher/addTeacher"
                  className="block px-3 py-2 hover:bg-gray-600"
                  onClick={handleClick("Add Teacher clicked")}
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
                  <SiGoogleclassroom className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Periodic'}
              
              </Link>
            </div>
          </div>

          {/* Library */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/library"
                aria-label="Go to Library"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Library clicked")}
              >
                 <GiBookshelf className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Library'}
               
              </Link>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`w-6 h-6 mr-2 ${dropdownOpen === 'library' ? 'rotate-180' : ''} transition-transform duration-300 cursor-pointer`}
                  onClick={toggleDropdown('library')}
                />
              )}
            </div>
            {dropdownOpen === 'library' && isSidebarOpen && (
              <div className="w-full text-white shadow-lg rounded-lg mt-2">
                <Link
                  to="/library/addBook"
                  className="block px-3 py-2 hover:bg-gray-600"
                  onClick={handleClick("Add Book clicked")}
                >
                  Add Book
                </Link>
                <Link
                  to="/library/booklist"
                  className="block px-3 py-2 hover:bg-gray-600"
                  onClick={handleClick("Book List clicked")}
                >
                  Book List
                </Link>
              </div>
            )}
          </div>

          {/* Book Issue */}
          <div className="mb-4 flex flex-col items-start">
            <div className="flex items-center w-full justify-between">
              <Link
                to="/bookissue"
                aria-label="Go to Book Issue"
                className="text-white hover:text-yellow-300 flex items-center text-lg md:text-2xl"
                onClick={handleClick("Book Issue clicked")}
              >
            
                <IoIosBook className={`w-6 h-6 mr-2 ${isSidebarOpen ? 'block' : 'inline-block'}`} />
                {isSidebarOpen && 'Book Issue'}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
