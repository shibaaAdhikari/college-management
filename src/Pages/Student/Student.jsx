import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../redux/slice/student';

const Student = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.students);
    const status = useSelector((state) => state.students.status);
    const [currentPage, setCurrentPage] = useState(1);
    const [editingStudent, setEditingStudent] = useState(null);
    const studentsPerPage = 10;

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const handleSave = () => {
        // Add logic to save the student updates (e.g., dispatch an update action)
        setEditingStudent(null);
    };

    const handleDelete = (id) => {
        // Add logic to delete the student (e.g., dispatch a delete action)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingStudent({ ...editingStudent, [name]: value });
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading students.</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center bg-ternary mt-24">
            <div className="w-full max-w-8xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Student List</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentStudents.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{student.roll_no}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.fname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.lname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.gender}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.date_of_birth}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student.program_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleEdit(student)}
                                        className="text-blue-500 hover:text-blue-700 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
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
            {editingStudent && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={editingStudent.firstName}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={editingStudent.lastName}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={editingStudent.gender}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editingStudent.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={editingStudent.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={editingStudent.address}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    value={editingStudent.date_of_birth}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Program ID</label>
                                <input
                                    type="text"
                                    name="program_id"
                                    value={editingStudent.program_id}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setEditingStudent(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Student;
