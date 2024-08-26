import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config"; // Ensure this path is correct
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config"; // Adjust the path based on your file structure

const InventoryContent = () => {
  const [inventoryData, , setInventoryData] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      // Use onSnapshot for real-time updates
      const unsubscribe = onSnapshot(
        collection(db, "inventory"),
        (snapshot) => {
          const items = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });
          setInventoryData(items);
        }
      );

      // Cleanup the listener on component unmount
      return () => unsubscribe();
    };

    fetchInventory();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded mt-4">
      <h3 className="text-xl font-bold mb-4">Inventory Overview</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-400 rounded">
          <h4 className="text-lg font-bold">Total Products</h4>
          <p className="text-2xl">{inventoryData.length}</p>
        </div>
        <div className="p-4 bg-yellow-200 rounded">
          <h4 className="text-lg font-bold">Low Stock</h4>
          <p className="text-2xl">
            {inventoryData.filter((item) => item.quantity < 10).length}
          </p>
        </div>
        <div className="p-4 bg-red-500 rounded">
          <h4 className="text-lg font-bold">Out of Stock</h4>
          <p className="text-2xl">
            {inventoryData.filter((item) => item.quantity === 0).length}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4">Product List</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr
              key={item.id}
              className={
                index % 2 === 0 ? "bg-blue-400 text-center" : "text-center"
              }
            >
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryContent;
