export const initialState = {
  firstName: "John",
  lastName: "Muskett",
  age: 33,
  location: "London",
  counter: 0
};

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
}
