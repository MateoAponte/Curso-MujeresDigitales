import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '../slice/message/slice.js';

export const store = configureStore({
  // Slices
  reducer: {
    message: messageSlice,
  },
  // middleware,
  devTools: true,
});
