const days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const dateBuilder = (unix_time, timezone_offset) => {
	const dateFormat = new Date(unix_time * 1000 + timezone_offset * 1000);
	const day = days[dateFormat.getUTCDay()];
	const date = dateFormat.getUTCDate();
	const month = months[dateFormat.getUTCMonth()];
	const year = dateFormat.getUTCFullYear();
	return `${day}, ${date} ${month} ${year}`;
};

const timeBuilder = (unix_time, timezone_offset) => {
	const dateFormat = new Date(unix_time * 1000 + timezone_offset * 1000);
	const hour = dateFormat.getUTCHours();
	const minute = dateFormat.getUTCMinutes();
	return `${hour}:${minute}`;
};

const getHour = (unix_time, timezone_offset) =>
	new Date(unix_time * 1000 + timezone_offset * 1000).getUTCHours();

export { dateBuilder, timeBuilder, getHour };