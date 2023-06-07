import React, { useEffect, useState } from "react";

const WeatherAnalyzer = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New York`);
        const data = await response.json();
        setWeather(data.current.condition.text);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  useEffect(() => {
    if (weather.toLowerCase().includes("sunny")) {
      setEmoji("😊");
    } else if (weather.toLowerCase().includes("rainy")) {
      setEmoji("😢");
    } else {
      setEmoji("😐");
    }
  }, [weather]);

  return (
    <div>
      <h2>Weather Analyzer</h2>
      <p>Current weather: {weather}</p>
      <p>Emoji: {emoji}</p>
    </div>
  );
};

export default WeatherAnalyzer;
