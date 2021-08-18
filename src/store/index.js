import { createStore } from 'redux';

// Redux doesn't merge your new state with the old state, instead it'll replace everything, so
// it's important to overwrite with the old state the data that you won't change

function counterReducer(state = { counter: 0, showCounter: true }, action) {
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

const store = createStore(counterReducer);

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
