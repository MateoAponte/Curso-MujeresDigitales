import { useEffect } from 'react';
import bgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg';
import { ACTIONS } from '../constants/actionsReducer';

export const Pazitoz = ({ steps, dispatch }) => {
  const handleClick = (index) => {
    dispatch({ type: ACTIONS.SET_ACTIVE_STEP, payload: index });
  };
  useEffect(() => {
    dispatch({ type: ACTIONS.SET_ACTIVE_STEP, payload: 0 });
  }, []);

  return (
    <ul
      className="steps-container"
      style={{ backgroundImage: `url(${bgSidebarDesktop})` }}
    >
      {steps.map((step, index) => (
        <li
          className={step.active ? 'step-item step-item--active' : 'step-item'}
          key={index}
          onClick={() => handleClick(index)}
        >
          <span className="step-item__bullet">{index + 1}</span>
          <div className="step-item__column">
            <span className="step-item__info">Step {index + 1}</span>
            <span className="step-item__title">{step.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
