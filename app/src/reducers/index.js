import {
  FETCH_JOKE_LOADING,
  FETCH_JOKE_SETUP,
  FETCH_JOKE_DELIVERY,
  FETCH_JOKE_FAIL,
} from "../actions/index.js";

const initialState = {
  loading: false,
  setup: "",
  delivery: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOKE_SETUP:
      return {
        ...state,
        setup: action.payload,
        loading: false,
      };
    case FETCH_JOKE_DELIVERY:
      return {
        ...state,
        delivery: action.payload,
        loading: false,
      };
    case FETCH_JOKE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;