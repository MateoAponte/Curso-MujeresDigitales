import { configureStore } from '@reduxjs/toolkit';
import { stepReducer } from '../../reducer/stepReducer';

export const store = configureStore({
  reducer: {
    step: stepReducer,
  },
});
