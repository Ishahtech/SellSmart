// For updating existing inventory items
import { useState } from "react";
import { db } from "../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

const UpdateInventoryItem = ({ id, currentName, currentQuantity }) => {
  const [name, setName] = useState(currentName);
  const [quantity, setQuantity] = useState(currentQuantity);

  const updateItem = async () => {
    const itemDoc = doc(db, "inventory", id);
    await updateDoc(itemDoc, { name, quantity });
  };

  return (
    <div>
      <h1>Update Inventory Item</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={updateItem}>Update Item</button>
    </div>
  );
};

export default UpdateInventoryItem;
