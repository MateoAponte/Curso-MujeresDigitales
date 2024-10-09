import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '../slice/message/slice.js';
import { loggerMiddleware } from '../middlewares/logs.js';
import { errorMiddleware } from '../middlewares/error.js';

export const store = configureStore({
  // Slices
  reducer: {
    message: messageSlice,
  },
  // middleware,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware).concat(errorMiddleware),
  devTools: true,
});
