import React, { useState, useEffect } from 'react';

let weatherContext = React.createContext();
let { Provider, Consumer } = weatherContext;

function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=561e9f9cfa6141c98d820420202310&q=caracas`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);

  return <Provider value={weather}>{children}</Provider>;
}

export { WeatherProvider, Consumer as weatherConsumer, weatherContext };
