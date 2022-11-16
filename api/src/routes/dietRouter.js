const { Router } = require("express");
const { getRecipes } = require("../controllers/getRecipes");

const dietRouter = Router();

module.exports = dietRouter;

dietRouter.get("/", async (req, res) => {
  const diets = await getRecipes();
  try {
    res.json(diets);
  } catch (error) {
    res.status(404).send(error);
  }
});
