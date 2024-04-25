import React, { useState } from 'react';

const Form = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      getWeather(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
