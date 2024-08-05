import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome Trash icon

const CheckoutItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{item.name}</span>
          <span className="text-gray-600">${item.price.toFixed(2)}</span>
          <span className="text-gray-600">Qty: {item.quantity}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 cursor-pointer"
          onClick={() => onRemove(item.id)}
        />
      </div>
    </div>
  );
};

export default CheckoutItem;