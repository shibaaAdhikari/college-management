// src/App.js
import { Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Attendance from './Pages/Attendance/Attendance';
import TopBar from './Components/NavBar/TopBar';
import Program from './Pages/Program/Program';
import AddProgram from './Pages/Program/AddProgram';
import DeleteProgram from './Pages/Program/DeleteProgram';
import UpdateProgram from './Pages/Program/UpdateProgram';
import Student from "./Pages/Student/Student"
import AddStudent from './Pages/Student/AddStudent';
import DeleteStudent from './Pages/Student/DeleteStudent';


function App() {
  return (
    <>
    <TopBar/>
      <div className="flex min-h-screen">
      <NavBar />
      <main className="flex-1 bg-black p-4">
        <Routes>
          <Route path="/" element={<Attendance />} />
          <Route path="/program" element={<Program />} />
          <Route path="/program/addProgram" element={<AddProgram />} />
          <Route path="/program/deleteProgram" element={<DeleteProgram />} />
          <Route path="/program/updateProgram" element={<UpdateProgram />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/addStudent" element={<AddStudent />} />
          <Route path="/student/deleteStudent" element={<DeleteStudent />} />
        </Routes>
      </main>
    </div>
    </>
 
  );
}

export default App;
