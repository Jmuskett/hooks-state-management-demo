export const initialState = {
  firstName: "John",
  lastName: "Muskett",
  age: 33,
  location: "London",
  counter: ""
};

export const favouriteFood = {};

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: action.payload };
    case "decrement":
      return { ...state, counter: action.payload };
    default:
      return { ...state };
  }
}
