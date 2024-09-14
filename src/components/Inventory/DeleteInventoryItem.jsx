// For deleting inventory items
import { db } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteInventoryItem = ({ id }) => {
  const deleteItem = async () => {
    const itemDoc = doc(db, "inventory", id);
    await deleteDoc(itemDoc);
  };

  return <button onClick={deleteItem}>Delete</button>;
};

export default DeleteInventoryItem;
