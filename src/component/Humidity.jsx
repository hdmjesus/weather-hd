import React, { useEffect, useState, useContext } from 'react';

const Humidity = (props) => {
  const [humidity, setHumidity] = useState(null);
  useEffect(() => {
    setHumidity(props.parametros.contenido.humidity);
  });

  return (
    <article className='parametros bg-primary text-center flex flex-col justify-center'>
      <div>
        <h3 className=''>Humidity</h3>
        <p className='font-bold text-6xl'>
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
            <div className='percent h-3 w-4/5 rounded-full bg-yellow-400'></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Humidity;
