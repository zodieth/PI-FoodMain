const express = require("express");

require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const checkData = require("../middlewares/checkData");
const { Recipe } = require("../models/Recipe");
const Diet = require("../models/Diet");

recipesRouter = express.Router();

recipesRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const recipeByName = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}/&apiKey=${API_KEY}`
    );
    const recipeName = recipeByName.data.results;
    if (name) {
      if (!recipeName.length) {
        res.status(404).send("Recipe not found");
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

recipesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipeIdApi = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    const array = [];
    array.push(recipeIdApi.data);

    if (!array.length) {
      res.status(404).send("id not found");
    } else {
      const idMap = array.map((e) => {
        return {
          id: e.id,
          title: e.title,
          image: e.image,
          diets: e.diets,
        };
      });

      res.json(idMap);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

recipesRouter.post("/", checkData, async (req, res) => {
  try {
    const form = await Recipe.findOrCreate({
      where: {
        name: name,
        summary: summary,
        healthScore: healthScore,
        stepByStep: stepByStep,
      },
    });

    console.log(form);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = recipesRouter;
