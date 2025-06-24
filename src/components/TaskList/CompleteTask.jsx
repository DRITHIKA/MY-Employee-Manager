import React from 'react';

const CompleteTask = ({ task }) => {
  return (
    <div className='h-full w-[300px] p-5 rounded-2xl bg-gradient-to-br from-purple-900 to-purple-700 shadow-lg hover:scale-[1.03] hover:shadow-purple-600/40 transition-all duration-300 ease-in-out'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-md shadow-inner'>
          {task.category}
        </h3>
        <h4 className='text-sm text-purple-100'>{task.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold text-white line-through'>{task.taskTitle}</h2>
      <p className='text-sm text-purple-100 mt-2 line-through'>
        {task.taskDescription}
      </p>

      <div className='mt-4'>
        <button className='w-full bg-green-400 text-black font-semibold py-2 rounded-md cursor-default'>
          ✔ Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
