import "./style.css";
import { getWeather, processWeatherData } from "./weather.js";

async function displayWeather() {
	const data = await getWeather("London, UK");

	const weather = processWeatherData(data);

	console.log(weather);
}

displayWeather();