const AdviceUrl = 'https://api.adviceslip.com/advice';

export const initialState = {
  id: 0,
  randomId: 0,
  url: AdviceUrl,
};

export const adviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        id: state.randomId + 1,
        ...state,
      };
    case 'PREV':
      return {
        id: state.randomId - 1,
        ...state,
      };
    case 'UPDATE_RANDOM_ID':
      return {
        randomId: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
