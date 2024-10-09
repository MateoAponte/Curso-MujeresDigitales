import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import { thunks } from './thunks';
import reducers from './reducers';
import { ACTIONS } from './types';

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(thunks[ACTIONS.FETCH_POSTS].pending, (state) => {
      state.condition = 'loading';
    });
    builder.addCase(thunks[ACTIONS.FETCH_POSTS].fulfilled, (state, action) => {
      state.condition = 'success';
      state.posts = action.payload;
    });
    builder.addCase(thunks[ACTIONS.FETCH_POSTS].rejected, (state) => {
      state.condition = 'error';
    });
  },
});

export const actions = messageSlice.actions;
export default messageSlice.reducer;
