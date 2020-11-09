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
  const [weatherConditionImg, setweatherConditionImg] = useState();
  const [weatherTomorrow, setWeathertomorrow] = useState([]);

  async function getData() {
    const URLDAYS = `http://api.weatherapi.com/v1/forecast.json?key=561e9f9cfa6141c98d820420202310&q=Berlin&days=10/:splat20200`;
    let response = await fetch(URLDAYS);
    let data = await response.json();
    setWeatherContent(data.current);
    setWeatherLocation(data.location);
    setweatherCondition(data.current.condition.text);
    setweatherConditionImg(data.current.condition.icon);
    setWeathertomorrow(data.forecast.forecastday);
    console.log(weatherTomorrow);
  }

  async function getDataInput() {
    const ciudad = document.getElementById('city').value;
    if (ciudad.length === 0) {
      console.log('intente agregar una ciudad');
    } else {
      const URLDAYS = `http://api.weatherapi.com/v1/forecast.json?key=561e9f9cfa6141c98d820420202310&q=${ciudad}&days=10/:splat20200!`;
      let response = await fetch(URLDAYS);
      let data = await response.json();
      setWeatherContent(data.current);
      setWeatherLocation(data.location);
      setweatherCondition(data.current.condition.text);
      setweatherConditionImg(data.current.condition.icon);
      setWeathertomorrow(data.forecast.forecastday);
    }
  }

  async function getDataLocation() {
    if (!navigator.geolocation) {
      console.log('GPS desahabilitado');
      return;
    }

    async function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      const URL = `http://api.weatherapi.com/v1/current.json?key=561e9f9cfa6141c98d820420202310&q=${latitude} ${longitude}/:splat 200!`;
      let response = await fetch(URL);
      let data = await response.json();
      setWeatherContent(data.current);
      setWeatherLocation(data.location);
      setweatherCondition(data.current.condition.text);
      setweatherConditionImg(data.current.condition.icon);
    }
    navigator.geolocation.getCurrentPosition(success);
  }

  function hiddenModal() {
    const $modalSearch = document.getElementById('modal-search');
    const ciudad = document.getElementById('city').value;

    $modalSearch.classList.toggle('modal-off');
    if (ciudad.length === 0) {
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <WeatherPrincipal
        location={weatherLocation}
        contenido={weatherContent}
        condition={weatherCondition}
        conditionImg={weatherConditionImg}
        hidden={hiddenModal}
        gpsLocation={getDataLocation}>
        <Find click={getDataInput} hidden={hiddenModal} />
      </WeatherPrincipal>
      <WeatherDescription>
        <NextDays>
          {weatherTomorrow.map((day) => {
            <DetailsNextDays></DetailsNextDays>;
          })}
        </NextDays>
        <Hightlights contenido={weatherContent} />
      </WeatherDescription>

      <Footer />
    </>
  );
};

export default Home;
