# Migraine Predictor

A web-based migraine risk predictor that uses environmental data and personal factors to estimate your likelihood of experiencing a migraine. **No backend required** - works as a static GitHub Pages site!

## 🌟 Features

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

## 🚀 Quick Deployment to GitHub Pages

### Option 1: Deploy Your Own (Recommended)

1. **Fork this repository**
   - Click "Fork" at the top right of this page
   - This creates your own copy

2. **Get a free API key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
   - Sign up for a free account (1 million calls/month free)
   - Copy your API key

3. **Add your API key**
   - Edit `index.html` in your fork
   - Find line 719: `const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
   - Commit the change

4. **Enable GitHub Pages**
   - Go to your repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

5. **Access your app!**
   - Your site will be live at: `https://yourusername.github.io/Migraine-Predictor-App/`
   - It works immediately - no installation, no server, just open and use!

### Option 2: Use Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/FYIFriday/Migraine-Predictor-App.git
   cd Migraine-Predictor-App
   ```

2. **Get a free API key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
   - Sign up and copy your API key

3. **Add your API key**
   - Open `index.html` in a text editor
   - Find line 719: `const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace with your actual API key

4. **Open in browser**
   - Simply double-click `index.html` or
   - Run a local server: `python -m http.server 8000`
   - Navigate to `http://localhost:8000`

## 📊 Science-Based Algorithm

The prediction algorithm uses research-based weights derived from peer-reviewed migraine studies (2024):

- **20%** - Barometric pressure changes (primary environmental trigger)
- **15%** - Sleep quality (oxidative stress pathway)
- **12%** - Humidity (28% higher odds with 26.5% increase)
- **12%** - Temperature (19-24% increased risk per 5°C change)
- **10%** - Stress (cortisol/inflammation pathway)
- **8%** - Air quality (3-5% per pollutant increment)
- Plus weighted contributions from precipitation, wind, time of day, food, caffeine, screen time, and menstrual cycle

### Research References
- Barometric pressure: 20% of migraine patients are weather-sensitive
- Humidity: 26.5% increase → 28% higher migraine odds (warm seasons)
- Temperature: 5°C change → 19-24% increased risk within 1-3 days
- Air quality: PM2.5, NO2, O3 increase risk by 3-5% per IQR
- Sleep: Major trigger via cortisol increase and oxidative stress
- Stress: Direct cortisol/inflammation pathway

**Sources:** Current Pain and Headache Reports (2024), Journal of Headache and Pain, PMC studies

## 💡 How to Use

### First Visit
1. Open the page - it loads automatically!
2. Allow location access when prompted (or enter ZIP/address manually)
3. Accept cookies if you want your preferences saved
4. Select your typical migraine frequency (1-6)

### Daily Use
1. Open the page
2. View your current **Migraine Risk Index** (0-100)
3. Optionally expand **"+ Advanced Mode"** to adjust personal factors
4. Review individual factor breakdowns with hover tooltips

### Understanding Results
- **0-30**: Low risk - favorable conditions
- **30-60**: Moderate risk - some triggering factors present
- **60-100**: High risk - multiple triggers active, take precautions

## 🔒 Privacy & Security

- **Location data**: Used only to fetch weather, never stored or shared
- **Personal data**: Stored locally in browser (if cookies accepted)
- **API key**: Visible in source code (standard for static sites with free tier APIs)
- **No tracking**: Zero analytics, no third-party scripts, no data collection

### About API Key Visibility
Since this is a static site (no backend), the API key is in the client-side code. This is **acceptable** because:
- WeatherAPI.com free tier includes 1 million calls/month
- Key is rate-limited per domain
- No sensitive data is accessed
- Standard practice for public demo tools

If you deploy your own version, you get your own key with your own rate limits!

## 🛠 Technical Details

### Architecture
- **Pure HTML/CSS/JavaScript** - No build step, no dependencies
- **Static site** - Can be hosted on GitHub Pages, Netlify, Vercel, etc.
- **Client-side only** - No server, no backend, no database
- **Single file** - `index.html` contains everything

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any modern browser with:
  - ES6+ JavaScript
  - Geolocation API
  - Fetch API
  - LocalStorage

### API Usage
- **WeatherAPI.com** for all environmental data
- **1 API call per page load** (when location detected)
- **Additional calls** only when user manually changes location
- Free tier: 1,000,000 calls/month

## 📝 Customization

Want to modify the algorithm or UI? It's all in one file!

- **Lines 1-515**: CSS styling
- **Lines 517-714**: HTML structure
- **Lines 716-1302**: JavaScript logic
  - Line 719: API key configuration
  - Lines 892-1044: Risk calculation algorithms
  - Lines 1046-1131: Individual factor scoring functions

## 🤝 Contributing

Pull requests welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (try different locations, weather conditions)
5. Update documentation if needed
6. Submit a pull request

### Ideas for Contributions
- Add historical tracking (store past readings)
- Add weather forecasting (predict risk 24-48 hours ahead)
- Add export functionality (CSV download of data)
- Add more personal factors (alcohol, exercise, etc.)
- Improve mobile UI
- Add dark mode

## ❓ Troubleshooting

**"Please configure your API key" message**
- You need to add your WeatherAPI.com API key to line 719 in `index.html`

**Weather data not loading**
- Check your internet connection
- Verify your API key is valid at WeatherAPI.com
- Check browser console for errors
- Try entering your location manually

**Location access denied**
- A modal will appear asking for ZIP code or address
- Enter your location manually
- App explains why location is needed (weather data only)

**Numbers seem off**
- Algorithm is calibrated for average sensitivity
- Adjust your migraine frequency (1-6) at the top
- Each person has unique triggers - use as a general guide

## 📄 License

MIT License - feel free to use, modify, and distribute!

## 🙏 Acknowledgments

Built with research-backed science to help migraine sufferers anticipate and manage their condition. Based on peer-reviewed studies from:
- Current Pain and Headache Reports
- The Journal of Headache and Pain
- PubMed Central (PMC) medical research
- American Migraine Foundation

---

**Live Demo**: [https://fyifriday.github.io/Migraine-Predictor-App/](https://fyifriday.github.io/Migraine-Predictor-App/) *(coming soon)*

Built with ❤️ for migraine awareness and management.
