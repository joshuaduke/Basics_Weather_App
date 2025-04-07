import React, { useState, useEffect } from "react";
import { getCurrentCityWeather } from "../../api/openWeatherApi";

const newObj = {
  coord: {
    lon: -79,
    lat: 43,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 5.69,
    feels_like: 2.64,
    temp_min: 4.95,
    temp_max: 6.7,
    pressure: 1007,
    humidity: 62,
    sea_level: 1007,
    grnd_level: 985,
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 220,
  },
  clouds: {
    all: 0,
  },
  dt: 1744042014,
  sys: {
    type: 2,
    id: 2007677,
    country: "US",
    sunrise: 1744022820,
    sunset: 1744069720,
  },
  timezone: -14400,
  id: 5137842,
  name: "Sheenwater",
  cod: 200,
};

const CurrentDayHeader = () => {
  const [latitude, setlatitude] = useState(43.5853);
  const [longitude, setlongitude] = useState(-79.645);
  const [currentCityWeatherData, setcurrentCityWeatherData] = useState([]);

  useEffect(() => {
    const currentCityData = async () => {
      const data = await getCurrentCityWeather(latitude, longitude);
      setcurrentCityWeatherData(data);
      console.log("Data", data);
    };
    currentCityData();
  }, []);

  return (
    <>
      {currentCityWeatherData.length != 0 ? (
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${currentCityWeatherData.weather[0].icon}@2x.png`}
            alt=""
          />

          <h1>
            {" "}
            {currentCityWeatherData.weather[0].description},{" "}
            {currentCityWeatherData.main.temp}&deg; <span>Today</span>
          </h1>
        </div>
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </>
  );
};

export default CurrentDayHeader;
