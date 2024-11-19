const express = require("express");
const path = require("path");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/weather", weatherRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Weather App! Use /weather/city/:city to get weather data.");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
