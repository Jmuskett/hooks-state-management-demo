import React, { useReducer, useContext } from "react";
import { reducer, initialState } from "./store";

const GlobalState = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <div>{state.counter}</div>
      <Counter />
      <Details />
    </GlobalState.Provider>
  );
}

const Counter = () => {
  const { dispatch } = useContext(GlobalState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>
        Click to increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
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

export default App;
