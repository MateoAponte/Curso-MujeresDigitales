import { describe, it, expect } from 'vitest';
import { suma } from '../../helpers/sum';

describe('Vamos a probar el Helper Suma', () => {
  it('Should return the sum of two numbers', () => {
    // Expect recibe un valor, para luego pasarlo por un matcher
    expect(suma(2, 3)).toBe(5);
  });

  it('Should return a negative number when the sum is negative', () => {
    // AAA => Arrange, Act, Assert
    // Arrange
    let result;
    // Act
    result = suma(-2, -3);
    // Assert
    expect(result).toBe(-5);
  });
});
