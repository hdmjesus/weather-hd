import React, { useEffect, useState, useMemo } from 'react';

export function WeatherProvider() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=561e9f9cfa6141c98d820420202310&q=caracas`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);
  return weather;
}

// export function useWeather() {
//   const context = useContext(WeatherContext);
//   if (!context) {
//     throw new Error(`El useWeather debe estar dentro del provider`);
//   }
//   return context;
// }

// export const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   },
// };

// const themeContext = React.createContext();

// export default themeContext;
