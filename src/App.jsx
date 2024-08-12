import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import TopBar from './Components/NavBar/TopBar';
import Attendance from './Pages/Attendance/Attendance';
import Program from './Pages/Program/Program';
import Student from "./Pages/Student/Student";
import AddStudent from './Pages/Student/AddStudent';
import Teacher from './Pages/Teacher/Teacher';
import AddTeacher from './Pages/Teacher/AddTeacher';
import Periodic from './Pages/Periodic/Periodic';
import ProgramShift from './Pages/Program/ProgramShift';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-54' : 'w-10'}`}>
        <NavBar toggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-5'}`}>
        {/* Topbar */}
        <TopBar />
        {/* Routes */}
        <div className="flex-1 p-4 overflow-auto bg-ternary">
          <Routes>
            <Route path="/" element={<Attendance />} />
            <Route path="/program" element={<Program />} />
            <Route path="/program/classShift" element={<ProgramShift />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/addStudent" element={<AddStudent />} />
            <Route path="/Teacher" element={<Teacher />} />
            <Route path="/teacher/addTeacher" element={<AddTeacher />} />
            <Route path="/periodic" element={<Periodic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
