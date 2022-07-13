import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Books from './components/Books';
import Category from './components/Categories';
import Navbar from './components/Navbar';

const BookContainer = () => {
  const books = useSelector((state) => state.BookReducer);
  return (
    <Router>
      <div className="div">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Books books={books} />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default BookContainer;
