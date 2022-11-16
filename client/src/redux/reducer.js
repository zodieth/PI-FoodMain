import {
  GET_DIETS,
  FILTER_ORDER,
  FILTER_DIET,
  GET_DIETS_NAME,
  CREATE_RECIPE,
} from "./actions";

export let initialState = {
  diets: [],
  recipes: [],
  modifyRecipes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIETS: {
      return {
        ...state,
        recipes: action.payload,
        modifyRecipes: action.payload,
      };
    }
    case CREATE_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    }

    case GET_DIETS_NAME: {
      return {
        ...state,
        recipes: action.payload,
      };
    }

    case FILTER_ORDER: {
      let order = [];
      if (action.payload === "A-Z") {
        order = state.recipes.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
          else return -1;
        });
      } else if (action.payload === "Z-A") {
        order = state.recipes.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
          else return -1;
        });
      }

      return {
        ...state,
        recipes: order,
      };
    }
    case FILTER_DIET: {
      let filteredDiets = [];

      state.modifyRecipes.push(state.recipes);

      state.modifyRecipes.map((e) => {
        if (e.types) {
          e.types.forEach((diet) => {
            if (diet === action.payload) {
              if (e === []) alert("");
              filteredDiets.push(e);
            }
          });
        }
      });

      return {
        ...state,
        recipes: filteredDiets,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
