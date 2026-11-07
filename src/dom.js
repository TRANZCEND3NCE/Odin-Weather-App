

function renderWeather(weather) {
	const weatherDisplay = document.querySelector("#weather-display");

	const location = document.createElement("h2");
	location.textContent = weather.location;

	const temperature = document.createElement("p");
	temperature.textContent = `Temperature: ${weather.temperature}°F`;

	const feelsLike = document.createElement("p");
	feelsLike.textContent = `Feels Like: ${weather.feelsLike}°F`;

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