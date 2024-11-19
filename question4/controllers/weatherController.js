const axios = require("axios");

// API Keys
const WEATHER_API_KEY = "f09c4ac5832fa0010918d82eab9c1b76";
const LOCATION_API_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

exports.getWeatherByCity = async (req, res) => {
    try {
        const { city } = req.params;

        // Fetch weather data
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
        );

        const weatherData = weatherResponse.data;

        res.render("weather", {
            city: city.charAt(0).toUpperCase() + city.slice(1),
            weather: weatherData,
        });
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(500).send("Error fetching weather data.");
    }
};

exports.getCountryStateCity = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        // Fetch location data
        const locationResponse = await axios.get(`${LOCATION_API_URL}?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        const locationData = locationResponse.data;

        res.json(locationData);
    } catch (error) {
        console.error("Error fetching location data:", error.message);
        res.status(500).send("Error fetching location data.");
    }
};
