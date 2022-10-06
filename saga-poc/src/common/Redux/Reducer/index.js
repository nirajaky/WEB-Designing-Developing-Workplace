import InitialState from "./InitialState";

const Reducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };

    case "SET_ERROR":
      return { ...state, error: payload };

    case "SET_RESPONSE_DATA":
      return { ...state, product: payload };

    default:
      return state;
  }
};

export default Reducer;
