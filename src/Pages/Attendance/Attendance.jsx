import React from 'react';

const Attendance = () => {
  return (
    <>
    <div className='flex justify-evenly h-screen bg-black pt-24'>
    <div className='w-1/4 h-48 bg-black flex justify-center items-center rounded-lg cardbg'>
      <h3 className='text-white text-2xl'>Exam</h3>
    </div>
      <div className='w-1/4 h-48 bg-black flex justify-center items-center  rounded-lg cardbg'>
        <h3 className='text-white text-2xl'>Attendance</h3>
      </div>
      <div className='w-1/4 h-48 bg-black flex justify-center items-center rounded-lg cardbg'>
        <h3 className='text-white text-2xl'>Course</h3>
      </div>
    </div>
    </>
  );
}
export default Attendance;
