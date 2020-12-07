import React, { useState, useEffect } from 'react';
import weatherImg from '../Assets/img/Clear.webp';

const DetailsNextDays = (props) => {
  const [Dindex, setDindex] = useState(String);
  const [day, setDay] = useState(String);
  function getDay() {
    let days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];

    const dayIndex = new Date(Dindex).getDay();
    setDindex(props.day.date);
    setDay(days[dayIndex]);
  }
  useEffect(() => {
    getDay();
  });
  useEffect(() => {});
  return (
    <article className='dia flex flex-col justify-around max-w-10 text-center p-3 bg-primary m-1 h-40'>
      <h2 className=''>{day}</h2>
      <figure className='w-12 m-auto'>
        <img
          className='m-auto'
          src={props.day.day.condition.icon}
          alt='soleado'
        />
      </figure>
      <div className=''>
        <p className='text-sm'>
          <span className='inline-block'>
            {typeof props.day.day.maxtemp_c === 'number'
              ? props.day.day.maxtemp_c.toFixed()
              : temp}{' '}
            ºC
          </span>{' '}
          {'      '}
          <span className='inline-block text-fontD ml-1'>
            {typeof props.day.day.mintemp_c === 'number'
              ? props.day.day.mintemp_c.toFixed()
              : temp}{' '}
            ºC
          </span>
        </p>
      </div>
    </article>
  );
};

export default DetailsNextDays;
