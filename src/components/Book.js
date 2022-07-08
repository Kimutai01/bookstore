import React from "react";

const Book = ({ title, author, category, chapter }) => {
  return (
    <div className="single-book">
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
