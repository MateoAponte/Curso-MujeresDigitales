import { create } from 'zustand';
import createCounterSlice from '../slice/counter/counterSlice.js';
import createPostsSlice from '../slice/posts/postsSlice.js';

// Zustand maneja la store como un hook
const useStore = create((set) => ({
  ...createCounterSlice(set),
  ...createPostsSlice(set),
}));

export default useStore;
