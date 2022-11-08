const checkData = async (req, res, next) => {
  const { name, summary, healthScore, stepByStep } = req.body;
  if (!name) {
    return res.status(404).send("Name is required");
  }

  if (!summary) {
    return res.status(404).send("Summary is required");
  }

  if (!healthScore) {
    return res.status(404).send("Health Score is required");
  }

  if (!stepByStep) {
    return res.status(404).send("Step By Step is required");
  }

  next();
};

module.exports = checkData;
