// src/components/Program.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgram } from '../../redux/slice/program';

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
     <button
  onClick={handleButtonClick}
  className="
    bg-blue-500
    hover:bg-blue-600
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
  List All Program
</button>

    </div>
  );
};

export default Program;
