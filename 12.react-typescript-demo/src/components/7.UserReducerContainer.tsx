import React, { useReducer } from 'react';

enum COUNT {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type STATE_TYPE = {
  count: number;
};

type ACTION_TYPE = {
  actionType: string;
  payload: number;
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

    default:
      return state; //Note:*** I did mistake here instead of returning state, I put break here.
  }
};

/**
 * Use Reducer can be used where new state depends upon previous state
 * @returns
 */
export const UserReducerContainer = () => {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCounterInc = () => {
    dispatch({ actionType: COUNT.INCREMENT, payload: 1 });
  };

  const handleCounterDec = () => {
    dispatch({ actionType: COUNT.DECREMENT, payload: 1 });
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
      </div>
    </div>
  );
};
