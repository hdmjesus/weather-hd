import React, { useEffect, useState, useContext } from 'react';
import LightCloud from '../Assets/img/Shower.webp';

const WeatherPrincipal = (props) => {
  const [temp, setTemp] = useState(23);
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState(String);
  const [city, setCity] = useState(null);

  const [month, setmonth] = useState('');
  const [dayCalendar, setdayCalendars] = useState('');
  const [day, setday] = useState('');

  const {
    location: { name, country, lat, localtime, region, tz_id },
    contenido: {
      feelslike_c,
      feelslike_f,
      gust_kph,
      gust_mph,
      humidity,
      last_updated,
      precip_in,
      precip_mm,
      pressure_in,
      pressure_mb,
      temp_c,
      temp_f,
      uv,
      wind_kph,
      wind_mph,
    },
    condition,
    conditionImg,
  } = props;

  function showModal() {
    props.hidden();
  }

  useEffect(() => {
    try {
      setTemp(temp_c);
      setWeather(condition);
      setDate(localtime);
      setCity(name);
    } catch (error) {
      console.log(error.message);
    }

    getDates();
  });

  function getDates() {
    let days = ['Dom', 'Lun', 'Mart', 'Mier', 'Jue', 'Vie', 'Sab'];

    let months = [
      'Ene',
      'Feb',
      'Marz',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sept',
      'Oct',
      'Nov',
      'Dic',
    ];
    if (typeof date === 'string') {
      // StringDate es el resultado de agarrar el string con fecha y hora y separar la fecha de la hora con split('espacio'),
      // luego de eso se usa replace(con una empresion regular que saca los guiones y los reemplaza por comas)
      const stringDate = date.split(' ')[0].replace(/[-]/g, ',');
      const dayIndex = new Date(stringDate).getDay();
      const monthIndex = new Date(stringDate).getMonth();

      const day = days[dayIndex];
      const dayCalendar = new Date(stringDate).getDate();
      const month = months[monthIndex];

      setmonth(month);
      setdayCalendars(dayCalendar);
      setday(day);
    }
  }

  function locationMode() {
    console.log('clic');
    props.gpsLocation();
  }

  return (
    <>
      <section className='principal relative lg:w-1/3 min-h-screen bg-primary'>
        <article className='px-6 py-2'>
          <div className='flex justify-between items-center'>
            <button
              onClick={showModal}
              className='bg-gray-700 hover:bg-gray-600 text-white  text-sm py-1 px-4 rounded inline-flex items-center h-8'>
              <span>Seach for places</span>
            </button>
            <div
              onClick={locationMode}
              className='bg-gray-700  w-10 rounded-full h-10'>
              <span className='material-icons block text-center p-2 cursor-pointer text-white'>
                gps_fixed
              </span>
            </div>
          </div>
        </article>
        <div className='clouds min-w-full max-w-screen-lg h-64 absolute overflow-hidden'>
          <div className='cloud-left-top w-32 h-32'></div>
          <div className='cloud-left-botton w-32 h-32'></div>
          <div className='cloud-right-top w-32 h-32'></div>
          <div className='cloud-right-botton w-32 h-32'></div>
        </div>

        <article className=' z-10'>
          <figure className='w-20 py-5 m-auto'>
            <img
              className='w-full m-auto'
              src={conditionImg}
              alt='tiempo actual'
            />
          </figure>

          <article className='flex flex-col justify-between h-auto w-11/12 m-auto text-fontC text-center '>
            <h1 className='font-medium text-9xl  py-0 -mt-10'>
              <span className='inline-block'>
                {typeof temp === 'number' ? temp.toFixed() : temp}
              </span>
              <span className='text-4xl inline-block'>ºC</span>
            </h1>
            <h2 className='font-semibold text-4xl text-fontD font-medium'>
              {weather}
            </h2>
            <p className='font-medium text-base mt-8 text-fontD font-medium'>
              Today .{' '}
              <span>
                {day} , {dayCalendar} , {month}
              </span>
            </p>
            <p className='  text-base mt-8 mb-4 text-fontD  font-medium'>
              <span className='material-icons align-text-bottom'>
                location_on
              </span>{' '}
              {city}
            </p>
          </article>
        </article>
        <article
          className=' modal modal-off   absolute top-0  z-20 bg-primary w-full h-screen'
          id='modal-search'>
          {props.children}
        </article>
      </section>
    </>
  );
};

export default WeatherPrincipal;
