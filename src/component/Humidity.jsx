import React, { useEffect, useState, useContext } from 'react';

const Humidity = (props) => {
  const [humidity, setHumidity] = useState(null);
  useEffect(() => {
    setHumidity(props.parametros.contenido.humidity);
    const $barHumidity = document.getElementById('percent');

    function humidityBarCheck() {
      if (humidity <= 25) {
        $barHumidity.classList.remove(
          'onehundred',
          'higher-seventyfive',
          'between-fifty-seventyfive',
          'between-twentyfive-fifty'
        );
        $barHumidity.classList.add('less-twenty-five');
      } else if (humidity >= 25 && humidity <= 50) {
        $barHumidity.classList.remove(
          'onehundred',
          'higher-seventyfive',
          'between-fifty-seventyfive',
          'less-twenty-five'
        );
        $barHumidity.classList.add('between-twentyfive-fifty');
      } else if (humidity >= 50 && humidity <= 75) {
        $barHumidity.classList.remove(
          'onehundred',
          'higher-seventyfive',
          'between-twentyfive-fifty',
          'less-twenty-five'
        );
        $barHumidity.classList.add('between-fifty-seventyfive');
      } else if (humidity >= 75 && humidity <= 99) {
        $barHumidity.classList.remove(
          'onehundred',
          'between-fifty-seventyfive',
          'between-twentyfive-fifty',
          'less-twenty-five'
        );
        $barHumidity.classList.add('higher-seventyfive');
      } else if (humidity == 100) {
        $barHumidity.classList.remove(
          'higher-seventyfive',
          'between-fifty-seventyfive',
          'between-twentyfive-fifty',
          'less-twenty-five'
        );
        $barHumidity.classList.add('onehundred');
      }
    }
    humidityBarCheck();
  });

  return (
    <article className='parametros bg-primary text-center flex flex-col justify-center '>
      <div>
        <h3 className=''>Humidity</h3>
        <p className='font-bold text-4xl'>
          {humidity}
          <span className='text-4xl font-medium'>%</span>{' '}
        </p>
        <div className='w-8/12 m-auto'>
          <div className='flex justify-between font-bold'>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className='bar h-3 w-full bg-gray-400 rounded-full mt-3'>
            <div
              className='percent h-3 rounded-full bg-yellow-400'
              id='percent'></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Humidity;
