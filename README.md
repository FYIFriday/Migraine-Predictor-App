# Migraine Predictor App

A web-based migraine risk predictor that uses environmental data and personal factors to estimate your likelihood of experiencing a migraine.

## Features

### Environmental Factors (Auto-Detected)
- **Barometric Pressure** - Most significant weather-related trigger
- **Temperature & Humidity** - Temperature swings and high humidity increase risk
- **Air Quality Index (AQI)** - PM2.5, NO2, and O3 pollutants
- **Precipitation & Wind** - Indicators of weather front movements
- **Time of Day** - Circadian rhythm considerations

### Personal Factors (Optional - Advanced Mode)
- Sleep quality (0-10 scale)
- Stress level (0-10 scale)
- Food intake (ate today, ate enough)
- Caffeine intake (with coffee cup equivalents)
- Screen time (hours)
- Menstrual cycle proximity (days)

### Migraine Sensitivity Scale
Set your typical migraine frequency (1-6) to calibrate risk calculations:
- **1**: 0-1 per month (low sensitivity)
- **2**: 1-2 per month
- **3**: 2-4 per month
- **4**: 4-5 per month
- **5**: 5+ per month
- **6**: "Oh God" - 10+ per month (high sensitivity)

## Science-Based Algorithm

The prediction algorithm uses research-based weights derived from peer-reviewed migraine studies:

- **20%** - Barometric pressure changes (primary environmental trigger)
- **15%** - Sleep quality (oxidative stress pathway)
- **12%** - Humidity (28% higher odds with 26.5% increase)
- **12%** - Temperature (19-24% increased risk per 5°C change)
- **10%** - Stress (cortisol/inflammation pathway)
- **8%** - Air quality (3-5% per pollutant increment)
- Plus weighted contributions from precipitation, wind, time of day, food, caffeine, screen time, and menstrual cycle

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- A free WeatherAPI.com API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FYIFriday/Migraine-Predictor-App.git
   cd Migraine-Predictor-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get a free API key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
   - Sign up for a free account
   - Copy your API key

4. **Configure environment**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API key:
   ```
   WEATHER_API_KEY=your_actual_api_key_here
   ```

5. **Start the server**
   ```bash
   npm start
   ```

6. **Open the app**
   - Navigate to `http://localhost:3000/migraine-predictor.html`
   - The app will automatically fetch weather data and calculate your migraine risk!

## Usage

### First Time Setup
1. When prompted, allow location access (or enter your ZIP/address manually)
2. Accept cookies if you want your preferences saved
3. Select your typical migraine frequency at the top

### Daily Use
1. Open the app - it automatically loads with your saved preferences
2. View your current Migraine Risk Index (0-100 scale)
3. Optionally expand "Advanced Mode" to add personal factors
4. Review individual factor breakdowns to understand what's contributing to your risk

### Understanding Your Results
- **0-30**: Low risk - favorable conditions
- **30-60**: Moderate risk - some triggering factors present
- **60-100**: High risk - multiple triggers active, take precautions

## API Key Security

Your WeatherAPI.com API key is stored in the `.env` file on the server (never in the browser). The app uses a proxy endpoint so your key is never exposed to clients. This approach:
- Keeps your API key secure
- Prevents unauthorized use
- Allows rate limiting and monitoring
- Works seamlessly for end users

## Development

### Project Structure
```
Migraine-Predictor-App/
├── migraine-predictor.html  # Main web application
├── server.js                 # Express proxy server
├── package.json              # Dependencies
├── .env                      # API key (not committed)
├── .env.example              # Template for .env
└── README.md                 # This file
```

### Running in Development Mode
```bash
npm run dev  # Uses nodemon for auto-restart
```

## Research References

The algorithm is based on recent migraine research:
- Barometric pressure: 20% of migraine patients are weather-sensitive
- Humidity: 26.5% increase → 28% higher migraine odds (warm seasons)
- Temperature: 5°C change → 19-24% increased risk within 1-3 days
- Air quality: PM2.5, NO2, O3 increase risk by 3-5% per IQR
- Sleep: Major trigger via cortisol increase and oxidative stress
- Stress: Direct cortisol/inflammation pathway

Sources: Current Pain and Headache Reports (2024), Journal of Headache and Pain, PMC studies

## Privacy

- **Location data**: Used only to fetch weather, never stored or shared
- **Personal data**: Stored locally in browser (if cookies accepted)
- **API calls**: Proxied through local server, your API key never exposed
- **No tracking**: Zero analytics, no third-party scripts

## License

MIT License - feel free to use and modify!

## Contributing

Pull requests welcome! To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Troubleshooting

**"API key not configured" error**
- Make sure you created a `.env` file with your API key
- Restart the server after adding the key

**Weather data not loading**
- Check your internet connection
- Verify your API key is valid at WeatherAPI.com
- Try entering your location manually

**App won't start**
- Make sure you ran `npm install`
- Check that port 3000 isn't already in use
- Try `npm start` instead of `npm run dev`

## Support

For issues or questions:
- Open an issue on GitHub
- Check WeatherAPI.com status if weather data fails
- Verify your API key hasn't hit rate limits

---

Built with research-backed science to help migraine sufferers anticipate and manage their condition.
