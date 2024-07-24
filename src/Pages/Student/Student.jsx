import React, { useState, useEffect } from 'react';

const studentsData = [
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    { id: 1, fullName: 'John Doe', gender: 'Male', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', date_of_birth: '2000-01-01', program_id: 1 },
    // Add more mock student data as needed
];

const Student = () => {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10;

    useEffect(() => {
        // Fetch student data from API or use mock data
        setStudents(studentsData);
    }, []);

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Student List</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program ID</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentStudents.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.fullName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.gender}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.date_of_birth}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.program_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                    <div>Total Students: {students.length}</div>
                    <nav>
                        <ul className="inline-flex -space-x-px">
                            {Array.from({ length: Math.ceil(students.length / studentsPerPage) }, (_, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => paginate(i + 1)}
                                        className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Student;
