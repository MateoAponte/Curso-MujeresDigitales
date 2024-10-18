import { fetchInterceptor } from '../interceptor/interceptor';

class CatService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_CAT_API_URL;
  }

  async getCats() {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
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

export default new CatService();
