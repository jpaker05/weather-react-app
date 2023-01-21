import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");

  let [currentWeather, setCurrentWeather] = useState({});

  function showCurrentWeather(response) {
    setCurrentWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showCurrentWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weatherData">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>

      <ul>
        <li>Temperature: {Math.round(currentWeather.temperature)}°C</li>
        <li>Description: {currentWeather.description} </li>
        <li>Humidity: {currentWeather.humidity} %</li>
        <li>Wind: {currentWeather.wind} km/h</li>
        <li>
          <img src={currentWeather.icon} alt={currentWeather.description} />
        </li>
      </ul>
    </div>
  );
}
