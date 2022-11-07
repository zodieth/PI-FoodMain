require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const checkData = async (req, res, next) => {
  next();
};

module.exports = checkData;
