// src/App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Attendance from './Pages/Attendance/Attendance';
import TopBar from './Components/NavBar/TopBar';
import Program from './Pages/Program';


function App() {
  return (
    <>
    <TopBar/>
      <div className="flex min-h-screen">
      <NavBar />
      <main className="flex-1 bg-black p-4"> {/* Content area */}
        <Routes>
          <Route path="/" element={<Attendance />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </main>
    </div>
    </>
 
  );
}

export default App;
