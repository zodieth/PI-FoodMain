import { GET_DIETS } from "./actions";

export let initialState = {
  diets: [],
  recipes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIETS: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
