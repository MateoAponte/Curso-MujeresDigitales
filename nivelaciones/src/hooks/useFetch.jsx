import { useEffect, useState } from "react"

export const useFetch = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async (url) => {
    setError(false);
    setLoading(true);
    console.log('Fetch data');
    
    try {
      await fetch('https://randomuser.me/api/')
      .then(async(res) => {
        const json = await res.json();
        setData(json.results[0])
      })
      .catch(() => {
        console.log('Has error in fetch');
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
    } catch(err) {
      console.log('Has error in catch');
      setError(true);
      throw new Error('Error inesperado: ' + err)
    }
  }

  return {
    fetchData, error, loading, data
  }
}