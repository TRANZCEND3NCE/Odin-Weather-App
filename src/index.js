import "./style.css";
import { getWeather, processWeatherData } from "./weather.js";
import { renderWeather } from "./dom.js";
import { createElement, Search } from "lucide";

const form = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location");
const errorDisplay = document.querySelector("#weather-error");
const searchButton = document.querySelector("#search-button");
const weatherDisplay = document.querySelector("#weather-display");

const searchIcon = createElement(Search, {
	"aria-hidden": "true",
	width: 20,
	height: 20,
});

searchButton.append(searchIcon);

let currentWeather = null;
let currentUnit = "F";

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const location = locationInput.value.trim();

	if (!location) return;

	errorDisplay.textContent = "";
	errorDisplay.hidden = true;

	try {
		const data = await getWeather(location);

		currentWeather = processWeatherData(data);

		renderWeather(currentWeather, currentUnit);
	} catch (error) {
		console.error("Unable to retrieve weather:", error.message);

		errorDisplay.textContent = error.message;
		errorDisplay.hidden = false;
	}
});

weatherDisplay.addEventListener("click", (e) => {
	const unitsCard = e.target.closest(".units-card");

	if (!unitsCard || !currentWeather) return;

	currentUnit = currentUnit === "F" ? "C" : "F";
	renderWeather(currentWeather, currentUnit);
});

const sampleWeather = {
  location: "Vancouver, Canada",
  temperature: 68,
  feelsLike: 67,
  condition: "Partially cloudy",
  humidity: 72,
  windSpeed: 5,
};

currentWeather = sampleWeather;

renderWeather(currentWeather, currentUnit); 