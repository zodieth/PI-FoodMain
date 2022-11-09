import axios from "axios";

export const GET_DIETS = "GET_DIETS";
export const GET_DIETS_ID = "GET_DIETS_ID";

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
