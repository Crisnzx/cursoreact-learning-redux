// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
// Redux doesn't merge your new state with the old state, instead it'll replace everything, so
// it's important to overwrite with the old state the data that you won't change
// we will use redux toolkit to solve and improve some aspects of the Redux
// Now we can update the old state, and the code will still be immutable
// The code will become shorter and easier
// Now we can create slices to agroup our state

const firstState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: firstState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload; // name of the property which will contain the data you have passed through the dispatch
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// if we have multiple slices, we need to use configureStore from react toolkit because the state must be only one, and
// this method will combine all slices into one big state so we will be able to use the Redux
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

/*

function itShouldBeAComponent() {
  const currentState = store.getState();
  console.log(currentState);
}

Now it must be done differently, we have to make the connection between React and Redux
store.subscribe(itShouldBeAComponent);

store.dispatch({
  type: 'increment',
});

*/

/*
function counterReducer(state = firstState, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case 'toggle':
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
}
*/
