/**
 * In this file we make the type more strict and introduce Reset action without payload,
 * which were not present in previous file.
 */
import { useReducer } from 'react';

enum COUNT {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

type STATE_TYPE = {
  count: number;
};

/* Solution to payload problem is create separate type I.E UPDATE_ACTION, RESET_ACTION */
/* This is called discriminated approach using typescript. */

type UPDATE_ACTION= {
  actionType: COUNT.INCREMENT | COUNT.DECREMENT;
  payload: number;
};

type RESET_ACTION= {
  actionType: COUNT.RESET;
};

/*Use case2: Strict action Type, but go to the handle click of reset button, it will raise error. */
type ACTION_TYPE = UPDATE_ACTION | RESET_ACTION;

const initialState = {
  count: 0,
};

const reducer = (state: STATE_TYPE, action: ACTION_TYPE) => {
  switch (action.actionType) {
    case COUNT.INCREMENT:
      return {
        count: state.count + action.payload,
      };

    case COUNT.DECREMENT:
      return {
        count: state.count + action.payload,
      };

    case COUNT.RESET:
      return initialState;

    default:
      return state; //Note:*** I did mistake here instead of returning state, I put break here.
  }
};

/**
 * Use Reducer can be used where new state depends upon previous state
 * @returns
 */
export const UserReducerContainer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCounterInc = () => {
    dispatch({ actionType: COUNT.INCREMENT, payload: 1 });
  };

  const handleCounterDec = () => {
    dispatch({ actionType: COUNT.DECREMENT, payload: 1 });
  };

  const handleResetCount = () => {
    dispatch({ actionType: COUNT.RESET });/* 
      Error Property 'payload' is missing in type '{ actionType: COUNT.RESET; }' but required in type 'ACTION_TYPE
    */
  };
  return (
    <div>
      UserReducerContainer
      <div>Counter is {`${state.count}`}</div>
      <div>
        <button onClick={handleCounterInc} style={{ marginRight: '5px' }}>
          Increment
        </button>
        <button onClick={handleCounterDec}>Decrement</button>
        <button onClick={handleResetCount}>Reset Count</button>
      </div>
    </div>
  );
};
