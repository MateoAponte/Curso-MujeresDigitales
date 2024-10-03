import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: {
    title: 'Información exitosa',
    type: 'succcess',
  },
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
