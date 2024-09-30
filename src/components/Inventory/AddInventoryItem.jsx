// // For adding new inventory items
// import { useState } from "react";
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";

// const AddInventoryItem = () => {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(0);

//   const addItem = async () => {
//     await addDoc(collection(db, "inventory"), {
//       name,
//       quantity: parseInt(quantity),
//     });
//     setName("");
//     setQuantity(0);
//   };

//   return (
//     <div>
//       <h1>Add Inventory Item</h1>
//       <input
//         type="text"
//         placeholder="Item Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Quantity"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//       />
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

// export default AddInventoryItem;

// import React, { useState } from "react";
// import { addInventoryItem } from "../../firebaseFunction"; // Import add function

// const AddInventoryItem = () => {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const handleAddItem = async (e) => {
//     e.preventDefault();
//     if (name && quantity) {
//       await addInventoryItem({ name, quantity: Number(quantity) });
//       setName("");
//       setQuantity("");
//     }
//   };

//   return (
//     <form onSubmit={handleAddItem}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Item Name"
//       />
//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//         placeholder="Quantity"
//       />
//       <button type="submit">Add Item</button>
//     </form>
//   );
// };

// export default AddInventoryItem;

// src/components/AddInventoryItem.jsx
import React from "react";
import { addInventoryItem } from "../../firebaseFunction";

const AddInventoryItem = () => {
  const handleAddRandomItem = async () => {
    const randomItem = {
      name: `Product ${Math.floor(Math.random() * 1000)}`,
      price: Math.floor(Math.random() * 100) + 1,
      stock: Math.floor(Math.random() * 50) + 1,
    };
    await addInventoryItem(randomItem);
    console.log("Random item added:", randomItem);
  };

  return (
    <div>
      <button onClick={handleAddRandomItem}>Add Random Item</button>
    </div>
  );
};

export default AddInventoryItem;
