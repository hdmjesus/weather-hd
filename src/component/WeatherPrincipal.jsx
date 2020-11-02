import React, { useEffect, useState, useContext } from 'react';
import LightCloud from '../Assets/img/Shower.webp';

const WeatherPrincipal = (props) => {
  const [temp, setTemp] = useState(Number);
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
  } = props;

  function showModal() {
    props.hidden();
  }

  useEffect(() => {
    setTemp(temp_c);
    setWeather(condition);
    setDate(localtime);
    setCity(name);
    getDates();
  });

  function getDates() {
    let days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];

    let months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    if (typeof date === 'string') {
      // StringDate es el resultado de agarrar el string con fecha y hora y separar la fecha de la hora con split('espacio'),
      // luego de eso se usa replace(con una empresion regular que saca los guiones y los reemplaza por comas)
      const stringDate = date.split(' ')[0].replace(/[-]/g, ',');
      const dayIndex = new Date(stringDate).getDay();
      const dayCalendar = new Date(stringDate).getDate();
      const day = days[dayIndex];
      const monthIndex = new Date(stringDate).getMonth();
      const month = months[monthIndex];

      setmonth(month);
      setdayCalendars(dayCalendar);
      setday(day);
    }
  }

  return (
    <>
      <section className='principal  min-h-screen bg-primary'>
        <article className='px-6 py-2'>
          <div className='flex justify-between items-center'>
            <button
              onClick={showModal}
              className='bg-gray-700 hover:bg-gray-600 text-white  text-sm py-1 px-4 rounded inline-flex items-center h-8'>
              <span>Seach for places</span>
            </button>
            <div className='bg-gray-700  w-10 rounded-full h-10'>
              <span className='material-icons block text-center p-2 text-white'>
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
          <figure className='w-32 py-12 m-auto'>
            <img className='m-auto' src={LightCloud} alt='tiempo actual' />
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
                {day},{dayCalendar},{month}
              </span>
            </p>
            <p className='text-base mt-8 mb-4 text-fontD  font-medium'>
              <span className='material-icons '>location_on</span> {city}
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
