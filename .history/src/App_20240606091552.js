import React, { useState, useEffect } from "react";
import "./App.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data.weather);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Failed to fetch weather data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-app">
      <h1>Weather Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>
      </form>
      {loading && <p>Loading data...</p>}
      {weatherData.length > 0 && (
        <div className="weather-cards">
          {weatherData.map((weather, index) => (
            <div className="weather-card" key={index}>
              <h2>{weather.main}</h2>
              <p>{weather.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
