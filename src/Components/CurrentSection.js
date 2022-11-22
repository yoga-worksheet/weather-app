import React from 'react';

export const CurrentSection = ({ weather, dateBuilder }) => {
    return (
        <div className="current flex column space-between">
            <h4 className="mb-3">
                {weather.name}, {weather.sys.country} - {dateBuilder(weather.dt, weather.timezone)}
            </h4>
            <h1>
                {Math.floor(weather.main.temp)}
                <sup>&#0176;C</sup>
            </h1>
            <h1 className="bold mb-2">
                {weather.weather[0].main}
            </h1>
            <h5 className="mb-2">
                Min : {Math.floor(weather.main.temp_min)}
                <sup>&#0176;C</sup> | Max :{" "}
                {Math.floor(weather.main.temp_max)}
                <sup>&#0176;C</sup>
            </h5>
            <h5>
                It feels like{" "}
                {Math.floor(weather.main.feels_like)}
                <sup>&#0176;C</sup> and it has {weather.weather[0].description}
            </h5>
        </div>
    )
}