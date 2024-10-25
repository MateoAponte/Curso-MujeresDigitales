// Funciones que crean funciones
// Crea un sistema de variables locales
const crearContador = (a) => {
  let contador = a;

  return {
    incrementar: () => {
      contador++;
      return contador;
    },
    decrementar: () => {
      contador--;
      return contador;
    },
  };
};

const contador = crearContador(3);
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.decrementar());
console.log(contador.decrementar());
console.log(contador.decrementar());
console.log(contador.decrementar());
console.log(contador.incrementar());
