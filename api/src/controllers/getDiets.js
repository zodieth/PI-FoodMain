const { Diet } = require("../db");
const axios = require("axios");
const { all } = require("../routes");
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

const getDiets = async () => {
  // const diets = await axios.get(url);
  // const dietsApi = diets.data.results;
  // const mappedInfo = dietsApi.map((e) => {
  //   return {
  //     id: e.id,
  //     title: e.title,
  //     image: e.image,
  //     diets: e.diets,
  //   };
  // });
  // return mappedInfo;

  if (!Diet.length) {
    const diets = await axios.get(url);
    const dietsApi = diets.data.results;
    const mappedInfo = dietsApi.map((e) => {
      return {
        id: e.id,
        name: e.title,
        image: e.image,
        diets: e.diets,
      };
    });
    Diet.bulkCreate(mappedInfo);
    const dietsDb = Diet.findAll();
    return dietsDb;
  } else {
    const dietsDb = Diet.findAll();
    return dietsDb;
  }
};

module.exports = {
  getDiets,
};
