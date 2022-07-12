// const initialState = [];
// const ADD_BOOK = './books/ADD_BOOK';
// const REMOVE_BOOK = './books/REMOVE_BOOK';

// const bookSlice = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK: {
//       const newState = {
//         id: Math.floor(Math.random() * 1000),
//         title: action.book.title,
//         author: action.book.author,
//         category: action.book.category,
//       };
//       return [...state, newState];
//     }
//     case REMOVE_BOOK: {
//       const remove = state.filter((book) => book[0] !== action.id);
//       return remove;
//     }
//     default:
//       return state;
//   }
// };
// export const addBookFunc = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const removeBookFunc = (id) => ({
//   type: REMOVE_BOOK,
//   id,
// });

// export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Action",
    chapter: "Chapter 17",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    title: "Capital in the Twenty-First Century",
    author: "Suzanne Collins",
    category: "Economy",
    chapter: "Introduction",
  },
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducer: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllBooks = (state) => state.books;
export const { bookAdded } = bookSlice.actions;

export default bookSlice.reducer;
