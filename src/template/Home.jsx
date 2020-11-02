import React, { useEffect, useState, useContext } from 'react';

import Find from '../component/Find';
import WeatherPrincipal from '../component/WeatherPrincipal';
import WeatherDescription from '../component/WeatherDescription';
import NextDays from '../component/NextDays';
import DetailsNextDays from '../component/DetailsNextDays';
import Hightlights from '../component/Hightlights';
import Footer from '../component/Footer';

const Home = () => {
  const [weatherContent, setWeatherContent] = useState({});
  const [weatherLocation, setWeatherLocation] = useState({});
  const [weatherCondition, setweatherCondition] = useState();

  async function getData() {
    const ciudad = document.getElementById('city').value;
    const URL = `http://api.weatherapi.com/v1/current.json?key=561e9f9cfa6141c98d820420202310&q=${ciudad}}`;
    let response = await fetch(URL);
    let data = await response.json();
    setWeatherContent(data.current);
    setWeatherLocation(data.location);
    setweatherCondition(data.current.condition.text);
    console.log(weatherLocation);
    console.log(ciudad);
  }
  function hiddenModal() {
    const $modalSearch = document.getElementById('modal-search');
    $modalSearch.classList.toggle('modal-off');
  }

  useEffect(() => {
    // getData();
  }, []);
  return (
    <>
      <WeatherPrincipal
        location={weatherLocation}
        contenido={weatherContent}
        condition={weatherCondition}
        hidden={hiddenModal}>
        <Find click={getData} hidden={hiddenModal} />
      </WeatherPrincipal>
      <WeatherDescription>
        <NextDays>
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
          <DetailsNextDays />
        </NextDays>
        <Hightlights contenido={weatherContent} />
      </WeatherDescription>

      <Footer />
    </>
  );
};

export default Home;
