export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos cargados');
    }, 1000);
  });
}
