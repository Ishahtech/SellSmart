// // For displaying all inventory items
// import { useState, useEffect } from "react";
// import { db } from "../../firebase-config";
// import { collection, getDocs } from "firebase/firestore";

// const InventoryList = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const querySnapshot = await getDocs(collection(db, "inventory"));
//       const itemList = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setItems(itemList);
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h1>Inventory List</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InventoryList;

// src/components/InventoryList.jsx
import React, { useEffect, useState } from "react";
import { getInventoryItemsRealtime } from "../../firebaseFunction";

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Subscribe to real-time updates
    const unsubscribe = getInventoryItemsRealtime((items) => {
      setInventory(items);
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Stock: {item.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
