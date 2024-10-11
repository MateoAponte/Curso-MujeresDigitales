const createPostsSlice = (set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();

      set(() => ({ posts: data }));
    } catch (error) {
      console.log(error);
    }
  },
});

export default createPostsSlice;
