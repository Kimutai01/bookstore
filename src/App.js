import "./App.css";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Books books={books} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
