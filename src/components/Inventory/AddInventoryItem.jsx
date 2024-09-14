// For adding new inventory items
import { useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const AddInventoryItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addItem = async () => {
    await addDoc(collection(db, "inventory"), {
      name,
      quantity: parseInt(quantity),
    });
    setName("");
    setQuantity(0);
  };

  return (
    <div>
      <h1>Add Inventory Item</h1>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default AddInventoryItem;
