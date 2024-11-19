class Weather {
    constructor(temp, description, humidity, pressure, windSpeed) {
        this.temp = temp;
        this.description = description;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    static fromApiResponse(data) {
        return new Weather(
            data.main.temp,
            data.weather[0].description,
            data.main.humidity,
            data.main.pressure,
            data.wind.speed
        );
    }
}

module.exports = Weather;
