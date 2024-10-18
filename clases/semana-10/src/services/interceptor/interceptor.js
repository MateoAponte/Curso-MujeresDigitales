import axios from 'axios';

export const fetchInterceptor = (apiKey) =>
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  });
