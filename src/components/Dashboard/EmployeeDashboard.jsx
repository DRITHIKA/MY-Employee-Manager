import React from 'react'
import Header from '../Others/header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div className='p-10 bg-gray-900 h-screen'>
      <Header data={data} changeUser={changeUser} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;