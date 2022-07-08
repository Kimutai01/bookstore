/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({
  title, author, category, chapter,
}) => (
  <div className="single-book">
    <p>{category}</p>
    <h3>{title}</h3>
    <p>{author}</p>
    <p>{chapter}</p>
  </div>
);

export default Book;
