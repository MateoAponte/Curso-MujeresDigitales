import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '../slice/messageSlice';

export const store = configureStore({
  // Slices
  reducer: {
    message: messageSlice,
  },
  // middleware,
  devTools: true,
});
