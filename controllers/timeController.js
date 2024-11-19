const axios = require('axios');
const apiKey = 'PEHTCIQFD9CO'; // Replace with your TimeZoneDB API Key

const getWorldTime = async (req, res) => {
    try {
        // Example cities with their time zone
        const cities = ['America/New_York', 'Europe/London', 'Asia/Kolkata', 'Australia/Sydney'];
        const times = [];

        for (let city of cities) {
            const response = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone`, {
                params: {
                    key: apiKey,
                    format: 'json',
                    by: 'zone',
                    zone: city,
                }
            });
            times.push({
                city,
                time: response.data.formatted,
            });
        }

        res.render('index', { times });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong!');
    }
};

module.exports = { getWorldTime };
