export const errorMiddleware = () => (next) => (action) => {
  try {
    next(action);
  } catch (error) {
    console.error('Se detecto un error en la app: ' + error);
  }
};
