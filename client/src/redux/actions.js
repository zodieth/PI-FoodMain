import axios from "axios";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_DIET = "FILTER_DIET";
export const FILTER_ORDER = "FILTER_ORDER";
export const FILTER_ZA = "FILTER_ZA";
export const GET_DIETS = "GET_DIETS";
export const GET_DIETS_ID = "GET_DIETS_ID";
export const GET_DIETS_NAME = "GET_DIETS_NAME";

export const getDiets = () => {
  return async (dispatch) => {
    const dietsDb = await axios.get("http://localhost:3001/diets");
    dispatch({ type: GET_DIETS, payload: dietsDb.data });
  };
};

export const getDietsId = (id) => {
  return async (dispatch) => {
    const dietsDbId = await axios.get(`http://localhost:3001/recipes/${id}`);
    dispatch({ type: GET_DIETS, payload: dietsDbId.data });
  };
};

export const getDietName = (name) => {
  return async (dispatch) => {
    const dietsName = await axios.get(
      `http://localhost:3001/recipes?name=${name}`
    );
    dispatch({ type: GET_DIETS, payload: dietsName.data });
  };
};

export const createRecipe = (payload) => {
  return {
    type: CREATE_RECIPE,
    payload,
  };
};

export const filterOrder = (payload) => {
  return {
    type: FILTER_ORDER,
    payload,
  };
};

export const filterDiet = (payload) => {
  return {
    type: FILTER_DIET,
    payload,
  };
};
