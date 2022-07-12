/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { selectAllBooks } from '../redux/books/book';

const Books = () => {
  // const [books, setBooks] = useState([
  //   {
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //     category: 'Action',
  //     chapter: 'Chapter 17',
  //   },
  //   {
  //     title: 'Dune',
  //     author: 'Frank Herbert',
  //     category: 'Science Fiction',
  //     chapter: 'Chapter 3: "A Lesson Learned"',
  //   },
  //   {
  //     title: 'Capital in the Twenty-First Century',
  //     author: 'Suzanne Collins',
  //     category: 'Economy',
  //     chapter: 'Introduction',
  //   },
  // ]);
  const books = useSelector(selectAllBooks);
  return (
    <div>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          category={book.category}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
