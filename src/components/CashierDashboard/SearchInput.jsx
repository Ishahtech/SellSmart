import React from 'react';

const SearchInput = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search items..."
      className="border p-1 mb-4 w-1/4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;