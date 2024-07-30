// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Attendance from './Pages/Attendance/Attendance';
import TopBar from './Components/NavBar/TopBar';
import Program from './Pages/Program/Program';
import Student from "./Pages/Student/Student";
import AddStudent from './Pages/Student/AddStudent';
import Teacher from './Pages/Teacher/Teacher';
import AddTeacher from './Pages/Teacher/AddTeacher';


function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <NavBar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <TopBar />
        {/* Routes */}
        <div className="flex-1 p-4 overflow-auto bg-ternary">
          <Routes>
            <Route path="/" element={<Attendance />} />
            <Route path="/program" element={<Program />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/addStudent" element={<AddStudent />} />
            <Route path="/Teacher" element={<Teacher />} />
            <Route path="/teacher/addTeacher" element={<AddTeacher />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
