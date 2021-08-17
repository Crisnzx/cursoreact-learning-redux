import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
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
