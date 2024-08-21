import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeacher, updateTeacher,deleteTeacher } from '../../redux/slice/teacher';

const Teacher = () => {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teachers.teachers);
    const status = useSelector((state) => state.teachers.status);
    const [currentPage, setCurrentPage] = useState(1);
    const [editingTeacher, setEditingTeacher] = useState(null);
    const teachersPerPage = 10;

    useEffect(() => {
        dispatch(getTeacher());
    }, [dispatch]);

    const indexOfLastTeacher = currentPage * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
    const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = (teacher) => {
        setEditingTeacher(teacher);
    };

    const handleSave = async () => {
        try {
            const teacherDetails = {
                fname: editingTeacher.fname,
                lname: editingTeacher.lname,
                gender: editingTeacher.gender,
                email: editingTeacher.email,
                phone: editingTeacher.phone,
                address: editingTeacher.address,
                date_of_birth: editingTeacher.date_of_birth,
                education: editingTeacher.education,
                specialization: editingTeacher.specialization,
                in_time: editingTeacher.in_time,
                out_time: editingTeacher.out_time,
                working_hour: editingTeacher.working_hour,
            };

            await dispatch(updateTeacher({ teacherId: editingTeacher.teacher_id, teacherDetails }));
            toast.success('Teacher updated successfully');
            setEditingTeacher(null);
        } catch (error) {
            console.error('Error updating teacher:', error);
            toast.error('Error updating teacher');
        }
    };

    const handleDelete = async (teacherId) => {
        try {
            await dispatch(deleteTeacher(teacherId)).unwrap(); 
            toast.success('Teacher deleted successfully');
        } catch (error) {
            console.error('Error deleting teacher:', error);
            toast.error('Error deleting teacher');
        }
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEditingTeacher({
            ...editingTeacher,
            [name]: value,
        });
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading teachers.</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center bg-ternary mt-24 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-full bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Teacher List</h2>
                <table className="w-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DoB</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In-time</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Out-time</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working Hours</th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentTeachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.fname} {teacher.lname}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.gender}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.email}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.phone}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.address}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.date_of_birth}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.education}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.specialization}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.in_time}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.out_time}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">{teacher.working_hour}</td>
                                <td className="px-2 py-4 text-sm text-gray-500">
                                    <button
                                        onClick={() => handleEdit(teacher)}
                                        className="text-blue-500 hover:text-blue-700 mr-2 text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(teacher.teacher_id)}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
                    <div className="text-sm">Total Teachers: {teachers.length}</div>
                    <nav className="mt-2 sm:mt-0">
                        <ul className="inline-flex -space-x-px">
                            {Array.from({ length: Math.ceil(teachers.length / teachersPerPage) }, (_, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => paginate(i + 1)}
                                        className={`px-3 py-1 text-sm leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            {editingTeacher && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg p-4 sm:p-8 w-full max-w-md sm:max-w-2xl">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">Edit Teacher</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <label className="block text-gray-700">Id</label>
                                <input
                                    type="text"
                                    name="id"
                                    value={editingTeacher.teacher_id}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    readOnly
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    value={editingTeacher.fname}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    value={editingTeacher.lname}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={editingTeacher.gender}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editingTeacher.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={editingTeacher.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={editingTeacher.address}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    value={editingTeacher.date_of_birth}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Education</label>
                                <input
                                    type="text"
                                    name="education"
                                    value={editingTeacher.education}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={editingTeacher.specialization}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">In-time</label>
                                <input
                                    type="time"
                                    name="in_time"
                                    value={editingTeacher.in_time}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Out-time</label>
                                <input
                                    type="time"
                                    name="out_time"
                                    value={editingTeacher.out_time}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700">Working Hours</label>
                                <input
                                    type="text"
                                    name="working_hour"
                                    value={editingTeacher.working_hour}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditingTeacher(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Teacher;
