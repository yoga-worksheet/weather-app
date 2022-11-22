export const colorPicker = (hour, weather) => {
	const time = hour <= 18 && hour >= 6 ? "day" : "night";
	let theme = "";
	switch (weather) {
		case "Rain":
		case "Drizzle":
			theme = "rain";
			break;
		case "Snow":
			theme = "snow";
			break;
		case "Clear":
			theme = "clear";
			break;
		case "Clouds":
			theme = "clouds";
			break;
		case "Thunderstorm":
			theme = "thunder";
			break;
		default:
			theme = "common";
			break;
	}
	if (theme === "common") return "";
	return `${time}-${theme}`;
};
