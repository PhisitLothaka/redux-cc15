const { createStore } = require("redux");

// Redux

// - State
const initialState = {
  count: 0,
};
// - Action : JS Object ( Convention INCREMENT_BY)
// ActionType Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_FIVE = "INCREMENT_BY_FIVE";
const INCREMENT_BY = "INCREMENT_BY";
const DECREMENT_BY = "DECREMENT_BY";

// const increment = {
//   type: INCREMENT,
// };

// Action Creator

const incrementByAction = (amount) => {
  return {
    type: INCREMENT_BY,
    payload: amount,
  };
};

const decremantByAction = (amount) => {
  return {
    type: DECREMENT_BY,
    payload: amount,
  };
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

// const decremant = {
//   type: DECREMENT,
// };

const decremantAction = () => {
  return {
    type: DECREMENT,
  };
};

// const reset = {
//   type: RESET,
// };

const resetAction = () => {
  return {
    type: RESET,
  };
};

// const incrementByFive = {
//   type: INCREMENT_BY_FIVE,
//   payload: 5,
// };

const incrementByFiveAction = () => {
  return {
    type: INCREMENT_BY_FIVE,
    payload: 5,
  };
};

// - Reducer : Logic based on ActionType
// Input : state , action
// Return : newState (Do not modify)

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    // !!state.count += 1 (Do not modify)
    return { count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  } else if (action.type === RESET) {
    return { count: 0 };
  } else if (action.type === INCREMENT_BY_FIVE) {
    return { count: state.count + action.payload };
  } else if (action.type === INCREMENT_BY) {
    return { count: state.count + action.payload };
  } else if (action.type === DECREMENT_BY) {
    return { count: state.count - action.payload };
  }
  return state;
};

// - Store
const store = createStore(counterReducer);

// getState : ดูข้อมูลใน state ปัจจุบัน
// console.log(store.getState());

// subscribe : ติดตามข้อมูล
store.subscribe(() => {
  const state = store.getState();
  console.log("current state", state);
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decremantAction());
store.dispatch(resetAction());
store.dispatch(incrementByFiveAction());
store.dispatch(incrementByAction(10));
store.dispatch(decremantByAction(20));

// dispatch => Syntax = dispatch(action) **update**
// store.dispatch(increment);
// console.log(store.getState());

// store.dispatch(increment);
// console.log(store.getState());
// store.dispatch(increment);
// console.log(store.getState());

// store.dispatch(decremant);
// console.log(store.getState());

// store.dispatch(reset);
// console.log(store.getState());

// store.dispatch(incrementByFive);
