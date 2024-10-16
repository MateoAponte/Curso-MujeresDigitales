import { describe, it, expect } from 'vitest';
import { fetchData } from '../../helpers/fetch';

describe('Función fetchData', () => {
  it('Debería resolver la promesa con el texto "Datos cargados"', async () => {
    let result;
    result = await fetchData();
    expect(result).toBe('Datos cargados');
  });
});
