import { describe, it, expect } from 'vitest';
import { suma } from '../helpers/sum';

describe('Función suma', () => {
  it('debería sumar dos números correctamente', () => {
    expect(suma(2, 3)).toBe(5);
  });

  it('debería retornar un número negativo cuando la suma es negativa', () => {
    expect(suma(-2, -3)).toBe(-5);
  });
});
