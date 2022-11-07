const { Diet } = require("../db");
const axios = require("axios");
const url = "https://spoonacular.com/food-api/docs#Diets";

const getDiets = async () => {
  const diets = await axios.get(url);
  const dietsApi = diets.data.map((e) => {});

  if (!Diet.length) {
    Diet.bulkCreate(dietsApi);
  } else {
    res.send(Diet);
  }
};

module.exports = {
  getDiets,
};
