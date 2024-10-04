import initialState from './state';
import { fetchPosts } from './thunks';

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.condition = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.condition = 'success';
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.condition = 'error';
    });
  },
});

export const { setStatus } = messageSlice.actions;
export default messageSlice.reducer;
