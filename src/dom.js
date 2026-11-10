import { createElement, Thermometer, CloudSun, Droplets, Wind, RefreshCcw } from "lucide";

function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9);
}

function formatTemperature(fahrenheit, unit) {
	const value = unit === "C" ? fahrenheitToCelsius(fahrenheit) : fahrenheit;

	return `${value.toFixed(1)}°${unit}`;
}

function createWeatherCard(label, value, icon) {
	const card = document.createElement("div");
	card.classList.add("weather-card");

	const labelElement = document.createElement("span");
	labelElement.classList.add("weather-card-label");
	labelElement.textContent = label;

	if (icon) {
		const iconElement = createElement(icon, {
			"aria-hidden": "true",
			width: 18,
			height: 18,
		});

		labelElement.prepend(iconElement);
	}

	const valueElement = document.createElement("span");
	valueElement.classList.add("weather-card-value");
	valueElement.textContent = value;

	card.append(labelElement, valueElement);

	return card;
}

function createUnitsCard(unit) {
	const button = document.createElement("button");
	button.type = "button";
	button.classList.add("weather-card", "units-card");
	button.setAttribute("aria-label", "Toggle temperature units");

	const labelElement = document.createElement("span");
	labelElement.classList.add("weather-card-label");

	const iconElement = createElement(RefreshCcw, {
		"aria-hidden": "true",
		width: 18,
		height: 18,
	});

	labelElement.append(iconElement, "Units");

	const valueElement = document.createElement("span");
	valueElement.classList.add("weather-card-value");
	valueElement.textContent = unit === "F" ? "°F / °C" : "°C / °F";

	button.append(labelElement, valueElement);

	return button;
}

function renderWeather(weather, unit = "F") {
	const weatherDisplay = document.querySelector("#weather-display");

	const summary = document.createElement("div");
	summary.classList.add("weather-summary");

	const summaryText = document.createElement("div");
	summaryText.classList.add("weather-summary-text");

	const location = document.createElement("h2");
	location.classList.add("weather-location");
	location.textContent = weather.location;

	const temperature = document.createElement("p");
	temperature.classList.add("weather-temperature");
	temperature.textContent = formatTemperature(weather.temperature, unit);

	const condition = document.createElement("p");
	condition.classList.add("weather-condition");
	condition.textContent = weather.condition;

	summaryText.append(location, temperature, condition);

	const summaryIcon = document.createElement("div");
	summaryIcon.classList.add("weather-summary-icon");

	const conditionIcon = createElement(CloudSun, {
		"aria-hidden": "true",
		width: 42,
		height: 42,
	});

	summaryIcon.append(conditionIcon);

	summary.append(summaryText, summaryIcon);

	const details = document.createElement("div");
	details.classList.add("weather-details");

	const feelsLike = createWeatherCard("Feels Like", formatTemperature(weather.feelsLike, unit), Thermometer);

	const humidity = createWeatherCard("Humidity", `${weather.humidity}%`, Droplets);

	const windSpeed = createWeatherCard("Wind Speed", `${weather.windSpeed} mph`, Wind)

	const units = createUnitsCard(unit);

	details.append(feelsLike, humidity, windSpeed, units);

	weatherDisplay.replaceChildren(summary, details);
}

export { renderWeather };