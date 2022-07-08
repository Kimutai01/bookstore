import React from "react";

const AddBook = () => {
  return (
    <div>
      <div className="Add-form">
        <h2 className="form-title">ADD NEW BOOK</h2>
        <form className="add-book-form">
          <input type="text" placeholder="Book title" required />
          <input type="text" placeholder="Author" required />
          <button type="submit" className="submit-button">
            Add book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
