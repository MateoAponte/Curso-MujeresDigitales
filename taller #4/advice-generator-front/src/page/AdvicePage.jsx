import { useContext, useEffect } from 'react';
import { AdviceFather } from '../components/AdviceFather';
import AdviceContext from '../context/AdviceContext';

export const AdvicePage = () => {
  const { fetchData } = useContext(AdviceContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AdviceFather />
    </>
  );
};
