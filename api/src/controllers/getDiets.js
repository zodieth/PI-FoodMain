const { Diet, Recipe } = require("../db");
const axios = require("axios");
const { all } = require("../routes");
const { types } = require("pg");
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`;

const getDiets = async () => {
  const diet = await Diet.findAll();

  if (!diet.length) {
    const diets = await axios.get(url);
    const dietsApi = diets.data.results;
    const mappedInfo = dietsApi.map((e) => e.diets);
    let array = [];

    mappedInfo.forEach((e) => (array = [...array, ...e]));

    array.push("vegetarian");
    array.push("lacto-vegetarian");
    array.push("ovo-vegetarian");
    array.push("paleo");
    array.push("low fodmap");

    const set = new Set(array);
    const arr = Array.from(set);

    const object = arr.map((e) => {
      return { types: e };
    });

    await Diet.bulkCreate(object);

    const dietsDb = await Diet.findAll();
    return dietsDb;
  } else {
    const dietsDb = Diet.findAll();
    return dietsDb;
  }
};

module.exports = {
  getDiets,
};
