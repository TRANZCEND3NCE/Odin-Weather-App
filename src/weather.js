

async function getWeather(location) {
	// const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&include=current&contentType=json`;

	const response = await fetch(url);

	if (response.status === 429) {
		throw new Error(
			"Weather API rate limit reached. Please try again later."
		);
	}

	if (response.status === 400) {
		throw new Error(
			"The weather service couldn't process that request. Check the location and try again."
		);
	}

	if (response.status === 401) {
		throw new Error(
			"Weather service authentication failed. Please try again later."
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

	if (!current) {
		throw new Error("Weather data is unavailable for this location.");
	}

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