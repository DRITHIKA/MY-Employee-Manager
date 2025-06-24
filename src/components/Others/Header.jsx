import React from 'react';

const Header = ({ data, changeUser }) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-purple-900'>
        Hello <br />
        <span className='text-3xl font-semibold text-purple-700'>{data?.name}</span>
      </h1>
      <button
        onClick={() => {
          localStorage.clear();                    
          changeUser(null);
        }}
        className='bg-gradient-to-r from-purple-700 to-purple-500 text-white px-5 py-2 rounded-md text-lg font-medium shadow-md hover:shadow-purple-500/40 hover:scale-[1.05] transition-all duration-300 ease-in-out'>
        Logout
      </button>
    </div>
  );
};

export default Header;
