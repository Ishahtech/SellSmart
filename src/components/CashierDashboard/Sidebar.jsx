import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {/* Add navigation links or other sidebar content here */}
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 1</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 2</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;