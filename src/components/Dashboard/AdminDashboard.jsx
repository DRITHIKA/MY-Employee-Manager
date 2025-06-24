import React from 'react';

import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';
import Header from '../Others/Header';

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-700 via-purple-800 to-amber-100 p-8">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
