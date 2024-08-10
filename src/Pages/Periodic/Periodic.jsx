import React, { useState, useEffect } from 'react';
import { addPeriodic, getPeriodic, editPeriodic , deletePeriodic } from '../../redux/slice/periodic';
import { useDispatch, useSelector } from 'react-redux';

const Periodic = () => {
  const dispatch = useDispatch();
  const periodics = useSelector((state) => state.periodics.periodics || []);
  const status = useSelector((state) => state.periodics.status);
  const error = useSelector((state) => state.periodics.error);
  const [periodicName, setPeriodicName] = useState('');
  const [editingPeriodic, setEditingPeriodic] = useState(null);
  const [editedPeriodicName, setEditedPeriodicName] = useState('');

  useEffect(() => {
    dispatch(getPeriodic());
  }, [dispatch]);

  const handleAddPeriodic = () => {
    if (periodicName.trim()) {
      dispatch(addPeriodic({ name: periodicName }))
        .unwrap()
        .then(() => {
          setPeriodicName(''); // Reset the input field
          dispatch(getPeriodic());
        })
        .catch((error) => {
          console.error('Failed to add Periodic:', error);
        });
    }
  };
  

  const handleEditClick = (periodic) => {
    setEditingPeriodic(periodic);
    setEditedPeriodicName(periodic.name);
  };

  const handleSaveEdit = () => {
    if (editedPeriodicName.trim()) {
      dispatch(editPeriodic({ id: editingPeriodic.id, details: { name: editedPeriodicName } }))
        .unwrap()
        .then(() => {
          setEditingPeriodic(null);
          setEditedPeriodicName('');
        })
        .catch((error) => {
          console.error('Failed to edit Periodic:', error);
        });
    }
  };

  const handleCancelEdit = () => {
    setEditingPeriodic(null);
    setEditedPeriodicName('');
  };
  const handleDeleteClick = (periodicId) => {
    dispatch(deletePeriodic(periodicId))
      .unwrap()
      .then(() => {
        dispatch(getPeriodic());
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
      <div className='mt-4 p-4'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>Add Periodic</h2>
          <input
            type='text'
            value={periodicName}
            onChange={(e) => setPeriodicName(e.target.value)}
            placeholder='New Periodic Name'
            className='border p-2 rounded mr-2'
          />
          <button
            onClick={handleAddPeriodic}
            className="bg-secondary hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Add Periodic
          </button>
        </div>

        {editingPeriodic && (
          <div className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Edit Periodic</h2>
            <input
              type='text'
              value={editedPeriodicName}
              onChange={(e) => setEditedPeriodicName(e.target.value)}
              placeholder='Edit Periodic Name'
              className='border p-2 rounded mr-2'
            />
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        )}

        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>Periodic List</h2>
          <table className='w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border-b px-4 py-2 text-left'>ID</th>
                <th className='border-b px-4 py-2 text-left'>Name</th>
                <th className='border-b px-4 py-2 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {periodics.map((periodic) => (
                <tr key={periodic.id}>
                  <td className='border-b px-4 py-2 text-left'>{periodic.periodic_id}</td>
                  <td className='border-b px-4 py-2 text-left'>{periodic.name}</td>
                  <td className='border-b px-4 py-2'>
                    <button
                      onClick={() => handleEditClick(periodic)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded mr-2 transition duration-300 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(periodic.periodic_id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded transition duration-300 ease-in-out"
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

export default Periodic;
