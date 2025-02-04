const { createStore } = require("redux");

// Redux

// - State
const initialState = {
  count: 0,
};
// - Action : JS Object ( Convention INCREMENT_BY)
const increment = {
  type: "INCREMENT",
};
const decremant = {
  type: "DECREMENT",
};
const reset = {
  type: "RESET",
};

const incrementByFive = {
  type: "INCREMENT_BY_FIVE",
  payload: 5,
};

// - Reducer : Logic based on ActionType
// Input : state , action
// Return : newState (Do not modify)

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // !!state.count += 1 (Do not modify)
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else if (action.type === "INCREMENT_BY_FIVE") {
    return { count: state.count + action.payload };
  }
  return state;
};

// - Store
const store = createStore(counterReducer);

// getState : ดูข้อมูลใน state ปัจจุบัน
console.log(store.getState());

// subscribe : ติดตามข้อมูล
store.subscribe(() => {
  const state = store.getState();
  console.log("current state", state);
});

// dispatch => Syntax = dispatch(action) **update**
store.dispatch(increment);
// console.log(store.getState());

store.dispatch(increment);
// console.log(store.getState());
store.dispatch(increment);
// console.log(store.getState());

store.dispatch(decremant);
// console.log(store.getState());

store.dispatch(reset);
// console.log(store.getState());

store.dispatch(incrementByFive);
