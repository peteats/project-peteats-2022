import { useReducer } from 'react';

function counterReducer(state, action) {
  console.log('counterReducer', state);

  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count > 2 ? state.count - 1 : 1 };

    default:
      return { count: 1 };
  }
}
/* end of counterReducer(state, action) */

function useCounter(initValue) {
  return useReducer(counterReducer, initValue);
}
/* end of hook-useReducer() */

export default useCounter;
