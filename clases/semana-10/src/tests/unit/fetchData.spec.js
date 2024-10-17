import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest';
import { fetchData } from '../../helpers/fetch';
import JsonPlaceholderData from '../../__mocks__/jsonPlaceholderData.json';

// Conjunto de pruebas
describe('Función fetchData', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeAll(() => {
    // Simular el comportamiento de Fetch
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(JsonPlaceholderData),
      });
    });
  });

  // Caso de prueba
  it('Debería resolver la promesa con el JSON "JsonPlaceholderData"', async () => {
    let result;
    result = await fetchData(); // 1
    expect(result).toBe(JsonPlaceholderData);
  });
  it('Debería resolver la promesa con un length que tenga sentido', async () => {
    let result;
    result = await fetchData(); // 2
    expect(result).toHaveLength(7);
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeGreaterThanOrEqual(7);
  });
  it('Debería resolver la promesa con uun arreglo donde sus items coinciden con el esquema', async () => {
    let result;
    result = await fetchData(); // 3
    expect(result[0]).toHaveProperty('userId');
  });
  it('Debería llamar una única vez a la función fetch', async () => {
    let result;
    result = await fetchData(); // 4
    expect(global.fetch).toBeCalled();
    expect(global.fetch).toBeCalledTimes(1);
  });
  it('No debería la función fetch', async () => {
    expect(global.fetch).not.toBeCalled();
  });
});
