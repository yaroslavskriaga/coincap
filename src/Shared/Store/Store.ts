import { configureStore } from '@reduxjs/toolkit';
import systemReducer from '../System/State/SystemReducers';

const store = configureStore({
  reducer: {
    System: systemReducer,
  },
});

export default store;
