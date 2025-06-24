import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!userData || !userData.employees) return;

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1,
          },
        };
      }
      return emp;
    });

    const updatedData = { ...userData, employees: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // ✅ Real-time sync to localStorage

    alert('✅ Task created successfully!'); // ✅ Toast/Alert

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="p-6 bg-[#1c1c1c] rounded-lg shadow-lg mt-5">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-between text-white"
      >
        {/* Left Side */}
        <div className="w-full md:w-[48%] space-y-4">
          <div>
            <label className="block text-sm mb-1 text-purple-200">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border border-purple-600 rounded px-4 py-2 text-sm placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full bg-transparent border border-purple-600 rounded px-4 py-2 text-sm text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* ✅ Dropdown for employee list */}
          <div>
            <label className="block text-sm mb-1 text-purple-200">Assign to</label>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full bg-transparent border border-purple-600 rounded px-4 py-2 text-sm text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Employee</option>
              {userData?.employees?.map((emp, idx) => (
                <option key={idx} value={emp.name} className="text-black">
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full bg-transparent border border-purple-600 rounded px-4 py-2 text-sm placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[48%] space-y-4">
          <label className="block text-sm mb-1 text-purple-200">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task description"
            className="w-full bg-transparent border border-purple-600 rounded px-4 py-2 text-sm placeholder-purple-400 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white font-semibold py-2 rounded transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
