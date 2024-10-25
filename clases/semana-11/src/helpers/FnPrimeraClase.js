// Funciones de primera clase
// * Son funciones que no devuelven nada
// * Hacen uso de otras funciones

const suma = (a, b) => a + b;
// operacion: Callback
const operar = (operacion, a, b) => {
  // Otró código
  // Consultando un API de Logs
  // Configurando otros objetos
  // Modificando el DOM

  // * Implementar desarrollos a la medida sin dañar el core del aplicación
  return operacion(a, b);
};

// Expect => 5
operar(suma, 2, 3);
