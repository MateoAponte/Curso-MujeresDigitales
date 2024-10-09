export const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatch la acción:', action);
  console.log('Estado anterior: ', store.getState());

  const result = next(action);

  console.log('Nuevo estado: ', store.getState());
  return result;
};
