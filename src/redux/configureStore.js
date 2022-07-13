import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import BookReducer from './books/book';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
  BookReducer,
  CategoryReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
