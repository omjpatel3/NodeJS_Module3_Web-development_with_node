const express = require("express");
const weatherController = require("../controllers/weatherController");

const router = express.Router();

// Route to get weather by city
router.get("/city/:city", weatherController.getWeatherByCity);

// Route to get country, state, city by coordinates
router.get("/location", weatherController.getCountryStateCity);

module.exports = router;
