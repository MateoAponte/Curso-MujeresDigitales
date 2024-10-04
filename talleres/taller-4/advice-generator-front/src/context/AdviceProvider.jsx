import React from 'react';
import AdviceContext from './AdviceContext';
import { useFetch } from '../hook/useFetch';

export const AdviceProvider = ({ children }) => {
  const {
    data: { slip },
    loading,
    dispatch,
    fetchData,
  } = useFetch();

  return (
    <AdviceContext.Provider value={{ slip, loading, dispatch, fetchData }}>
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceProvider;
