import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5  screen'>
      <div className='h-40 w-[45%] p-10 rounded-xl py-6 px- bg-purple-400'>
        <h2 className='text-3xl font-semibold'> {data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

        <div className='h-40 w-[45%] p-10 rounded-xl py-6 px- bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>completed Task</h3>
      </div>

      <div className='h-40 w-[45%] p-10 rounded-xl py-6 px- bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>active task</h3>
      </div>

      <div className='h-40 w-[45%] p-10 rounded-xl py-6 px- bg-yellow-400'>
        <h2 className='text-3xl font-semibold'> {data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
