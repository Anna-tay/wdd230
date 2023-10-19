// Simulate data fetching for current weather, wind chill, and tomorrow's weather.
const currentTemperature = 60;
const windSpeed = 15;
const tomorrowForecast = "Sunny with a high of 75°F";

// Update the content of the weather cards with JavaScript.
const currentWeatherCard = document.getElementById('current-weather');
const currentTemperatureElement = document.getElementById('current-temperature');
currentTemperatureElement.textContent = `${currentTemperature}°F`;

const windChillCard = document.getElementById('wind-chill');
const windChillValueElement = document.getElementById('wind-chill-value');
const windChill = calculateWindChill(currentTemperature, windSpeed);
windChillValueElement.textContent = `${windChill}°F`;

const tomorrowWeatherCard = document.getElementById('tomorrow-weather');
const tomorrowForecastElement = document.getElementById('tomorrow-forecast');
tomorrowForecastElement.textContent = tomorrowForecast;

function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature is in Celsius. If so, convert it to Fahrenheit.
    if (temperature <= 10) {
        temperature = temperature * (9 / 5) + 32;
    }

    // Calculate wind chill using the formula
    if (temperature <= 50 && windSpeed >= 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Round to 2 decimal places
    } else {
        return temperature; // If conditions are not met, return the actual temperature.
    }
}
