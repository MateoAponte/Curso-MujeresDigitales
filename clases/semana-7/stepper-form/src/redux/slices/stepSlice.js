import { createSlice } from '@reduxjs/toolkit';
import { ACTIONS } from '../../constants/actionsReducer';

export const initialState = {
  steps: [
    {
      title: 'Your Info',
      active: false,
      completed: false,
    },
    {
      title: 'Select Plan',
      active: false,
      completed: false,
    },
    {
      title: 'ADD-ON',
      active: false,
      completed: false,
    },
    {
      title: 'Summary',
      active: false,
      completed: false,
    },
  ],
  selectedIndex: 0,
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    [ACTIONS.SET_ACTIVE_STEP]: (state, action) => {
      const steps = [...state.steps];
      // Desactiva todos los pasos ... "Desestructuración"
      // 1ro, Dejo el pedazo de mi Objeto
      // 2do, Le añado el nuevo fragmento
      const inactiveSteps = steps.map((step) => ({ ...step, active: false }));
      // Activa unicamente el paso que tiene relación con el id
      inactiveSteps[action.payload].active = true;
      state.selectedIndex = action.payload;
      state.steps = inactiveSteps;
    },
    [ACTIONS.SET_SELECTED_INDEX]: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { ...ACTIONS } = stepSlice.actions;
export default stepSlice.reducer;
