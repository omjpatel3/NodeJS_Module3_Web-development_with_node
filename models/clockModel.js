const axios = require('axios');

exports.getWorldTime = async (cities) => {
    const apiKey = 'YOUR_RAPIDAPI_KEY';  // Replace with your actual RapidAPI Key
    const baseUrl = 'https://world-time1.p.rapidapi.com/timezone';

    try {
        const times = await Promise.all(
            cities.map(async (city) => {
                // Fetch time for each city
                const response = await axios.get(`${baseUrl}/${city}`, {
                    headers: {
                        'X-RapidAPI-Host': 'world-time1.p.rapidapi.com',
                        'X-RapidAPI-Key': apiKey
                    }
                });

                if (response.data && response.data.datetime) {
                    return { city, time: response.data.datetime.slice(11, 19) }; // Extract time from the response
                } else {
                    return { city, time: 'Error fetching time' };
                }
            })
        );
        return times;
    } catch (error) {
        console.error("Error fetching world times:", error);
        return [];
    }
};
