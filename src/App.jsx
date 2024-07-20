import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeyFeatures from "./Component/KeyFeatures";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <KeyFeatures />
    </div>
  );
};

export default App;
