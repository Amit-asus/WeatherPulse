import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/ useWeather";
import "./Home.css";

const Home = () => {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div>
      <div className="home-container">
        <h1>WeatherPulse – Real-Time Forecasts </h1>
        <img src="nirmaan.png" alt="nirmaan" className="nirmaanImage" />
        <SearchBar onSearch={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && <WeatherCard weather={weather} />}
        <div
          className="footer"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          Designed with dedication by Amit ❤️
        </div>
      </div>
    </div>
  );
};

export default Home;
