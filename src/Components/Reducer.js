import React, { useReducer } from "react";

const Reducer = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        console.log("Unknown action type");
    }
  };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="main">
      <h1 className="count1">use Reducer</h1>
      <h1 className="count1">Count: {state.count}</h1>
      <button className="I" onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>
      <button className="I" onClick={() => dispatch({ type: "DECREMENT" })}>
        DECREMENT
      </button>
      <button className="I" onClick={() => dispatch({ type: "RESET" })}>
        RESET
      </button>
    </div>
  );
};
export default Reducer;
