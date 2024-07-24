import React, { useState } from 'react';

const DeleteStudent = () => {
    const [studentDetails, setStudentDetails] = useState({
        fullName: '',
        studentId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentDetails({
            ...studentDetails,
            [name]: value
        });
    };

    const handleDeleteStudent = () => {
        // Add your logic to handle deleting the student
        console.log('Student deleted:', studentDetails);
        // Clear the form after deleting
        setStudentDetails({
            fullName: '',
            studentId: ''
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Delete Student</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4 col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={studentDetails.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={studentDetails.studentId}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                </div>
                <button
                    onClick={handleDeleteStudent}
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                >
                    Delete Student
                </button>
            </div>
        </div>
    );
};

export default DeleteStudent;
