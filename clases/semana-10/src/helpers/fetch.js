export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos cargados');
    }, 1000);
  });
};
