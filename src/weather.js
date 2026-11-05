

async function getWeather(location) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&include=current&contentType=json`;

	const response = await fetch(url);

	const data = await response.json();

	console.log(data);

	return data;
}

export { getWeather }