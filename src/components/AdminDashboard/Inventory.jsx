import React from 'react';

const inventoryData = [
  { id: 1, name: 'Product A', quantity: 10, price: 15.99 },
  { id: 2, name: 'Product B', quantity: 5, price: 25.99 },
  { id: 3, name: 'Product C', quantity: 20, price: 9.99 },
  { id: 4, name: 'Product A', quantity: 10, price: 15.99 },
  { id: 5, name: 'Product B', quantity: 5, price: 25.99 },
  { id: 6, name: 'Product C', quantity: 20, price: 9.99 },
];

function Inventory() {
  return (
    <>
    <h2 className="text-2xl font-bold mb-4">Inventory Overview</h2>
    <div className="bg-white shadow rounded p-4">        
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.quantity}</td>
              <td className="px-4 py-2">${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Inventory;

