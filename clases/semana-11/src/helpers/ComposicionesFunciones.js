// Combinar funciones para aplicar una secuencia de operaciones
const multiplicarPorDos = (a) => a * 2;
const restarTres = (x) => x - 3;

const composicion = (x) => restarTres(multiplicarPorDos(x));
console.log(composicion(5));
