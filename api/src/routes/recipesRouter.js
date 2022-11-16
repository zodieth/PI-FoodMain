const express = require("express");

require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const checkData = require("../middlewares/checkData");
const { Recipe } = require("../db");
const Diet = require("../models/Recipe");

recipesRouter = express.Router();

recipesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  //----------------------------------CON API----------------------------------------------
  try {
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
      const recipesMap = recipes.data.results.map((e) => {
        return {
          id: e.id,
          title: e.title,
          image: e.image,
          diets: e.diets,
          stepByStep: e.instructions,
        };
      });

      res.send(recipesMap);
    }
  } catch (error) {
    res.status(404).send(error);
  }
  //----------------------------------CON API----------------------------------------------
});

recipesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  //----------------------------------CON API----------------------------------------------

  //   try {
  //     const recipeIdApi = await axios.get(
  //       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  //     );

  //     const array = [];
  //     array.push(recipeIdApi.data);

  //     if (!array.length) {
  //       res.status(404).send("id not found");
  //     } else {
  //       const idMap = array.map((e) => {
  //         return {
  //           id: e.id,
  //           title: e.title,
  //           image: e.image,
  //           diets: e.diets,
  //           stepByStep: e.instructions,
  //         };
  //       });

  //       res.json(idMap);
  //     }
  //   } } catch (error) {
  // res.status(404).send(error);
  // }

  //----------------------------------CON API----------------------------------------------

  try {
    const dbId = await Recipe.findAll({
      where: {
        id: id,
      },
    });

    const idMap = dbId.map((e) => {
      return {
        id: e.id,
        title: e.name,
        image: e.image,
        diets: e.types,
        stepByStep: e.stepByStep,
      };
    });

    if (!idMap.length) {
      res.status(404).send("id not found");
    } else {
      res.json(idMap);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

recipesRouter.post("/", async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      name,
      image,
      types,
      summary,
      healthScore,
      stepByStep,
    });

    db = await Diet.findAll({
      where: { name: types },
    });
    console.log(db);
    await newRecipe.addDiet(db);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = recipesRouter;
