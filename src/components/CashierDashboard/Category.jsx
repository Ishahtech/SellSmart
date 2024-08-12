import React from 'react';

const Category = ({ name, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${className} hover:bg-gray-100 transition`}
    >
      {name}
    </div>
  );
};

export default Category;