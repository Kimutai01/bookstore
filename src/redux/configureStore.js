import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/book";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
