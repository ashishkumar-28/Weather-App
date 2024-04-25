import React from 'react';
import './WeatherInfo.css'; 
import cloudGif from './Components/Temperature.gif';
import weatherGif from './Components/Weather.gif';
import humidityImg from './Components/Humidity.png';
import windGif from './Components/Wind.gif';

const WeatherInfo = ({ weatherData, onRemoveCity }) => {
  if (!weatherData) return null; 

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <div className="details">
        <div className="info-item">
          <img src={cloudGif} alt="Cloud Icon" style={{ width: '50px' }} />
          <span>Temperature:</span> {main.temp}°C
        </div>
        <div className="info-item">
          <img src={weatherGif} alt="Weather Icon" style={{ width: '50px' }} />
          <span>Weather:</span> {weather[0].main}
        </div>
        <div className="info-item">
          <img src={humidityImg} alt="Humidity Icon" style={{ width: '50px' }} />
          <span>Humidity:</span> {main.humidity}%
        </div>
        <div className="info-item">
          <img src={windGif} alt="Wind Icon" style={{ width: '50px' }} />
          <span>Wind Speed:</span> {wind.speed} m/s
        </div>
      </div>
      <button onClick={() => onRemoveCity(name)}>Remove</button> 
    </div>
  );
};

export default WeatherInfo;
