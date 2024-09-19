import React from 'react';
import AdviceContext from './AdviceContext';
import { useFetch } from '../hook/useFetch';

const AdviceUrl = 'https://api.adviceslip.com/advice';

export const AdviceProvider = ({ children }) => {
  const {
    data: { slip },
    loading,
    fetchData,
  } = useFetch(AdviceUrl);

  return (
    <AdviceContext.Provider value={{ slip, loading, fetchData }}>
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceProvider;
