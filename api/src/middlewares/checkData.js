const checkData = async (req, res, next) => {
  const { name, summary, healthScore, stepByStep } = req.body;
  if (!name) {
    alert("Name is required");
  }

  if (!summary) {
    alert("Summary is required");
  }

  if (!healthScore) {
    alert("Health Score is required");
  }

  if (!stepByStep) {
    alert("Step By Step is required");
  }

  next();
};

module.exports = checkData;
