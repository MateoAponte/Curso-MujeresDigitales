import { describe, it, expect } from 'vitest';
import { fetchData } from '../helpers/fetchData';

describe('Función fetchData', () => {
  it('debería resolver con el texto "Datos cargados"', async () => {
    const data = await fetchData();
    expect(data).toBe('Datos cargados');
  });
});
