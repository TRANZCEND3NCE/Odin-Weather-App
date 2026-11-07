

function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9);
}

function formatTemperature(fahrenheit, unit) {
	const value = unit === "C" ? fahrenheitToCelsius(fahrenheit) : fahrenheit;

	return `${value.toFixed(1)}°${unit}`;
}

function renderWeather(weather, unit = "F") {
	const weatherDisplay = document.querySelector("#weather-display");

	const location = document.createElement("h2");
	location.textContent = weather.location;

	const temperature = document.createElement("p");
	temperature.textContent = `Temperature: ${formatTemperature(weather.temperature, unit)}`;

	const feelsLike = document.createElement("p");
	feelsLike.textContent = `Feels Like: ${formatTemperature(weather.feelsLike, unit)}`;

	const condition = document.createElement("p");
	condition.textContent = `Conditions: ${weather.condition}`;

	const humidity = document.createElement("p");
	humidity.textContent = `Humidity: ${weather.humidity}%`;

	const windSpeed = document.createElement("p");
	windSpeed.textContent = `Wind Speed: ${weather.windSpeed} mph`;

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