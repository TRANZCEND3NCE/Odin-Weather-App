

async function getWeather(location) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&include=current&contentType=json`;

	const response = await fetch(url);

	if (response.status === 429) {
		throw new Error(
			"Weather API rate limit reached. Please try again later."
		);
	}

	if (!response.ok) {
		throw new Error(`Weather request failed: ${response.status}`);
	}

	const data = await response.json();

	return data;
}

function processWeatherData(data) {
	const current = data.currentConditions;

	return {
		location: data.resolvedAddress,
		temperature: current.temp,
		feelsLike: current.feelslike,
		condition: current.conditions,
		humidity: current.humidity,
		windSpeed: current.windspeed,
	};
}

export { getWeather, processWeatherData }