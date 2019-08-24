const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (state.action === "Age_Up") {
    newState.age++;
  }
  if (state.action === "Age_Down") {
    newState.age--;
  }
  return newState;
};

export default reducer;
