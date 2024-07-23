// src/components/Program.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgram } from '../redux/slice/program';

const Program = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.program);

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data);
    }
  }, [data]);

  const handleButtonClick = () => {
    console.log('Button clicked');
    dispatch(fetchProgram());
  };

  return (
    <div className='mt-40'>
      <button onClick={handleButtonClick} className='text-white'>
        Get Program
      </button>
      {isLoading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {isError && <p>Error fetching data</p>}
    </div>
  );
};

export default Program;
