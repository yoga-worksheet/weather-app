import React, { useState } from "react";
import { FrontPage } from "./FrontPage";
import { Button } from "./Button";
import { WeatherCard } from "./WeatherCard";
import { dateBuilder, timeBuilder, getHour } from './TimeStamp';
import { colorPicker } from "./ColorPicker";

export const App = () => {
	const [display, setDisplay] = useState({
		frontPage: true,
		backButton: false,
		weather: false,
	});
	const [weather, setWeather] = useState({});
	const [color, setColor] = useState("");
	const [query, setQuery] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const api = {
		key: "60a1d6933cfebcdffed8769cfd5496d1",
		base: "http://api.openweathermap.org/data/2.5/",
	};

	const search = () => {
		if (query === "") setErrorMessage("City name can't be empty");
		else {
			setWeather({});
			const request = async () => {
				const response = await fetch(
					`${api.base}weather?q=${query}&units=metric&appid=${api.key}`
				);
				const result = await response.json();
				if (result.cod === "404") setErrorMessage(result.message);
				else {
					setTimeout(() => {
						setWeather(result);
					}, 2000);
					setColor(colorPicker(getHour(result.dt, result.timezone), result.weather[0].main))
					setDisplay((prevState) => {
						return {
							frontPage: false,
							weather: true,
							backButton: true,
						};
					});
					setQuery("");
				}
			};

			request();
		}
	};

	return (
		<div className={ 'app ' + color }
		>
			<div className="container flex center column">
				<FrontPage
					display={display.frontPage}
					query={query}
					setQuery={setQuery}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
					search={search}
				/>
				<Button
					classList={
						Object.keys(weather).length !== 0
							? display.backButton
								? "back-button"
								: ""
							: "back-button hide"
					}
					type="button"
					onClick={() => {
						setDisplay((prevState) => {
							return {
								frontPage: true,
								backButton: false,
								weather: false,
							};
						});
						setWeather({});
					}}
				/>
				<WeatherCard
					display={display}
					weather={weather}
					timeBuilder={timeBuilder}
					dateBuilder={dateBuilder}
				/>
				<h1
					className={
						display.frontPage
							? "onload hide"
							: Object.keys(weather).length === 0
								? "onload"
								: "onload hide"
					}
				>
					Loading ...
				</h1>
			</div>
		</div>
	);
};
