import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample data for Bar Chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Total Students',
      data: [4000, 3000, 5000, 2000],
      backgroundColor: '#facc15', // Vivid orange
      borderColor: '#facc15',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Student Enrollment by Month',
      font: {
        size: 20,
      },
    },
  },
};

const Home = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="p-6 space-y-6 bg-[#17153B] min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-extrabold text-[#fff]">Dashboard</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Students Card */}
        <div className="bg-[#fff] p-6 shadow-lg rounded-lg text-[#40534C] flex flex-col items-center">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-4xl font-bold mt-2">1,250</p>
        </div>

        {/* Event Calendar */}
        <div className="bg-[#fff] p-6 shadow-lg rounded-lg text-[#40534C]">
          <h2 className="text-xl font-semibold mb-4">Event Calendar</h2>
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>

        {/* Notifications */}
        <div className="bg-[#fff] p-6 shadow-lg rounded-lg text-[#333]">
          <h2 className="text-xl font-semibold mb-4 text-[#40534C]">Notifications</h2>
          <p className="mb-4">You have 3 new notifications.</p>
          <button className="px-4 py-2 bg-[#333992] text-white rounded hover:bg-[#335992] transition">View All</button>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#6590c97c] p-6 shadow-lg rounded-lg text-white">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="list-disc ml-5">
            <li>Added new class shift schedule.</li>
            <li>Updated student details.</li>
          </ul>
        </div>

        {/* Bar Chart */}
        <div className="bg-[#FFF] p-6 shadow-lg rounded-lg col-span-1 md:col-span-3">
          <h2 className="text-xl font-semibold mb-4 text-[#40534C]">Student Enrollment</h2>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Home;
