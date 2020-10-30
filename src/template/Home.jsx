import React, { useEffect, useState, useContext } from 'react';

import Find from '../component/Find';
import WeatherPrincipal from '../component/WeatherPrincipal';
import WeatherDescription from '../component/WeatherDescription';
import NextDays from '../component/NextDays';
import DetailsNextDays from '../component/DetailsNextDays';
import Hightlights from '../component/Hightlights';
import Wind from '../component/Wind';
import Humidity from '../component/Humidity';
import AirPressure from '../component/AirPressure';
import Visibility from '../component/Visibility';
import Footer from '../component/Footer';

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=561e9f9cfa6141c98d820420202310&q=caracas`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.location))
      .catch((err) => console.log(err));
  }, []);
  console.log(weather);

  return (
    <>
      <WeatherPrincipal>
        <Find />
      </WeatherPrincipal>
      <WeatherDescription>
        <NextDays>
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
        </NextDays>
        <Hightlights>
          <Wind />
          <Humidity />
          <Visibility />
          <AirPressure />
        </Hightlights>
      </WeatherDescription>

      <Footer />
    </>
  );
};

export default Home;
