const actions = (set) => ({
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

export default actions;
