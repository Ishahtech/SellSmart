// // For deleting inventory items
// import { db } from "../../firebase-config";
// import { doc, deleteDoc } from "firebase/firestore";

// const DeleteInventoryItem = ({ id }) => {
//   const deleteItem = async () => {
//     const itemDoc = doc(db, "inventory", id);
//     await deleteDoc(itemDoc);
//   };

//   return <button onClick={deleteItem}>Delete</button>;
// };

// export default DeleteInventoryItem;

import React from "react";
import {
  updateInventoryItem,
  deleteInventoryItem,
} from "../../firebaseFunction"; // Import update/delete functions

const DeleteInventoryItem = ({ id, name, quantity }) => {
  const handleUpdate = async () => {
    const newQuantity = prompt("Enter new quantity", quantity);
    if (newQuantity) {
      await updateInventoryItem(id, { quantity: Number(newQuantity) });
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await deleteInventoryItem(id);
    }
  };

  return (
    <li>
      {name} - {quantity}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default DeleteInventoryItem;
