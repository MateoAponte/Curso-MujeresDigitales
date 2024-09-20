import { useContext } from 'react';
import { Advice } from './Advice';
import AdviceContext from '../context/AdviceContext';

export const AdviceChildren = () => {
  const { slip, dispatch, loading } = useContext(AdviceContext);

  return (
    <Advice
      id={slip.id}
      description={slip.advice}
      dispatch={dispatch}
      loading={loading}
    />
  );
};
