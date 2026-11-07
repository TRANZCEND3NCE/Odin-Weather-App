import "./style.css";
import { getWeather, processWeatherData } from "./weather.js";
import { renderWeather } from "./dom.js";

const form = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location");
const unitToggle = document.querySelector("#unit-toggle");

let currentWeather = null;
let currentUnit = "F";

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const location = locationInput.value.trim();

	if (!location) return;

	try {
		const data = await getWeather(location);

		currentWeather = processWeatherData(data);

		renderWeather(currentWeather, currentUnit);
	} catch (error) {
		console.error("Unable to retrieve weather:", error.message);
	}
});

unitToggle.addEventListener("click", () => {
	if (!currentWeather) return;

	currentUnit = currentUnit === "F" ? "C" : "F";

	renderWeather(currentWeather, currentUnit);

	unitToggle.textContent = `Show °${currentUnit === "F" ? "C" : "F"}`;
});