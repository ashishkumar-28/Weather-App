import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import WeatherInfo from './WeatherInfo';
import Error from './Error';
import { addCity, removeCity, getCities } from './CityManager';
import './App.css';

const API_KEY = '168771779c71f3d64106d8a88376808a';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState(getCities());

  useEffect(() => {
    setCities(getCities());
  }, []);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
      addCity(city);
      setCities(getCities());
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRemoveCity = (city) => {
    removeCity(city);
    setCities(getCities());
    if (weatherData && weatherData.name === city) {
      setWeatherData(null);
    }
  };

  const handleSwitchCity = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <div className="centered">
        <h1>Weather App</h1>
        <Form getWeather={getWeather} />
        {error && <Error message={error} />}
        {weatherData && (
          <WeatherInfo
            weatherData={weatherData}
            onRemoveCity={handleRemoveCity}
            onSwitchCity={handleSwitchCity}
          />
        )}
        <div>
          <h2>Cities List</h2>
          <ul className="city-list">
            {cities.map((city, index) => (
              <li key={index}>
                {city}{' '}
                <button onClick={() => handleRemoveCity(city)}>Remove</button>{' '}
                <button onClick={() => handleSwitchCity(city)}>Switch</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
