const { Router } = require("express");
const { getDiets } = require("../controllers/getDiets");

const dietRouter = Router();

module.exports = dietRouter;

dietRouter.get("/", async (req, res) => {
  const diets = await getDiets();
  try {
    res.json(diets);
  } catch (error) {
    res.status(404).send(error);
  }
});
