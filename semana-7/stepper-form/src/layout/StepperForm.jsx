import { useReducer } from 'react';
import { Pazitoz } from '../components/Pazitoz';
import { Preview } from '../components/Preview';
import { useActiveStep } from '../hook/useActiveStep';
import { initialState, stepReducer } from '../reducer/stepReducer';
import { STEP_PREVIEW_INFO } from '../constants/stepPreviewInfo';

export const StepperForm = () => {
  const [state, dispatch] = useReducer(stepReducer, initialState);
  const { selectedIndex, steps } = state;
  const { activeStep } = useActiveStep(state.steps);
  const previewInfo = STEP_PREVIEW_INFO[selectedIndex];

  return (
    <>
      <div className="stepper-form">
        <Pazitoz steps={steps} dispatch={dispatch} />
        <Preview previewInfo={previewInfo} />
      </div>
    </>
  );
};
