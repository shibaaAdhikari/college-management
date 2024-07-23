// src/components/Program.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgram } from '../redux/slice/program';

const Program = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.program);

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data);
    }
  }, [data]);

  const handleButtonClick = () => {
    dispatch(fetchProgram());
  };

  return (
    <div className='mt-24'>
      <button onClick={handleButtonClick} className='text-white'>
        Get Program
      </button>
    </div>
  );
};

export default Program;
