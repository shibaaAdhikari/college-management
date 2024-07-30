import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeacher } from '../../redux/slice/teacher';

const AddTeacher = () => {
  const dispatch = useDispatch();
  const [teacherDetails, setTeacherDetails] = useState({
    fname: '',
    lname: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    date_of_birth: '',
    education: '',
    specialization: '',
    in_time: '',
    working_hour: ''
  });

  const handleAddTeacher = () => {
    const formData = new FormData();
    for (const key in teacherDetails) {
        formData.append(key, teacherDetails[key]);
    }
    dispatch(addTeacher(formData));
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeacherDetails({
        ...teacherDetails,
        [name]: type === 'checkbox' ? checked : value
    });
};
  return (
    <div className="flex flex-col items-center justify-center bg-ternary mt-24">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Teacher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            [{ label: 'First Name', name: 'fname', type: 'text' },
            { label: 'Last Name', name: 'lname', type: 'text' },
            { label: 'Gender', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'email', type: 'password' },
            { label: 'Phone', name: 'phone', type: 'tel' },
            { label: 'Address', name: 'address', type: 'text' },
            { label: 'Date of Birth', name: 'date_of_birth', type: 'date' },
            { label: 'Education', name: 'education', type: 'text' },
            { label: 'Specializaton', name: 'specialization', type: 'text' },
            { label: 'in_time', name: 'in_time', type: 'time' },
            { label: 'working_hour', name: 'working_hour', type: 'text' },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={teacherDetails[field.name]}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option) => (
                      <option key={option.teacher_id || option} value={option.teacher_id || option}>
                        {option.name || option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={teacherDetails[field.name]}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                )}
              </div>

            ))


          }
        </div>
        <button
          onClick={handleAddTeacher}
          className="w-full py-2 px-4 bg-secondary text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
        >
          Add Teacher
        </button>
      </div>
    </div>
  )
}

export default AddTeacher