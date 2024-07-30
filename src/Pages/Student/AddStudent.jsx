import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addStudent } from '../../redux/slice/student';
import { getProgram } from '../../redux/slice/program';
import { toast } from 'react-toastify';

const AddStudent = () => {
    const dispatch = useDispatch();
    const programs = useSelector((state) => state.programs.programs); 
    const [studentDetails, setStudentDetails] = useState({
        fname: '',
        lname: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        date_of_birth: '',
        program_id: '',
        image: null,
        status: true
    });

    useEffect(() => {
        dispatch(getProgram());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setStudentDetails({
            ...studentDetails,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setStudentDetails({
            ...studentDetails,
            image: file
        });
    };

    const handleAddStudent = () => {
        const formData = new FormData();
        for (const key in studentDetails) {
            formData.append(key, studentDetails[key]);
        }
        dispatch(addStudent(formData));
        toast.success("Student added successfully");
    };

    return (
        <div className="flex flex-col items-center justify-center bg-ternary mt-24">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Student</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: 'First Name', name: 'fname', type: 'text' },
                        { label: 'Last Name', name: 'lname', type: 'text' },
                        { label: 'Gender', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Phone', name: 'phone', type: 'tel' },
                        { label: 'Address', name: 'address', type: 'text' },
                        { label: 'Password', name: 'password', type: 'password' },
                        { label: 'Date of Birth', name: 'date_of_birth', type: 'date' },
                        { label: 'Program', name: 'program_id', type: 'select', options: programs }
                    ].map((field) => (
                        <div className="mb-4" key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            {field.type === 'select' ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={studentDetails[field.name]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select {field.label}</option>
                                    {field.options.map((option) => (
                                        <option key={option.program_id || option} value={option.program_id || option}>
                                            {option.name || option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={studentDetails[field.name]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            )}
                        </div>
                    ))}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <input
                        type="checkbox"
                        id="status"
                        name="status"
                        checked={studentDetails.status}
                        onChange={handleChange}
                        className="mt-1"
                    />
                </div>
                <button
                    onClick={handleAddStudent}
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                >
                    Add Student
                </button>
            </div>
        </div>
    );
};

export default AddStudent;
