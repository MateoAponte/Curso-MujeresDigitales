import { useEffect, useState } from "react"

export const useFetch = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async (url) => {
    setError(false);
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/')
      .then(async() => {
        const json = await response.json();
        setData(json.results[0])
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
    } catch(err) {
      setError(true);
      throw new Error('Error inesperado: ' + err)
    }
  }

  return {
    fetchData, error, loading, data
  }
}