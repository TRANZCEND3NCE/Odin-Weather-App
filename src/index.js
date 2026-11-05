import "./style.css";
import { getWeather } from "./weather.js";

async function displayWeather() {
	const weather = await getWeather("London, UK");

	console.log(weather.currentConditions.temp);
}

displayWeather();