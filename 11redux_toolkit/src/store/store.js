// we need to learn redux in the followeint steps
// 1.store
// 2.reducers
// 3.useselect
// 4.usedispatch
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
