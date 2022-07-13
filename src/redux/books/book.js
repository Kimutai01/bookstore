// const initialState = [];
import { nanoid } from '@reduxjs/toolkit';

const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newState = [
        {
          id: nanoid(),
          title: action.book.title,
          author: action.book.author,
        },
      ];
      return state.concat(newState);
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);
      return remove;
    }

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
export default BookReducer;
