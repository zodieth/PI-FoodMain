const express = require("express");

require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const checkData = require("../middlewares/checkData");

recipesRouter = express.Router();
recipesRouter.use(checkData);

recipesRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const recipeByName = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}/&apiKey=${API_KEY}`
    );
    const recipeName = recipeByName.data.results;

    if (name) {
      if (!recipeName.length) {
        res.status(404).send("El nombre ingresado no existe");
      } else {
        res.send(recipeName);
      }
    } else {
      const recipes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
      );
      res.send(recipes.data.results);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

// recipesRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const recipeIdApi = await axios.get(
//     `https://api.spoonacular.com/recipes/${id}/information?apiKey=$${API_KEY}`
//   );

//   const idMap = recipeIdApi.data.map((e) => {
//     return {
//       id: e.id,
//       title: e.title,
//       image: e.image,
//       diets: e.diets,
//     };
//   });

//   res.send(recipeIdApi.data);
// });

module.exports = recipesRouter;
