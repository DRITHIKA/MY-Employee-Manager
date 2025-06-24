import React from 'react';

const NewTask = ({ task }) => {
  return (
    <div className='h-full w-[300px] p-5 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-500 shadow-lg hover:scale-[1.03] hover:shadow-purple-500/50 transition-all duration-300 ease-in-out'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-purple-950 text-white text-xs font-medium px-3 py-1 rounded-md shadow-inner'>
          {task.category}
        </h3>
        <h4 className='text-sm text-purple-100'>{task.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold text-white'>{task.taskTitle}</h2>
      <p className='text-sm text-purple-100 mt-2'>
        {task.taskDescription}
      </p>

      <div className='flex justify-between mt-5'>
        <button className='bg-emerald-400 text-black font-medium py-1 px-3 text-xs rounded-md hover:bg-emerald-500 transition'>
          Mark as Completed
        </button>
        <button className='bg-rose-400 text-black font-medium py-1 px-3 text-xs rounded-md hover:bg-rose-500 transition'>
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default NewTask;
