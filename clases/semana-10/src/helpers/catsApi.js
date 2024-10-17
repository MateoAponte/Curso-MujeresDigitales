import axios from 'axios';

// Variables de Entorno
const API_KEY =
  'live_Q7dwsuJyrgPrNddsTNQsJYEcfeGorZuC0qcb6LWlueP7BMLlWkLWK0MqHb21GJeW';

// Interceptor
export const fetchCats = async () => {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  return res.data;
};
