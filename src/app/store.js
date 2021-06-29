import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jsonReducer from '../features/json/jsonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    json: jsonReducer,
  },
});
