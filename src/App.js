import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./state/action";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <h2>A Simple Increment and Decrement Program using react and redux to understand the working of react with redux.</h2>
      <input type="text" value={counter} /><br /><br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
