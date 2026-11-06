import "./style.css";
import { getWeather, processWeatherData } from "./weather.js";

const form = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const location = locationInput.value.trim();

	if (!location) return;

	const data = await getWeather(location);

	const weather = processWeatherData(data);

	console.log(weather);
})