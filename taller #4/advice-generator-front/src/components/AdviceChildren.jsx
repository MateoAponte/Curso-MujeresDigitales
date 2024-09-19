import { useContext } from 'react';
import { Advice } from './Advice';
import AdviceContext from '../context/AdviceContext';

export const AdviceChildren = () => {
  const { slip, fetchData, loading } = useContext(AdviceContext);

  return (
    <Advice
      id={slip.id}
      description={slip.advice}
      handleClick={fetchData}
      loading={loading}
    />
  );
};
