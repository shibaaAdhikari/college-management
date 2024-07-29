import React, { useState } from 'react';
import { addProgram } from '../../redux/slice/program';
import { useDispatch } from 'react-redux';

const Program = () => {

  const[programName,setProgramName]=useState('');
  const dispatch = useDispatch();
  
  const handleAddProgram = () => {
    if (programName.trim()) {
      dispatch(addProgram({ name: programName }))
        .unwrap()
        .then(() => {
          setProgramName('');
        })
        .catch((error) => {
          console.error('Failed to add program:', error);
        });
    }
  };
  return (
    <>
      <div className='mt-24 p-4'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>Add Program</h2>
          <input
            type='text'
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            placeholder='New Program Name'
            className='border p-2 rounded mr-2'
          />
          <button
            onClick={handleAddProgram}
            className="
              bg-secondary
              hover:bg-indigo-800
              text-white
              font-semibold
              py-2
              px-4
              rounded
              transition
              duration-300
              ease-in-out
            "
          >
            Add Program
          </button>
        </div>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>Program List</h2>
          <table className='w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border-b px-4 py-2 text-left'>ID</th>
                <th className='border-b px-4 py-2 text-left'>Name</th>
                <th className='border-b px-4 py-2 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-b px-4 py-2 text-left'>1</td>
                <td className='border-b px-4 py-2 text-left'>BCA</td>
                <td className='border-b px-4 py-2'>
                  <button
                    className="
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      font-semibold
                      py-1
                      px-2
                      rounded
                      mr-2
                      transition
                      duration-300
                      ease-in-out
                    "
                  >
                    Edit
                  </button>
                  <button
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      font-semibold
                      py-1
                      px-2
                      rounded
                      transition
                      duration-300
                      ease-in-out
                    "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Program;
