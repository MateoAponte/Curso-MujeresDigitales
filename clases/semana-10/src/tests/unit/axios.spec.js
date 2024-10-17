import axios from 'axios';
import { fetchAxiosData } from '../../helpers/axios';
import { afterEach, describe, expect, it, vi } from 'vitest';
import JsonPlaceholderTodos from '../../__mocks__/jsonPlaceholderTodos.json';

vi.mock('axios');

describe('Función fetchAxiosData', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Debería resolver la promesa con el JSON "JsonPlaceholderTodos"', async () => {
    // Arrange
    const mockAxios = axios.get.mockResolvedValue({
      data: JsonPlaceholderTodos,
    });
    const idTodo = 1;

    // Act
    const data = await fetchAxiosData(idTodo);

    // Assert
    // mockData => axiosGet fue llamado con el parametro URL JSONPlaceholderTodos
    // Expect va a comprobar los parametros de llamada
    expect(mockAxios).toHaveBeenCalled(
      `https://jsonplaceholder.typicode.com/todos/${idTodo}`,
    );
    // Expect para comprobar la información de salida
    expect(data).toEqual(JsonPlaceholderTodos);
  });

  it('Debería resolver la promesa con un error cuando la solicitud falla', async () => {
    axios.get.mockRejectedValue(205);
    const idTodo = 1;
    await expect(fetchAxiosData(idTodo)).rejects.toThrowError(
      'Status Code 205',
    );
  });
});
