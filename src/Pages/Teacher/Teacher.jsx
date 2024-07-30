import React from 'react'
import { useState } from 'react';

const Teacher = () => {
  const [editingTeacher, setEditingTeacher] = useState(null);
  return (
    <>
  <div className="flex flex-col items-center justify-center bg-ternary mt-24">
            <div className="w-full max-w-8xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Teacher List</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">F-Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">L-Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DoB</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap"></td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    </tbody>
                </table>
                {/* <div className="flex justify-between items-center mt-4">
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
                </div> */}
            </div>
            {editingTeacher && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Id</label>
                                <input
                                    type="text"
                                    name="student_id"
                                    className="border border-gray-300 rounded p-2 w-full"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Gender</label>
                                <select
                                    name="gender"
                                    className="border border-gray-300 rounded p-2 w-full"
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Program ID</label>
                                <input
                                    type="text"
                                    name="program_id"
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default Teacher