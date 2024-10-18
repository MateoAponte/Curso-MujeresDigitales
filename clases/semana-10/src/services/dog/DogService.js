import { fetchInterceptor } from '../interceptor/interceptor';

class DogService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_DOG_API_URL;
  }

  async getDogs() {
    try {
      const apiKey = import.meta.env.VITE_DOG_API_KEY;
      console.log(this.baseUrl);

      const res = await fetchInterceptor(apiKey)
        .get(this.baseUrl)
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
  }
}

export default new DogService();
