const { Diet, Recipe } = require("../db");
const axios = require("axios");
const { all } = require("../routes");
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
const { getDiets } = require("./getDiets");

const getRecipes = async () => {
  await getDiets();

  const diet = await Recipe.findAll();

  if (!diet.length) {
    const diets = await axios.get(url);
    const dietsApi = diets.data.results;
    const mappedInfo = dietsApi.map((e) => {
      return {
        id: e.id,
        name: e.title,
        image: e.image,
        types: e.diets,
        healthScore: e.healthScore,
      };
    });
    Recipe.bulkCreate(mappedInfo);
    const dietsDb = await Recipe.findAll();
    return dietsDb;
  } else {
    const dietsDb = Recipe.findAll();
    return dietsDb;
  }
};

module.exports = {
  getRecipes,
};
