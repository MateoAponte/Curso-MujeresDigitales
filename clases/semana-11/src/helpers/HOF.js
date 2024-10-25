// Funciones de orden superior
// * Usan otras fn como parametros
const filtrat = (array, criterio) => {
  // Criterio: Callback
  return array.filter(criterio);
};

const esPar = (num) => num % 2 === 0;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función que permite la flexibilidad de mi Aplicación en los filtros
filtrat(arr, esPar);
