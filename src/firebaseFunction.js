// src/firebaseFunctions.js
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase-config";

// Add an inventory item
export const addInventoryItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "inventory"), item);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Get all inventory items
export const getInventoryItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "inventory"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
};

// Update an inventory item
export const updateInventoryItem = async (id, updatedFields) => {
  try {
    const itemRef = doc(db, "inventory", id);
    await updateDoc(itemRef, updatedFields);
    console.log("Document updated");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Delete an inventory item
export const deleteInventoryItem = async (id) => {
  try {
    await deleteDoc(doc(db, "inventory", id));
    console.log("Document deleted");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
