import React, { useState, useEffect } from 'react';
import { addProgram, getProgram, editProgram, deleteProgram } from '../../redux/slice/program';
import { useDispatch, useSelector } from 'react-redux';

const Program = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs.programs);
  const status = useSelector((state) => state.programs.status);
  const error = useSelector((state) => state.programs.error);
  const [programName, setProgramName] = useState('');
  const [editingProgram, setEditingProgram] = useState(null);
  const [editedProgramName, setEditedProgramName] = useState('');

  useEffect(() => {
    dispatch(getProgram());
  }, [dispatch]);

  const handleAddProgram = () => {
    if (programName.trim()) {
      dispatch(addProgram({ name: programName }))
        .unwrap()
        .then(() => {
          setProgramName('');
          dispatch(getProgram());
        })
        .catch((error) => {
          console.error('Failed to add program:', error);
        });
    }
  };

  const handleEditClick = (program) => {
    setEditingProgram(program);
    setEditedProgramName(program.name);
  };

  const handleSaveEdit = () => {
    if (editedProgramName.trim()) {
      dispatch(editProgram({ programId: editingProgram.program_id, programDetails: { name: editedProgramName } }))
        .unwrap()
        .then(() => {
          setEditingProgram(null);
          setEditedProgramName('');
          dispatch(getProgram());
        })
        .catch((error) => {
          console.error('Failed to edit program:', error);
        });
    }
  };

  const handleCancelEdit = () => {
    setEditingProgram(null);
    setEditedProgramName('');
  };

  const handleDeleteClick = (programId) => {
    dispatch(deleteProgram(programId))
      .unwrap()
      .then(() => {
        dispatch(getProgram());
      })
      .catch((error) => {
        console.error('Failed to delete program:', error);
      });
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

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

        {editingProgram && (
          <div className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Edit Program</h2>
            <input
              type='text'
              value={editedProgramName}
              onChange={(e) => setEditedProgramName(e.target.value)}
              placeholder='Edit Program Name'
              className='border p-2 rounded mr-2'
            />
            <button
              onClick={handleSaveEdit}
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                font-semibold
                py-2
                px-4
                rounded
                mr-2
                transition
                duration-300
                ease-in-out
              "
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="
                bg-gray-500
                hover:bg-gray-600
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
              Cancel
            </button>
          </div>
        )}

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
              {programs.map((program) => (
                <tr key={program.id}>
                  <td className='border-b px-4 py-2 text-left'>{program.program_id}</td>
                  <td className='border-b px-4 py-2 text-left'>{program.name}</td>
                  <td className='border-b px-4 py-2'>
                    <button
                      onClick={() => handleEditClick(program)}
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
                      onClick={() => handleDeleteClick(program.program_id)}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Program;
