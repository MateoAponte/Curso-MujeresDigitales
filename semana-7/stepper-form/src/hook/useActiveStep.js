import { useEffect, useState } from 'react';

export const useActiveStep = (steps) => {
  const [activeStep, setActiveStep] = useState({});

  const getActiveStep = () => {
    const activeStep = steps.find((step) => step.active) || {};
    setActiveStep(activeStep);
  };

  useEffect(() => {
    getActiveStep();
  }, [JSON.stringify(steps)]);

  return { activeStep };
};
