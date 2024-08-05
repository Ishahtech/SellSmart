import React from 'react';

const Item = ({ item, onAdd }) => {
  return (
    <div className="border p-2 rounded-lg shadow flex flex-col items-center w-full max-w-xs">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2" />
      <div className="text-center flex-1">
        <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">${item.price.toFixed(2)}</p>
      </div>
      <div className="w-full mt-auto">
        <button
          onClick={() => onAdd(item)}
          className="bg-blue-500 text-white py-1 px-4 rounded w-full"
        >
          Add to Checkout
        </button>
      </div>
    </div>
  );
};

export default Item;