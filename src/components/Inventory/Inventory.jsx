// src/components/Inventory/Inventory.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import InventoryList from "./InventoryList";
import AddInventoryItem from "./AddInventoryItem";
import UpdateInventoryItem from "./UpdateInventoryItem";
import DeleteInventoryItem from "./DeleteInventoryItem";

const Inventory = () => {
  return (
    <div>
      <h1>Inventory Management</h1>
      <nav>
        <ul>
          <li>
            <Link to="list">Inventory List</Link>
          </li>
          <li>
            <Link to="add">Add Item</Link>
          </li>
          <li>
            <Link to="update">Update Item</Link>
          </li>
          <li>
            <Link to="delete">Delete Item</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="list" element={<InventoryList />} />
        <Route path="add" element={<AddInventoryItem />} />
        <Route path="update/:id" element={<UpdateInventoryItem />} />
        <Route path="delete/:id" element={<DeleteInventoryItem />} />
      </Routes>
    </div>
  );
};

export default Inventory;
