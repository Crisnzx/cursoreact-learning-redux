import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();

  // when we use this hook, react-redux will automaticaly create a subscription to the redux store for this component
  // so we'll always have the latest snapshot of the state
  // if the component is removed from the DOM, the subscription will be cleared too
  // this hook will return only the data you really need for this component, that's why we have to pass a function.
  const counter = useSelector(state => state.counter);

  function incHandler() {
    dispatch({ type: 'increment' });
  }

  function decHandler() {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decHandler}>Decrement</button>
        <button onClick={incHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
