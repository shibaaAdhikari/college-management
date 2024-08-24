import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import TopBar from './Components/NavBar/TopBar';
import Home from './Pages/Home/Home';
// import Attendance from './Pages/Attendance/Attendance';
import Program from './Pages/Program/Program';
import Student from "./Pages/Student/Student";
import AddStudent from './Pages/Student/AddStudent';
import Teacher from './Pages/Teacher/Teacher';
import AddTeacher from './Pages/Teacher/AddTeacher';
import Periodic from './Pages/Periodic/Periodic';
import ProgramShift from './Pages/Program/ProgramShift';
import Addbook from './Pages/Library/Addbook';
import Booklist from './Pages/Library/Booklist';
import BookIssue from './Pages/BookIssued/BookIssue';
import Login from './Pages/Login/Login';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/'); // Redirect to the dashboard after login
  };

  const isLoginPage = location.pathname === '/login' || !isLoggedIn;

  return (
    <div className={`flex h-screen ${isLoginPage ? 'bg-gray-100' : ''}`}>
      {/* Render only the login page without sidebar and topbar */}
      {isLoginPage ? (
        <div className="flex justify-center items-center w-full h-full">
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          {/* Sidebar */}
          <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
            <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
          </div>

          {/* Main content area */}
          <div className={`flex flex-col flex-1 transition-all duration-300 `}>
            {/* Topbar */}
            <TopBar />

            {/* Routes */}
            <div className="flex-1 p-4 overflow-auto bg-ternary">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/program" element={<Program />} />
                <Route path="/program/classShift" element={<ProgramShift />} />
                <Route path="/student" element={<Student />} />
                <Route path="/student/addStudent" element={<AddStudent />} />
                <Route path="/Teacher" element={<Teacher />} />
                <Route path="/teacher/addTeacher" element={<AddTeacher />} />
                <Route path="/periodic" element={<Periodic />} />
                <Route path="/library/addBook" element={<Addbook />} />
                <Route path="/library/booklist" element={<Booklist />} />
                <Route path="/book" element={<BookIssue />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
