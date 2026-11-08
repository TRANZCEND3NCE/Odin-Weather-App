

function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9);
}

function formatTemperature(fahrenheit, unit) {
	const value = unit === "C" ? fahrenheitToCelsius(fahrenheit) : fahrenheit;

	return `${value.toFixed(1)}°${unit}`;
}

function createWeatherCard(label, value) {
	const card = document.createElement("p");

	const labelElement = document.createElement("span");
	labelElement.textContent = label;

	const valueElement = document.createElement("span");
	valueElement.textContent = value;

	card.append(labelElement, valueElement);

	return card;
}

function renderWeather(weather, unit = "F") {
	const weatherDisplay = document.querySelector("#weather-display");

	const location = document.createElement("h2");
	location.textContent = weather.location;

	const temperature = createWeatherCard("Temperature", formatTemperature(weather.temperature, unit));

	const feelsLike = createWeatherCard("Feels Like", formatTemperature(weather.feelsLike, unit));

	const condition = createWeatherCard("Conditions", weather.condition);

	const humidity = createWeatherCard("Humidity", `${weather.humidity}%`);

	const windSpeed = createWeatherCard("Wind Speed", `${weather.windSpeed} mph`)

	weatherDisplay.replaceChildren(
		location,
		temperature,
		feelsLike,
		condition,
		humidity,
		windSpeed
	);
}

export { renderWeather };