export const fetchPosts = createAsyncThunk('message/fetchPosts', async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return response.json();
});