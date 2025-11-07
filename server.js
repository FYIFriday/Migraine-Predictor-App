const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (adjust in production)
app.use(cors());

// Serve static files
app.use(express.static(__dirname));

// Weather API proxy endpoint
app.get('/api/weather', async (req, res) => {
    const location = req.query.location || 'auto:ip';
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: 'API key not configured. Please add WEATHER_API_KEY to .env file'
        });
    }

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
        );

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Weather API Error:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`🌤️  Migraine Predictor server running at http://localhost:${PORT}`);
    console.log(`📊 Open http://localhost:${PORT}/migraine-predictor.html to use the app`);
});
