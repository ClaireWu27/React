import React, { useEffect, useState } from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

function App() {
  const [state, setState] = useState({
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: {},
  });
  // async fetchWeather() {
  const fetchWeather = async () => {
    if (state.location.length < 2)
      return setState((curState) => ({ ...curState, weather: {} }));
    try {
      setState((curState) => ({ ...curState, isLoading: true }));
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      setState((curState) => ({
        ...curState,
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      }));

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();

      setState((curState) => ({ ...curState, weather: weatherData.daily }));
    } catch (err) {
      console.error(err);
    } finally {
      setState((curState) => ({ ...curState, isLoading: false }));
    }
  };

  useEffect(() => {
    const savedLocation = localStorage.getItem("location") || "";
    setState((curState) => ({ ...curState, location: savedLocation }));
  }, []);
  useEffect(() => {
    if (state.location) {
      fetchWeather();
      localStorage.setItem("location", state.location);
    }
  }, [state.location]);

  return (
    <div className="app">
      <h1>Classy weather</h1>
      <Input
        location={state.location}
        onChangeLocation={(e) =>
          setState((curState) => ({ ...curState, location: e.target.value }))
        }
      />
      <button onClick={fetchWeather}>Get weather</button>

      {state.isLoading && <p className="loader">Loading...</p>}

      {state.weather && state.weather.weathercode && (
        <Weather weather={state.weather} location={state.displayLocation} />
      )}
    </div>
  );
}

export default App;

function Input({ location, onChangeLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search from location..."
        value={location}
        onChange={onChangeLocation}
      />
    </div>
  );
}
function Weather({ weather, location }) {
  useEffect(() => {
    return () => {
      console.log("weather will amount");
    };
  }, []);

  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;

  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

function Day({ max, min, date, code, isToday }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>

      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}
