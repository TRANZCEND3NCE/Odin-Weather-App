import "./style.css";
import { getWeather, processWeatherData } from "./weather.js";
import { renderWeather } from "./dom.js";

const form = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const location = locationInput.value.trim();

	if (!location) return;

	try {
		const data = await getWeather(location);

		const weather = processWeatherData(data);

		renderWeather(weather);
	} catch (error) {
		console.error("Unable to retrieve weather:", error.message);
	}
});