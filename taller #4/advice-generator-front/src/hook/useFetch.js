import { useEffect, useState } from 'react';

export const useFetch = (url, handleUpdate) => {
  const [data, setData] = useState({
    slip: {},
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await fetch(url)
      .then(async (response) => {
        const resJson = await response.json();
        if (resJson.message?.type === 'error') {
          setError(true);
          handleUpdate();
        } else {
          setData(resJson);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, error, loading, fetchData };
};
