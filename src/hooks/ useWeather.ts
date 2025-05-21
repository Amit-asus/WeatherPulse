import { useState } from "react";
import { getWeatherByCity } from "../api/weatherApi";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err: any) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};
