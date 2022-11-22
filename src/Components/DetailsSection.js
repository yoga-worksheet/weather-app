import React from 'react';

export const DetailSection = ({ weather, timeBuilder }) => {
    return (
        <div className="details">
            <div className="flex column gap-1">
                <p>Sunrise on {timeBuilder(weather.sys.sunrise, weather.timezone)}</p>
                <p>Sunset on {timeBuilder(weather.sys.sunset, weather.timezone)}</p>
                <p>
                    Wind Speed : {weather.wind.speed}{" "}
                    <sup>m/s</sup>
                </p>
                <p>Humidity : {weather.main.humidity}%</p>
                <p>Cloud : {weather.clouds.all}%</p>
                {
                    weather.hasOwnProperty('rain')
                        ? <p>Rain Volume : {weather.rain['1h']} mm</p>
                        : ''
                }
                {
                    weather.hasOwnProperty('snow')
                        ? <p>Rain Volume : {weather.snow['1h']} mm</p>
                        : ''
                }
            </div>
        </div>
    )
}