// weather.js
import axios from 'axios';
import chalk from 'chalk';

const API_KEY = 'your_api_key_here';

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const weather = response.data;
    const temp = weather.main.temp;
    const description = weather.weather[0].description;

    console.log(chalk.blue(`Weather in ${city}:`));
    console.log(chalk.green(`Temperature: ${temp}°C`));
    console.log(chalk.yellow(`Description: ${description}`));
  } catch (error) {
    console.log(chalk.red('Error fetching weather data. Please check the city name or your API key.'));
  }
}

