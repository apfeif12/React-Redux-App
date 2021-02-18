import {
  FETCH_JOKE_LOADING,
  FETCH_JOKE_SETUP,
  FETCH_JOKE_DELIVERY,
  FETCH_JOKE_READY,
  FETCH_JOKE_FAIL,
} from "../actions/index.js";

const initialState = {
  loading: false,
  setup: "",
  delivery: "",
  error: "",
  ready: false,
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
        loading: false,
        setup: action.payload,
      };
    case FETCH_JOKE_DELIVERY:
      return {
        ...state,
        loading: false,
        delivery: action.payload,
        ready: true,
      };
    case FETCH_JOKE_READY:
      return {
        ...state,
        
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
