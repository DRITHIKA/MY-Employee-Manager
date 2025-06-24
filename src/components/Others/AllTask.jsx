import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  // Check if userData exists and has employees
  if (!userData || !userData.employees) {
    return <div className="text-white">Loading employee data...</div>;
  }

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 shadow-lg'>
      {/* Header Row */}
      <div className='bg-gradient-to-r from-purple-700 to-purple-500 text-white mb-2 py-2 px-4 flex justify-between rounded font-semibold'>
        <h2 className='w-1/5 text-center'>Employee</h2>
        <h3 className='w-1/5 text-center'>New</h3>
        <h5 className='w-1/5 text-center'>Active</h5>
        <h5 className='w-1/5 text-center'>Completed</h5>
        <h5 className='w-1/5 text-center'>Failed</h5>
      </div>

      {/* Task Rows */}
      {userData.employees.map((emp, idx) => (
        <div key={idx} className='bg-black text-white mb-2 py-2 px-4 flex justify-between rounded border border-purple-700 shadow-md'>
          <h2 className='w-1/5 text-center font-medium'>{emp.name}</h2>
          <h3 className='w-1/5 text-center text-blue-400'>{emp.taskCount.newTask}</h3>
          <h5 className='w-1/5 text-center text-yellow-400'>{emp.taskCount.active}</h5>
          <h5 className='w-1/5 text-center text-green-400'>{emp.taskCount.completed}</h5>
          <h5 className='w-1/5 text-center text-red-400'>{emp.taskCount.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
