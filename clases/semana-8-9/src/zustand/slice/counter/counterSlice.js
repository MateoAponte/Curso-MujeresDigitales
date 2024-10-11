import actions from './actions';
import state from './state';

const counterSlice = (set) => ({
  ...state,
  ...actions(set),
});

export default counterSlice;
