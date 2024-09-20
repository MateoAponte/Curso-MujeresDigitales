import { useEffect, useReducer, useState } from 'react';
import { adviceReducer, initialState } from '../reducer/counterReducer';

export const useFetch = () => {
  const [data, setData] = useState({
    slip: {},
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [state, dispatch] = useReducer(adviceReducer, initialState);

  const fetchData = async (defaultFetch = false) => {
    const getUrl =
      state.id === 0 && !defaultFetch ? state.url : `${state.url}/${state.id}`;

    setLoading(true);
    await fetch(getUrl)
      .then(async (response) => {
        const resJson = await response.json();
        dispatch({ type: 'UPDATE_RANDOM_ID', payload: resJson.slip.id });
        setData(resJson);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (state.id !== 0) {
      fetchData();
    }
  }, [state.id]);

  return { data, error, loading, dispatch, fetchData };
};
