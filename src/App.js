import React, { useReducer, useContext } from "react";
import { reducer, initialState } from "./store";

const GlobalState = React.createContext();

const Counter = () => {
  const { dispatch } = useContext(GlobalState);
  return (
    <div>
      <button
        onClick={e => dispatch({ type: "increment", payload: `\u{1F354}` })}>
        Click to increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement", payload: `\u{1F627}` })}>
        Click to decrement
      </button>
    </div>
  );
};

const Details = () => {
  const { state } = useContext(GlobalState);
  const { firstName, lastName, age, location } = state;
  console.log(state);
  return (
    <div>
      <p>First name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <div style={{ fontSize: "60px" }}>{state.counter}</div>
      <Counter />
      <Details />
    </GlobalState.Provider>
  );
}

export default App;
