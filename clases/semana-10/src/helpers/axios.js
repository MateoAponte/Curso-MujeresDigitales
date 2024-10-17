import axios from 'axios';

export const fetchAxiosData = async (id) => {
  try {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        console.log('Finalizado');
      });
    return res.data;
  } catch (error) {
    throw new Error(`Status Code ${error}`);
  }
};
