import React from 'react';
import { CurrentSection } from './CurrentSection';
import { DetailSection } from './DetailsSection';

export const WeatherCard = ({ weather, display, timeBuilder, dateBuilder }) => {
    return (
        <div
            className={
                Object.keys(weather).length !== 0
                    ? display.weather
                        ? "weather flex wrap gap-2 center space-between"
                        : ""
                    : "weather flex wrap gap-2 center space-between hide"
            }
        >
            {Object.keys(weather).length !== 0 ? (
                <>
                    <CurrentSection 
                        weather={weather}
                        dateBuilder={dateBuilder}
                    />
                    <DetailSection
                        weather={weather}
                        timeBuilder={timeBuilder}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    )
}