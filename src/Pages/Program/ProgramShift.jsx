import React, { useState, useEffect } from 'react';
import { addShift, getShift, editShift,deleteShift } from '../../redux/slice/classShift';
import { useDispatch, useSelector } from 'react-redux';

const ProgramShift = () => {
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shifts.shifts || []); 
  const [shift, setShift] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const [errors, setErrors] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [editingShift, setEditingShift] = useState(null);
  const [editedShiftName, setEditedShiftName] = useState('');
  const [editedInTime, setEditedInTime] = useState('');
  const [editedOutTime, setEditedOutTime] = useState('');

  useEffect(() => {
    dispatch(getShift())
  }, [dispatch]);

  const handleAddShift = () => {
    const newErrors = {};
    if (!shift.trim()) newErrors.shift = 'Shift name is required.';
    if (!inTime) newErrors.inTime = 'In time is required.';
    if (!outTime) newErrors.outTime = 'Out time is required.';

    if (Object.keys(newErrors).length) {
      setFormErrors(newErrors);
      return;
    }

    dispatch(addShift({ name: shift, in_time: inTime, out_time: outTime })) 
      .unwrap()
      .then(() => {
        setShift('');
        setInTime('');
        setOutTime('');
        setErrors({});
        setFormErrors({});
      })
      .catch((error) => {
        console.error('Failed to add shift:', error);
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      });
  };

  const handleEditClick = (shift) => {
    setEditingShift(shift);
    setEditedShiftName(shift.name);
    setEditedInTime(shift.in_time);
    setEditedOutTime(shift.out_time);
  };

  const handleSaveEdit = () => {
    if (!editedShiftName.trim()) {
      setErrors({ name: 'Shift name is required.' });
      return;
    }
    if (!editedInTime || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(editedInTime)) {
      setErrors({ inTime: 'In time is required and must be in H:i format.' });
      return;
    }
    if (!editedOutTime || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(editedOutTime)) {
      setErrors({ outTime: 'Out time is required and must be in H:i format.' });
      return;
    }
  
    dispatch(editShift({ 
      classShift_id: editingShift.classShift_id,
      name: editedShiftName,
      in_time: editedInTime,
      out_time: editedOutTime
    }))
      .unwrap()
      .then(() => {
        setEditingShift(null);
        setEditedShiftName('');
        setEditedInTime('');
        setEditedOutTime('');
        setErrors({});
      })
      .catch((error) => {
        console.error('Failed to update shift:', error);
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      });
  };
  
  const handleDeleteShift = (classShift_id) => {
    if (window.confirm('Are you sure you want to delete this shift?')) {
      dispatch(deleteShift(classShift_id))
        .unwrap()
        .catch((error) => {
          console.error('Failed to delete shift:', error);
          if (error.response && error.response.data.errors) {
            setErrors(error.response.data.errors);
          }
        });
    }
  };

  const handleCancelEdit = () => {
    setEditingShift(null);
    setEditedShiftName('');
    setEditedInTime('');
    setEditedOutTime('');
    setErrors({});
  };

  return (
    <>
      <div className='mt-4 p-4 max-w-2xl'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold mb-2'>Add Class Shift</h2>
          <label className='block mb-2'>
            Shift Name:
            <input
              type='text'
              placeholder='Enter Class Shift'
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className='border p-2 rounded mr-2 block w-full'
            />
            {formErrors.shift && <div className='text-red-600'>{formErrors.shift}</div>}
          </label>
          <label className='block mb-2'>
            In Time:
            <input
              type='time'
              value={inTime}
              onChange={(e) => setInTime(e.target.value)}
              className='border p-2 rounded mr-2 block w-full'
            />
            {formErrors.inTime && <div className='text-red-600'>{formErrors.inTime}</div>}
          </label>
          <label className='block mb-2'>
            Out Time:
            <input
              type='time'
              value={outTime}
              onChange={(e) => setOutTime(e.target.value)}
              className='border p-2 rounded mr-2 block w-full'
            />
            {formErrors.outTime && <div className='text-red-600'>{formErrors.outTime}</div>}
          </label>
          <button
            onClick={handleAddShift}
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
            Add Class Shift
          </button>
        </div>
        {editingShift && (
          <div className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Edit Shift</h2>
            <label className='block mb-2'>
              Shift Name:
              <input
                type='text'
                value={editedShiftName}
                onChange={(e) => setEditedShiftName(e.target.value)}
                placeholder='Edit Shift Name'
                className='border p-2 rounded mr-2 block w-full'
              />
              {errors.name && <div className='text-red-600'>{errors.name}</div>}
            </label>
            <label className='block mb-2'>
              In Time:
              <input
                type='time'
                value={editedInTime}
                onChange={(e) => setEditedInTime(e.target.value)}
                className='border p-2 rounded mr-2 block w-full'
              />
              {errors.inTime && <div className='text-red-600'>{errors.inTime}</div>}
            </label>
            <label className='block mb-2'>
              Out Time:
              <input
                type='time'
                value={editedOutTime}
                onChange={(e) => setEditedOutTime(e.target.value)}
                className='border p-2 rounded mr-2 block w-full'
              />
              {errors.outTime && <div className='text-red-600'>{errors.outTime}</div>}
            </label>
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
          <h2 className='text-lg font-semibold mb-2'>Class Shift List</h2>
          <table className='w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border-b px-4 py-2 text-left'>Class Shift</th>
                <th className='border-b px-4 py-2 text-left'>In time</th>
                <th className='border-b px-4 py-2 text-left'>Out time</th>
                <th className='border-b px-4 py-2 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {shifts.length > 0 ? (
                shifts.map((shift) => (
                  <tr key={shift.classShift_id}>
                    <td className='border-b px-4 py-2 text-left'>{shift.name}</td>
                    <td className='border-b px-4 py-2 text-left'>{shift.in_time}</td>
                    <td className='border-b px-4 py-2 text-left'>{shift.out_time}</td>
                    <td className='border-b px-4 py-2'>
                      <button
                        onClick={() => handleEditClick(shift)}
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
                       onClick={() => handleDeleteShift(shift.classShift_id)}
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
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">No shifts available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProgramShift;
